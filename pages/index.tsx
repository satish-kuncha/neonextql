import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Text, Spacer } from "@nextui-org/react";
// localhost:3000
const Home: NextPage = () => {
  return (
    <>
      <Text h2>Neo4j and Graphql with Apollo</Text>
      <Spacer y={1} />
      <Text size="$lg">
         Graph components to show nodes and links
      </Text>
    </>
  )
}

export default Home
