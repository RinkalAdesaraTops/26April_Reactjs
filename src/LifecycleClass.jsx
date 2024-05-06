import React, { Component } from 'react'

export default class LifecycleClass extends Component {
    constructor(props){
        super(props);
        console.log("constructor calling...");
        this.state = {
            color:'red'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                color:'yellow'
            })
        },5000)
       
        console.log('component did mount called...');
    }
    static getDerivedStateFromProps(props,state){
        //static let name="rinkal"
        // let name="rinkal"
        //In memory - single copy 
        //without object call
        console.log("Props value "+props.color); 
        console.log("getDerivedStateFromProps called..."+state.color);
        return state;
        // return null;
    }
    shouldComponentUpdate(){
        console.log('should component update called..');
        return false;
    }
  render() {
    console.log('render calling...');
    console.log(this.state.color);
    return (
      <div>
        Color name is :{this.state.color}
      </div>
    )
  }
}

// const add = ()=>{
//     console.log("Addition");
// }
// const minus = ()=>{
//     console.log("Minus");

// }
// module.exports = {
//     add,minus
// }
// export default LifecycleClass
