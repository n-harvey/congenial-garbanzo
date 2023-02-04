import api from "./config.json";

const key = api.key;

export const zipcall = async (zip) => {
        try {
                console.log("API call using user input zip code...", zip, key);
                const response = await fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${key}`);
                const data = await response.json();
                console.log(data);
                const lat = data.lat;
                const lon = data.lon;
                console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`);
                const secondResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`);
                const secondData = await secondResponse.json();
                console.log(secondData);
                return secondData;
        } catch (error) {
                console.log(error);
        }
};

export const zipforecast = async (zip) => {
        try {
                console.log("API call to forecast using input zip code...");
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${key}&units=imperial`);
                const data = await response.json();
                console.log(data);
                return data;
        } catch (error) {
                console.log(error);
        }
};
