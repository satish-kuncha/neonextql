import { Navbar, Button, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavbarComponent = () => {
    const router = useRouter();

    function show3dpage() {
        router.push("/graph3d"); // localhost:3000/graph3d
    }

    function showCardpage() {
        router.push("/cardview"); // localhost:3000/card
    }
    
    function show2dpage() {
        router.push("/graph2d"); // localhost:3000/graph2d
    }

    return (
        <Navbar isBordered isCompact>
            <Navbar.Brand as={Link} href="/">
                NeoNext - Components via Module Federation
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" variant="highlight-rounded">
            <Navbar.Item>
                        <Button auto flat onPress={() => showCardpage()}>
                                 Dashboard Section   - As Iframe
                        </Button>
                    </Navbar.Item>
            </Navbar.Content>

            <Navbar.Content>
                <>
                    <Navbar.Item>
                        <Button auto flat onPress={() => show3dpage()}>
                            3d Cloud (Neo4j DB call via graphql) 
                        </Button>
                    </Navbar.Item>
                </>
            </Navbar.Content>
        </Navbar>
    )
}

export default NavbarComponent;