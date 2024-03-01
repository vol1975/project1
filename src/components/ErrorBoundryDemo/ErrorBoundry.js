import React, { Component } from 'react'

 export default class ErrorBoundry extends Component {

constructor(props) {
  super(props)

  this.state = {
     hasError:false
  }
}


static getDerivedStateFromError(error){
    return{
        hasError:true
    }
}
  
  
  
    render() {


        console.log("error"+this.state.hasError)

    if (this.state.hasError)
    {
        return<h1> somethinf went wrong</h1>
    }
    
         return(this.props.children)

    
  }

}
