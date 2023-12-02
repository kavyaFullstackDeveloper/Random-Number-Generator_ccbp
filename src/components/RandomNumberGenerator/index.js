// Write your code here

import {Component} from 'react'
import './index.css'

export default class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => {
    const number = Math.ceil(Math.random() * 99)
    this.setState({count: number})
    console.log(number)
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div>
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button onClick={this.getRandomNumber}>Generate</button>
          <p>{count}</p>
        </div>
      </div>
    )
  }
}
