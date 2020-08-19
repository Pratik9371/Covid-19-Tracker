import React from "react";
import { useState, useEffect } from "react";
import { fetchCountries } from "../../Api/Index";
import "./CountryPicker.css";

const CounrtyPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchCountries();

      setCountries(data);
    };

    fetchAPI();
  }, []);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <select
            class="form-control"
            id="select"
            onChange={(e) => {
              handleCountryChange(e.target.value);
            }}
          >
            <option value="">Global</option>
            {countries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CounrtyPicker;
