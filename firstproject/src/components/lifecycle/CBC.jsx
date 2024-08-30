import React, { Component } from 'react'

export default class extends Component {

    constructor(){
        super();
        console.log("I am constructor")
        this.state={
            count:0
        };
    };

    componentDidMount(){
        console.log("component Mounted")
    }
    componentDidUpdate(){
        console.log("component updating")
    }
    componentWillUnmount(){
        console.log("component is unmounted")
    }

    getSnapshotBeforeUpdate(nextProp,prevState){
        console.log("prev state was " , prevState);
        return null;
    }

    render(){
        console.log("I am render");
    }
  render() {
    return (
      <div>
      <h1>CBC lifecycle</h1>
      <h1>{this.state.count}</h1>
      <button onClick={()=>{
        this.setState({count:this.state.count+1})
      }}>increment</button>
      </div>
    )
  }
}
