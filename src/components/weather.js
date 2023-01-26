import { useParams } from "react-router-dom";
import { zipcall, zipforecast } from "../API/API";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

const Weather = () => {
        const zipCode = useParams().zipcode;
        const [city, setCity] = useState("");
        const [forecast, setForecast] = useState("");

        useEffect(() => {
                async function fetchData() {
                        const cityData = await zipcall(zipCode);
                        const forecastData = await zipforecast(zipCode);
                        setCity(cityData);
                        setForecast(forecastData.list.filter((item) => item.dt_txt.endsWith("15:00:00")));
                }
                if (zipCode) fetchData();
        }, [zipCode]);

        console.log(forecast);

        return (
                <>
                        {city ? (
                                <>
                                        <Row className="text-center">
                                                <Col className=" col-12 fs-1 fw-bold">{city.name}</Col>
                                                <Col className="col-12">{city.main.temp}° F</Col>
                                                <Col className="col-12">
                                                        <img src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`} alt="weather icon" />
                                                        {city.weather[0].description}
                                                </Col>
                                        </Row>
                                        <br />
                                        <br />
                                        <Row className="justify-content-center">
                                                {forecast.map((item) => (
                                                        <Col xs={12} md={2} className="text-center" key={item.dt}>
                                                                <Row>
                                                                        <Col className="col-12">{item.dt_txt}</Col>
                                                                        <Col className="col-12">
                                                                                <img
                                                                                        src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                                                                                        alt="weather icon"
                                                                                />
                                                                                {item.weather[0].description}
                                                                        </Col>
                                                                        <Col className="col-12">{item.main.temp}° F</Col>
                                                                </Row>
                                                        </Col>
                                                ))}
                                        </Row>
                                </>
                        ) : (
                                <Row className="text-center">
                                        <Col>Loading...</Col>
                                </Row>
                        )}
                </>
        );
};

export default Weather;
