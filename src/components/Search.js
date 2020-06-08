import React, { Component } from "react"

class Search extends Component{
    state={
        input: ""
    }

    handleSearch = (event)=>{

    this.props.filterFood(this.state.input)
        this.setState({
            input:event.target.value
        })
        
    }

    render() {
        return (
          <div>
            <input
              type="text"
              className="input"
              onChange={this.handleSearch}
              placeholder="search..."
              value={this.state.input}
            />
          </div>
        );
      }
}
export default Search