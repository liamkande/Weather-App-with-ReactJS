import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {

  renderWeather(cityData) {
    
    const name = cityData.city.name

    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
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
