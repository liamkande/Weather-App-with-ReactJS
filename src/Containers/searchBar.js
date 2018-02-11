import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../Actions/index'

class SearchBar extends Component {
  constructor(props){
  	super(props);
  	this.state = {term: ''}

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)

  }

  onInputChange(event) {
    this.setState({term: event.target.value})
    //console.log(event.target.value)
  }

  onFormSubmit(event) {
    event.preventDefault()
    //We need to go fetch weather data
    this.props.fetchWeather(this.state.term)
    //and this clears the input after the Search
    this.setState({term: ''})
  }

  render() {
      return (
        <form onSubmit={this.onFormSubmit} className="input-group">
          <div className="input-group mb-3">
            <input type="text"
                  className="form-control "
                  placeholder="Get a 5 day forecast in your favorite cities"
                  aria-label="Search Input"
                  aria-describedby="basic-addon2"
                  value={this.state.term}
                  onChange={this.onInputChange}
                   />
              <span id="basic-addon2" className="input-group-append">
                <button type="submit" className="btn btn btn-primary ">Submit</button>
              </span>
          </div>
        </form>
      )
  }
}

function mapDispatchToProps(dispatch) {
  //this give us access to the function fetchWeather here originally created in the ActionCreator
  return bindActionCreators({ fetchWeather },dispatch)
}

// we're passing null as the 1rst argument here because whenever we are passing a function
// that is suppose to dispatch to the props of our container it always goes in as the 2nd argument here!
// usually the 1rst argument is for when we map state to props as well
// so null is pretty much telling redux that we understand that redux is to maitain some state
// but we dont need any state here.
export default connect(null, mapDispatchToProps) (SearchBar)
