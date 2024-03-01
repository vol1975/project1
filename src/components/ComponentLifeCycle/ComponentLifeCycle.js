import React, { Component } from 'react'

export default class ComponentLifeCycle extends Component {
  constructor(props){
  console.log('constructor')
  super(props)

  this.state={
    counter:0
  }}
static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps")
}


  increment=()=>{
    this.setState({counter:this.state.counter+1},()=>{
        console.log(this.state.counter);
    });
  }
componentDidMount(){
    console.log('componentDidMount')
}
  
  
  
  
  
    render() {
        console.log('render')
    return <>
      <div>counter value is {this.state.counter}</div>
      <p><button onClick={this.increment}> increment</button></p>
    
    </>
  }
}
