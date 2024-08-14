import { Component, Fragment } from "react";

class CbcStates extends Component{
    constructor(){
        super();
        this.state = {count:0};
    }
    render(){
        // console.log(this)
       
        return(
            <Fragment>
                <h1>CBC STATES = {this.state.count}</h1>
                <button onClick={()=> this.setState({count:this.state.count+1})}>Increment</button>
                <button onClick={()=> this.setState({count:this.state.count-1})}>Decrement</button>
                <button onClick={()=> this.setState({count:0})}>Reset</button>
            </Fragment>
        )
    }
}

export default CbcStates;