import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import Foodbox from './components/Foodbox';
import AddFood from './components/AddFood';
import Search from './components/Search';

class App extends Component {
  state = {
    displayForm: false,
    foods: foods,
    filtered: foods
  }
  handleClick = () => {
    this.setState({
      displayForm: !this.state.displayForm
    })
  };
  pushFoodHandler = (food) => {
    const foods = [...this.state.foods];
    foods.unshift(food);
    this.setState({ foods: foods, filtered: foods, displayForm: false});
  };
  filterFoodHandler = (input) => {
    const filtered = this.state.foods.filter(el => {
      return el.name.toLowerCase().includes(input.toLowerCase());
    });
    this.setState({ filtered: filtered});
  }
  render() {
    const { displayForm, filtered } = this.state;
    const buttonText = displayForm ? "Click to hide" : "Click to show";
    return (
      <div className="App">
        <div className="container">
          <h1 className="Title">IronNutrition</h1>
            <div>
              <Search filterFood={this.filterFoodHandler} />
              <button className="button" onClick={this.handleClick}>
                {buttonText}
              </button>
              <div>
                {displayForm && <AddFood pushFood={this.pushFoodHandler} />}
                <div>
                  {filtered.map((oneFood, i) => {
                    return <Foodbox key={i} food={oneFood} />
                  })}
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;