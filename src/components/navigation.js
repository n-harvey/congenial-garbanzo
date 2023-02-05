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
                        <Navbar fixed="top" bg="light" variant="light" expand="lg" className="">
                                <Container>
                                        <Navbar.Brand>☁️ Weather</Navbar.Brand>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                                <Nav className="mx-auto">
                                                        {zipCodes.map((zipCode, index) => {
                                                                return (
                                                                        <Nav.Link as={Link} key={index} to={`/${zipCode}`}>
                                                                                {zipCode}
                                                                        </Nav.Link>
                                                                );
                                                        })}
                                                </Nav>
                                                <Nav>
                                                        <Searchbar updateZipcodes={getZipCodes} />
                                                </Nav>
                                        </Navbar.Collapse>
                                </Container>
                        </Navbar>
                </>
        );
};

export default Navigation;
