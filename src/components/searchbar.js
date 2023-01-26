import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
        const [zipCode, setZipCode] = useState("");
        const navigate = useNavigate();

        const handleSubmit = (e) => {
                e.preventDefault();
                navigate(`/${zipCode}`);
                setZipCode("");
        };
        return (
                <Form onSubmit={handleSubmit}>
                        <Form.Control type="text" placeholder="Enter Zip Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                </Form>
        );
};

export default SearchBar;
