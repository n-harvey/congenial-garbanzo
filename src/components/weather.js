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
                                        <Row className="d-flex justify-content-center">
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
