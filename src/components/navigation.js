import { Navbar, Container, Nav } from "react-bootstrap";
import Searchbar from "./searchbar";
import "bootstrap/dist/css/bootstrap.min.css";

const navigation = () => {
        return (
                <>
                        <Navbar bg="dark" variant="dark">
                                <Container>
                                        <Navbar.Brand>☁️ Weather</Navbar.Brand>
                                        <Nav>
                                                <Searchbar />
                                        </Nav>
                                </Container>
                        </Navbar>
                </>
        );
};

export default navigation;
