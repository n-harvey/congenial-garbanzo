import { Navbar, Container, Nav } from "react-bootstrap";
import Searchbar from "./searchbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

const Navigation = () => {
        const [zipCodes, setZipCodes] = useState([]);

        useEffect(() => {
                const zipCodes = JSON.parse(localStorage.getItem("zipCodes")) || [];
                setZipCodes(zipCodes);
        }, []);

        return (
                <>
                        <Navbar bg="light" variant="lg">
                                <Container>
                                        <Navbar.Brand>☁️ Weather</Navbar.Brand>{" "}
                                        {zipCodes.map((zipCode, index) => {
                                                return (
                                                        <Nav.Link key={index} href={`/${zipCode}`}>
                                                                {zipCode}
                                                        </Nav.Link>
                                                );
                                        })}
                                        <Nav>
                                                <Searchbar />
                                        </Nav>
                                </Container>
                        </Navbar>
                </>
        );
};

export default Navigation;

