import { useParams } from "react-router-dom";
import { zipcall, zipforecast } from "../API/API";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Forecast from "./forecast";
import Loading from "./loading";

const Weather = () => {
        console.log(localStorage.getItem("zipCodes"));

        const zipCode = useParams().zipcode;
        const [city, setCity] = useState("");
        const [forecast, setForecast] = useState("");

        useEffect(() => {
                async function fetchData() {
                        setCity("");
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
                                        <Row className="mx-5 px-5">
                                                <Col>
                                                        <Row>
                                                                <Col className="fw-bold">{city.name}</Col>
                                                        </Row>
                                                        <Row>
                                                                <Col className="fw-bold fs-1">{city.main.temp}° F</Col>
                                                        </Row>
                                                        <Row>
                                                                <Col>{city.weather[0].description}</Col>
                                                        </Row>
                                                </Col>
                                                <Col className="text-center">
                                                        <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="weather icon" />
                                                </Col>
                                        </Row>
                                        <br />
                                        <br />
                                        <Row className="d-flex justify-content-center small">
                                                {forecast.map((item, index) => (
                                                        <Forecast item={item} key={index} />
                                                ))}
                                        </Row>
                                </>
                        ) : (
                                <Row className="text-center">
                                        <Col>
                                                <Loading />
                                        </Col>
                                </Row>
                        )}
                </>
        );
};

export default Weather;
