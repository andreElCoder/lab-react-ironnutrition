import React, {Component} from "react"

class AddFood extends Component{
    state ={
        foodName:"",
        foodImage:"",
        calories :0
    }

    handleChange =(event) =>{
        const {name,value} = event.target;
        this.setState({
            [name]:value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {foodName,foodImage,calories} = this.state
        // push the food to the state from the parent -> Lift the state up we want to oush this info to the state that lives on the APP.js
        this.props.pushFood({
            name:foodName,
            image: foodImage,
            calories : calories
        })
        this.setState({
            foodName:"",
            image:"",
            calories:0

        }) 
    }

    
    render() {
        const { foodName, calories, foodImg } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                className="input"
                onChange={this.handleChange}
                name="foodName"
                type="text"
                value={foodName}
                placeholder="tomato"
                />
                <input
                className="input"
                onChange={this.handleChange}
                type="number"
                name="calories"
                value={calories}
                />
                <input
                className="input"
                onChange={this.handleChange}
                name="foodImg"
                type="text"
                value={foodImg}
                placeholder="https://i.imgur.com/5ktcSzF.jpg"
                />
                <button className="button">Add</button>
            </form>
        );
    }
}

export default AddFood
