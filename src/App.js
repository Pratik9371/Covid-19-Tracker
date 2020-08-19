import React from "react";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import Chart from "./Components/Chart/Chart";
import CounrtyPicker from "./Components/CountryPicker/CountryPicker";
import { fetchData } from "./Api/Index";
import image from "./Images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fethedData = await fetchData();

    this.setState({ data: fethedData });
  }

  handleCountryChange = async (country) => {
    //fetch the data
    const result = await fetchData(country);
    //set the state
    this.setState({ data: result, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className="App">
        <img src={image} width="300px" className="mt-3" />
        <Cards data={data} />
        <CounrtyPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
