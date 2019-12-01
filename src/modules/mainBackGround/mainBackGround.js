import React from "react";
import './mainBackGround.css';



export default class MainBackGround extends React.Component{
  constructor(props) {
    super(props);
    this.state = {...this.props};
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        greenSquare: "greenSquare_rotated",
        yellowSquare: "yellowSquare_rotated",
        roseSquare: "roseSquare_rotated",
      });
    },200);
    console.log('GrandChild did mount.',this.state);
  }

  render(){
    return (
      <div className='mainBackGround'>
        <div className={this.state.greenSquare}></div>
        <div className={this.state.yellowSquare}></div>
        <div className={this.state.roseSquare}></div>
      </div>
    );
  }
}

