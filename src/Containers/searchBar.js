import React,{Component} from 'react'

export default class SearchBar extends Component {
  constructor(props){
  	super(props);
  	this.state = {term: ''};
  }

  onInputChange(event) {
    console.log(event.target.value)
  }

    render() {
        return (
          <form className="input-group">
            <div className="input-group mb-3">
              <input type="text"
                    className="form-control"
                    placeholder="Get a 5 day forecast in your favorite cities"
                    aria-label="Search Input"
                    aria-describedby="basic-addon2"
                    value={this.state.term}
                    onChange={this.onInputChange} />
              <div className="input-group-append">
                <span type="submit"
                      id="basic-addon2"
                      className="input-group-text btn"
                      >
                        Submit
                      </span>
              </div>
            </div>
          </form>
        )
    }
}
