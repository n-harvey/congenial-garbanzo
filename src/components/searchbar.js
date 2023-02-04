import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
        const [input, setInput] = useState("");
        const navigate = useNavigate();
        const { updateZipcodes } = props;

        //On summit of the form store the searched zipcode in local storage, up to 5 maximum
        const handleSubmit = (e) => {
                e.preventDefault();
                const zipCodes = JSON.parse(localStorage.getItem("zipCodes")) || [];
                if (zipCodes.includes(input)) {
                        navigate(`/${input}`);
                        setInput("");
                        return;
                }
                if (zipCodes.length >= 5) zipCodes.shift();
                zipCodes.push(input);
                localStorage.setItem("zipCodes", JSON.stringify(zipCodes));
                navigate(`/${input}`);
                updateZipcodes();
                setInput("");
        };
        return (
                <Form onSubmit={handleSubmit}>
                        <Form.Control size="sm" type="text" placeholder="Enter Zip Code" value={input} onChange={(e) => setInput(e.target.value)} />
                </Form>
        );
};

export default SearchBar;
