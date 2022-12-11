import type { NextPage } from 'next'
import { Card, Text } from "@nextui-org/react";
import DashCard from '../../components/DashCard';
// localhost:3000
const re: NextPage = () => {
  return (
    <>

      <Text> This is the Card page </Text>
      <DashCard
        title="NeoNext"
        imageURL="./schema.png"
        desc="Self hosted Neodash Charts"
      /> 
    
    </>
  )
}

export default re
