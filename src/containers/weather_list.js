import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{

  renderWeather = (cityObject) => {
    const city_name = cityObject.city.name;
    const temp = cityObject.list.map(weather => weather.main.temp);
    const pressure = cityObject.list.map(weather => weather.main.pressure);
    const humidity = cityObject.list.map(weather => weather.main.humidity);

    return(
      <tr key={city_name}>
        <td>{city_name}</td>
        <td><Chart data={temp} color='blue' /></td>
        <td><Chart data={pressure} color='red' /></td>
        <td><Chart data={humidity} color='greem' /></td>
      </tr>
    );
  }

  render() {
    return(
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

}

const mapStateToProps = (state) => {
  return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList);
