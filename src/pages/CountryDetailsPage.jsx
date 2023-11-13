import axios from "axios";
import { useEffect,} from "react";
import { useParams, } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";


function CountryDetails() {
    const {countriesId} = useParams();

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countriesId}`)
            .then(response => {
                setCountryDetails(response.data)
            })
            .catch(error => {
                console.log("Error...");
                console.log(error)
            })
    }, [countriesId]);

    return(

    <div className="CountryDetails">
       
<Link to={"pages/HomePage"}/>
</div>
)
}

export default CountryDetails;
