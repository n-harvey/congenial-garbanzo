import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//Display error page if user enters invalid zip code or if there is an error with the API call with a go back to home button
//Needs to be displayed in centor of display

const errorpage = () => {
        return (
                <>
                        <Row>
                                <Col>
                                        <h1>Oops! Something went wrong!</h1>

                                        <h2>Go back to the home page</h2>
                                        <Link to="/">
                                                <Button>Go Back</Button>
                                        </Link>
                                </Col>
                        </Row>
                </>
        );
};

export default errorpage;
