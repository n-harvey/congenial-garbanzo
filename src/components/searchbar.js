import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
        const [zipCode, setZipCode] = useState("");
        const navigate = useNavigate();

        //On summit of the form store the searched zipcode in local storage, up to 5 maximum
        const handleSubmit = (e) => {
                e.preventDefault();
                const zipCodes = JSON.parse(localStorage.getItem("zipCodes")) || [];
                if (zipCodes.length >= 5) zipCodes.shift();
                zipCodes.push(zipCode);
                localStorage.setItem("zipCodes", JSON.stringify(zipCodes));
                navigate(`/${zipCode}`);
                setZipCode("");
        };
        return (
                <Form onSubmit={handleSubmit}>
                        <Form.Control size="sm" type="text" placeholder="Enter Zip Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                </Form>
        );
};

export default SearchBar;
