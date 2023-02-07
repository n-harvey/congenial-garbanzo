import { Card, Col } from "react-bootstrap";

const forecast = (props) => {
        const { item } = props;

        console.log(item);
        let date = new Date(item.dt_txt);
        let day = date.toString().split(" ")[0];
        let background = "";
        let weatherDescription = item.weather[0].main;

        if (weatherDescription === "Thunderstorm") {
                background = "thunderstorm-bg";
        } else if (weatherDescription === "Drizzle" || weatherDescription === "Rain") {
                background = "rain-bg";
        } else if (weatherDescription === "Snow") {
                background = "snow-bg";
        } else if (weatherDescription === "Clear") {
                background = "clear-bg";
        } else if (weatherDescription === "Clouds") {
                background = "clouds-bg";
        }
        return (
                <>
                        <Col className="text-white">
                                <Card className={background}>
                                        <Card.Header className="text-center fs-4">{day}</Card.Header>
                                        <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                                        <Card.Body>
                                                <Card.Title className="text-center fw-bold bg-dark">{item.main.temp.toFixed(0)}° F</Card.Title>
                                                <Card.Text className="text-center fw-bold bg-dark">{item.weather[0].description}</Card.Text>
                                        </Card.Body>
                                </Card>
                        </Col>
                </>
        );
};

export default forecast;
