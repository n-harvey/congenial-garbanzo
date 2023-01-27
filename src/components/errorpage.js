import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const errorpage = () => {
        return (
                <>
                        <Row className="text-center">
                                <Col className="">
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
