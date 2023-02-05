import { Card, Col } from "react-bootstrap";

const forecast = (props) => {
        const { item } = props;

        let date = new Date(item.dt_txt);
        let day = date.toString().split(" ")[0];

        return (
                <>
                        <Col sm={2} md={3} lg={2} className="forecastCard ">
                                <Card className="" style={{ backgroundColor: "#87CEFA" }}>
                                        <Card.Header className="text-center ">{day}</Card.Header>
                                        <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                                        <Card.Body>
                                                <Card.Title className="text-center ">{item.main.temp}° F</Card.Title>
                                                <Card.Text className="text-center ">{item.weather[0].description}</Card.Text>
                                        </Card.Body>
                                </Card>
                        </Col>
                </>
        );
};

export default forecast;
