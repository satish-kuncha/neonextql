import { gql, ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import neo4j from "neo4j-driver";
import { Neo4jGraphQL } from "@neo4j/graphql";

const typeDefs = gql`
type Application {
	businessCriticality: String
	consumesInterfaceInterfaces: [Interface!]! @relationship(type: "CONSUMES_INTERFACE", direction: OUT)
	criticalityOrder: BigInt
	currentLifeCycleStage: String
	description: String
	functionalFit: String
	hasItComponentsitComponents: [ITComponent!]! @relationship(type: "HAS_IT_COMPONENTS", direction: OUT)
	hosting: String
	machinesHostsApplication: [Machine!]! @relationship(type: "HOSTS_APPLICATION", direction: IN)
	name: String!
	providesCapabilityBusinessCapabilities: [BusinessCapability!]! @relationship(type: "PROVIDES_CAPABILITY", direction: OUT)
	providesInterfaceInterfaces: [Interface!]! @relationship(type: "PROVIDES_INTERFACE", direction: OUT)
	region: String
	relatedDataDataObjects: [DataObject!]! @relationship(type: "RELATED_DATA", direction: OUT)
	sla: String
	supportsProcessProcesses: [Process!]! @relationship(type: "SUPPORTS_PROCESS", direction: OUT)
	technicalFit: String
	usedByUsersUserGroups: [UserGroup!]! @relationship(type: "USED_BY_USERS", direction: OUT)
}

type BusinessCapability {
	applicationsProvidesCapability: [Application!]! @relationship(type: "PROVIDES_CAPABILITY", direction: IN)
	businessCapabilitiesHasChildCapability: [BusinessCapability!]! @relationship(type: "HAS_CHILD_CAPABILITY", direction: IN)
	capabilityName: String!
	hasChildCapabilityBusinessCapabilities: [BusinessCapability!]! @relationship(type: "HAS_CHILD_CAPABILITY", direction: OUT)
	maturity: String!
	strategicImportance: String!
}

type DataObject {
	applicationsRelatedData: [Application!]! @relationship(type: "RELATED_DATA", direction: IN)
	dataClassification: String!
	dataObjectName: String!
	interfacesRelatedDataObjects: [Interface!]! @relationship(type: "RELATED_DATA_OBJECTS", direction: IN)
}

type ITComponent {
	applicationsHasItComponents: [Application!]! @relationship(type: "HAS_IT_COMPONENTS", direction: IN)
	description: String
	eol: Date
	eos: Date
	eosSecurity: Date
	hasVulnerabilityVulnerabilities: [Vulnerability!]! @relationship(type: "HAS_VULNERABILITY", direction: OUT)
	interfacesRelatedItComponents: [Interface!]! @relationship(type: "RELATED_IT_COMPONENTS", direction: IN)
	isOfTechTypeTechCategories: [TechCategory!]! @relationship(type: "IS_OF_TECH_TYPE", direction: OUT)
	itComponentName: String!
	machinesHasInstanceOf: [Machine!]! @relationship(type: "HAS_INSTANCE_OF", direction: IN)
	providersProvidesItComponent: [Provider!]! @relationship(type: "PROVIDES_IT_COMPONENT", direction: IN)
	releaseDate: Date
	subtype: String
}

type Interface {
	applicationsConsumesInterface: [Application!]! @relationship(type: "CONSUMES_INTERFACE", direction: IN)
	applicationsProvidesInterface: [Application!]! @relationship(type: "PROVIDES_INTERFACE", direction: IN)
	dataFlowDirection: String!
	frequency: String!
	interfaceName: String!
	interfaceType: String!
	relatedDataObjectsDataObjects: [DataObject!]! @relationship(type: "RELATED_DATA_OBJECTS", direction: OUT)
	relatedItComponentsitComponents: [ITComponent!]! @relationship(type: "RELATED_IT_COMPONENTS", direction: OUT)
}

type Machine {
	hasInstanceOfitComponents: [ITComponent!]! @relationship(type: "HAS_INSTANCE_OF", direction: OUT)
	hostsApplicationApplications: [Application!]! @relationship(type: "HOSTS_APPLICATION", direction: OUT)
	name: String!
	patchedByPatches: [Patch!]! @relationship(type: "PATCHED_BY", direction: OUT, properties: "PatchedByProperties")
	role: String
	type: String
}

type Patch {
	created: Date!
	machinesPatchedBy: [Machine!]! @relationship(type: "PATCHED_BY", direction: IN, properties: "PatchedByProperties")
	name: String!
	patchesVulnerabilities: [Vulnerability!]! @relationship(type: "PATCHES", direction: OUT)
}

interface PatchedByProperties @relationshipProperties {
	date: Date!
}

type Process {
	applicationsSupportsProcess: [Application!]! @relationship(type: "SUPPORTS_PROCESS", direction: IN)
	description: String!
	processName: String!
}

type Provider {
	description: String
	providerCriticality: String
	providerName: String!
	providerQuality: String
	providesItComponentitComponents: [ITComponent!]! @relationship(type: "PROVIDES_IT_COMPONENT", direction: OUT)
}

type TechCategory {
	hasChildCategoryTechCategories: [TechCategory!]! @relationship(type: "HAS_CHILD_CATEGORY", direction: OUT)
	itComponentsIsOfTechType: [ITComponent!]! @relationship(type: "IS_OF_TECH_TYPE", direction: IN)
	techCategoriesHasChildCategory: [TechCategory!]! @relationship(type: "HAS_CHILD_CATEGORY", direction: IN)
	techCategoryName: String!
}

type UserGroup {
	applicationsUsedByUsers: [Application!]! @relationship(type: "USED_BY_USERS", direction: IN)
	userGroup: String!
}

type Vulnerability {
	cwe: String
	description: String!
	itComponentsHasVulnerability: [ITComponent!]! @relationship(type: "HAS_VULNERABILITY", direction: IN)
	name: String!
	patchedIn: String
	patchesPatches: [Patch!]! @relationship(type: "PATCHES", direction: IN)
	product: String!
	productType: String!
	publishDate: Date!
	score: BigInt!
	updateDate: Date!
	vendor: String!
}
`;


const driver = neo4j.driver(
    process.env.NEO4J_URI,
    neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD) // get it from the environment local
  );


  export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "https://studio.apollographql.com");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (req.method === "OPTIONS") {
        res.end();
        return false;
    }

    const neoSchema = new Neo4jGraphQL({ typeDefs, driver });
    const apolloServer = new ApolloServer({ schema: await neoSchema.getSchema() });
    await apolloServer.start();
    await apolloServer.createHandler({
        path: "/api/graphql",
    })(req, res);
}

export const config = {
    api: {
        bodyParser: false,
    },
};