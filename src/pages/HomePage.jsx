import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

function HomePage() {
    const [CountryDetails, setCountryDetails] = useState({});

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries`)
            .then(response => {
                setCountryDetails(response.data)
            })
            .catch(error => {
                console.log("Error...");
                console.log(error)
            })
    }, []);

return(
    <><div className="home">
        <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Your Guide to the World</h1>
        <countries />

    </div><div className="card">
            <h1>{CountryDetails.name}</h1>
        </div></>
)
}

export default HomePage;
