import { Navbar, Container, Nav } from "react-bootstrap";
import Searchbar from "./searchbar";
import "bootstrap/dist/css/bootstrap.min.css";

const navigation = () => {
        return (
                <>
                        <Navbar bg="dark" variant="dark">
                                <Container fluid>
                                        <Navbar.Brand>☁️ Weather</Navbar.Brand>
                                        <Nav className="me-auto">
                                                <Searchbar />
                                        </Nav>
                                </Container>
                        </Navbar>
                </>
        );
};

export default navigation;
