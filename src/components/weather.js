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

        let background = "";
        let weatherDescription = city.weather ? city.weather[0].main : "";

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
                        {city ? (
                                <>
                                        <Row className="justify-content-center">
                                                <Col lg={6} md={4} sm={"auto"}>
                                                        <Row className={`${background}`}>
                                                                <Col sm={6}>
                                                                        <Row>
                                                                                <Col className="fw-bold fs-5">{city.name}</Col>
                                                                        </Row>
                                                                        <Row>
                                                                                <Col className="fw-bold fs-1 text-white">{city.main.temp.toFixed(0)}° F</Col>
                                                                        </Row>
                                                                        <Row>
                                                                                <Col className=" fs-4">{city.weather[0].description}</Col>
                                                                        </Row>
                                                                </Col>
                                                                <Col lg={2} className="ms-auto">
                                                                        <img
                                                                                src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                                                                                alt="weather icon"
                                                                        />
                                                                </Col>
                                                        </Row>
                                                </Col>
                                        </Row>
                                        <br />
                                        <br />
                                        <Row className="d-flex justify-content-around small">
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
