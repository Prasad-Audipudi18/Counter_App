import {Component} from 'react'
import './App.css';


class App extends Component{
  state={value:0}
  IncrementFunction=()=>(
    this.setState(prevState=>({value:prevState.value+1}))
  )
  render(){
    const {value}=this.state
    return(
      <div className='main_div'>
        <h1>The Button Has Been Clicked {value} Times</h1>
        <p>Click the Button Increase the Count</p>
        <button onClick={this.IncrementFunction}>Increase</button>
      </div>
    )
  }
}
export default App;
