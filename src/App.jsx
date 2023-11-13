import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import CountryDetails from "./pages/CountryDetailsPage";
function App() {
  const [CountryDetails, setCountryDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountry(response.data);
      })
      .catch((error) => {
        console.log("Error getting  from the API...");
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Countries/:CountryId" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
