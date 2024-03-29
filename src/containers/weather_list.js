import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{

  renderWeather = (cityObject) => {
    const city_name = cityObject.city.name;
    const temp = cityObject.list.map(weather => weather.main.temp);
    const pressure = cityObject.list.map(weather => weather.main.pressure);
    const humidity = cityObject.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityObject.city.coord;

    return(
      <tr key={city_name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temp} color='blue' units="K"/></td>
        <td><Chart data={pressure} color='red' units="hPa"/></td>
        <td><Chart data={humidity} color='greem' units="%"/></td>
      </tr>
    );
  }

  render() {
    return(
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
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
