import { Navbar, Container, Nav } from "react-bootstrap";
import Searchbar from "./searchbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
        const [zipCodes, setZipCodes] = useState([]);

        const getZipCodes = () => {
                const zipCodes = JSON.parse(localStorage.getItem("zipCodes")) || [];
                setZipCodes(zipCodes);
        };

        useEffect(() => {
                getZipCodes();
        }, []);

        return (
                <>
                        <Navbar bg="light" variant="lg">
                                <Container>
                                        <Navbar.Brand>☁️ Weather</Navbar.Brand>{" "}
                                        {zipCodes.map((zipCode, index) => {
                                                return (
                                                        <Nav.Link as={Link} key={index} to={`/${zipCode}`}>
                                                                {zipCode}
                                                        </Nav.Link>
                                                );
                                        })}
                                        <Nav>
                                                <Searchbar updateZipcodes={getZipCodes} />
                                        </Nav>
                                </Container>
                        </Navbar>
                </>
        );
};

export default Navigation;
