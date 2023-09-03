/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  incrementCount = () => {
    this.setState(prevState => {
      console.log(`prev vlaue ${prevState.speed}`)
      return {speed: prevState.speed + 10}
    })
  }

  onBreak = () => {
    this.setState(prevState => {
      console.log(`prev vlaue ${prevState.speed}`)
      if (prevState.speed - 10 >= 0) {
        return {speed: prevState.speed - 10}
      }
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="page">
        <h1 className="head">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="main-heading">Speed is {speed}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button className="btn1" onClick={this.incrementCount}>
            Accelerate
          </button>
          <button className="btn2" onClick={this.onBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
