import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import dynamic from "next/dynamic";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import { useState } from "react";
import _ from "lodash";

import { Container, Row, Col, Navbar, Text, Button } from '@nextui-org/react';



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


const NoSSRForceGraph = dynamic(() => import("../lib/NoSSRForceGraph"), {
  ssr: false,
});

const formatData = (data) => {
  const nodes = [];
  const links = [];

  if (!data.applications) {
    return { nodes, links };
  }

  data.applications.forEach((a) => {
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

  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const { data } = useQuery(applicationsQuery, {
    onCompleted: (data) => { 
      console.log("=the data is " + data) 
      setGraphData(formatData(data));
    },
  });


  return (

    <Container>

      { /*Navigation bar*/}
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>

          <Text b color='inherit'>
              Neo4j Visuals
          </Text>

        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Link href="#"> Graph 3D </Navbar.Link>
          <Navbar.Link href="#"> Graph 2D </Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          <Navbar.Link href="#"> Using Graphql, Neo4j Graphql, Apollo </Navbar.Link>
          
          <Navbar.Item> 
            <Button auto flat href="#">
                Neo4j
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

        
        <NoSSRForceGraph
        nodeLabel={"id"}
        nodeAutoColorBy="businessCriticality"
        graphData={graphData}
        onNodeClick={(node, event) => {
          console.log(node);
        }}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.id;
          const fontSize = 12/globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;
          const textWidth = ctx.measureText(label).width;
          const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = node.color;
          ctx.fillText(label, node.x, node.y);

          node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
        }}
        nodePointerAreaPaint={(node, color, ctx) => {
          ctx.fillStyle = color;
          const bckgDimensions = node.__bckgDimensions;
          bckgDimensions && ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
        }}
        />

      { /*Main area*/}

      { /*Sub graphs cards*/}

    </Container>
 
  )
}
