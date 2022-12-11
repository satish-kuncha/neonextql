import dynamic from "next/dynamic";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import { useState } from "react";
import _ from "lodash";
import SpriteText from "three-spritetext";
import {GraphData, NodeObject} from "react-force-graph-3d";

const applicationsQuery = gql`
  query applications {
  applications {
    name
    businessCriticality
    machinesHostsApplication {
      name
    }
    consumesInterfaceInterfaces {
      interfaceName
    }
    providesCapabilityBusinessCapabilities {
      capabilityName
      maturity
    }
    providesInterfaceInterfaces {
      interfaceName
      interfaceType
    }
  }
}
`;


const ForceGraph3D = dynamic(() => import("../../lib/NoSSRForceGraph3D"), {
  ssr: false,
});



const formatData = (data : GraphData) => {
  const nodes: any = [];
  const links: any = [];

  if (!data.hasOwnProperty('applications')) {
    return { nodes, links };
  }

  data['applications'].forEach((a:any) => {
    nodes.push({
      id: a.name,
      businessCriticality : a.businessCriticality,
    });

    nodes.push({
      id: a.machinesHostsApplication.name,
    });

    nodes.push({
      id: a.providesCapabilityBusinessCapabilities.name,
    });

    links.push({
      source: a.machinesHostsApplication.name,
      target: a.name,
    });

    links.push({
      source: a.providesCapabilityBusinessCapabilities.name,
      target: a.name,
    });

  });

  return {
    nodes: _.uniqBy(nodes, "id"),
    links,
  };
};

export default function Home() {
  const [graphDatax, setGraphData] = useState({ nodes: [], links: [] });
  const { data } = useQuery(applicationsQuery, {
    onCompleted: (data) => { 
      console.log("=the data is ", data) 
      setGraphData(formatData(data));
    },
  });
  

  return (


      <ForceGraph3D
          graphData={graphDatax}
          nodeAutoColorBy="businessCriticality"
          nodeThreeObject={(node : any) => {
            const sprite = new SpriteText(node['id']);
            sprite.color = node['color'];
            sprite.textHeight = 8;
            return sprite;
          }}
        />

  );
}