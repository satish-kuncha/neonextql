import { Navbar, Button, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavbarComponent = () => {
    const router = useRouter();

    function show3dpage() {
        router.push("/graph3d"); // localhost:3000/graph3d
    }
    
    function show2dpage() {
        router.push("/graph2d"); // localhost:3000/graph2d
    }

    return (
        <Navbar isBordered isCompact>
            <Navbar.Brand as={Link} href="/">
                NeoNext
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" variant="highlight-rounded">
                <Navbar.Link href="/graph2d">Graph2d</Navbar.Link>
            </Navbar.Content>

            <Navbar.Content>
                <>
                    <Navbar.Item>
                        <Button auto flat onPress={() => show3dpage()}>
                          Graph 3d 
                        </Button>
                    </Navbar.Item>
                </>
            </Navbar.Content>
        </Navbar>
    )
}

export default NavbarComponent;