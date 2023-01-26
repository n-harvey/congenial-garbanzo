import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const forecast = (props) => {
        const { item } = props;
        console.log(item);

        let date = new Date(item.dt_txt);
        let day = date.toString().split(" ")[0];

        return (
                <Card style={{ width: "14rem" }}>
                        <Card.Header className="text-center">{day}</Card.Header>
                        <Card.Img variant="top" src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} />
                        <Card.Body>
                                <Card.Title className="text-center">{item.main.temp}° F</Card.Title>
                                <Card.Text className="text-center">{item.weather[0].description}</Card.Text>
                        </Card.Body>
                </Card>
        );
};

export default forecast;
