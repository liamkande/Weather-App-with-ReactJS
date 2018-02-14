import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../Components/chart'
import MapWithAMarker from '../Components/google_map'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    //This is the conversion from Kelvin to fahrenheit because the original data is in Kelvin
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * 9/5 - 459.67)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    //const lon = cityData.city.coord.lon
    //const lat = cityData.city.coord.lat
    //We can refactor this conts with the ES6 Destructuring syntax like so:
    const { lon, lat } = cityData.city.coord


    return (
      <tr key={name}>
        <td><MapWithAMarker
          lon={lon}
          lat={lat}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          />
       </td>
        <td><Chart data={temps} color="orange" units="F"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="gray" units="%"/></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

//This is the normal way of writing this function
// function mapStateToProps(state) {
//  return { weather: state.weather }
// }

// This is the ES6 refactoring of the function
// Because we only have 1 argument and we're pulling off only 1 property from it
// we can refactor the function like so
function mapStateToProps({ weather }) {
  return { weather } // { weather } === { weather: weather}
}

export default connect(mapStateToProps) (WeatherList)
