import React from "react";
import './formBackGround.css';

export default class FormBackGround extends React.Component{
  constructor(props) {
    super(props);
    this.state = {...this.props};
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        greenSquare1: "greenSquare1_rotated",
        yellowSquare1: "yellowSquare1_rotated",
        yellowSquare2: "yellowSquare2_rotated",
        roseSquare1: "roseSquare1_rotated",
      });
    },200);
    console.log('GrandChild did mount.',this.state);
  }

  render(){
    return (
      <div className='formBackGround'>
        <div className={this.state.greenSquare1}></div>
        <div className={this.state.yellowSquare1}></div>
        <div className={this.state.yellowSquare2}></div>
        <div className={this.state.roseSquare1}></div>
      </div>
    );
  }
}

