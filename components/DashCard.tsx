import { NextPage } from "next";
import { useRouter } from "next/router";
import { Card, Text } from "@nextui-org/react";

interface Props {
    title: String;
    desc: String;
    imageURL : String;
}

const DashCard: NextPage<Props> = (props) => {
    const router = useRouter();
    const { title, desc, imageURL } = props;
    // inserted_at date string
    // console.log(inserted_at)


    return (
        <Card
            isPressable
            css={{mb: "$10"}}
            onPress={() => router.push("/neodash")}
        >
            <Card.Header>
                <Text> {props.title}</Text>
            </Card.Header>
            <Card.Body>
                <Text h2>Click to go to Dashboard as Iframe</Text>
                <Text b>{props.desc}</Text>
                <Card.Image src={`${props.imageURL}`} />
            </Card.Body>
           
        </Card>
    );
}

export default DashCard;