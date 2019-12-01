import React from 'react';
import './progress.css';

function Progress(props) {
  console.log(props);
  return <div className="progress">
    <div className='line'>
      <div className={`activeLine ${props.point}`}></div>
      <div className="point contact">
        <div className={`${
          (props.point === "address" ||
            props.point === "categories" ||
            props.point === "success")? "past":
            props.point === "contact" ? "active" : ""}`}>
          <span>contact</span>
        </div>
      </div>
      <div className="point address">
        <div className={`${(props.point === "categories" ||
          props.point === "success")? "past":
          props.point === "address" ? "active" : ""}`}>
          <span>address</span>
        </div>
      </div>
      <div className="point categories">
        <div className={`${props.point === "success"? "past":
          props.point === "categories" ? "active" : ""}`}>
          <span>categories</span>
        </div>
      </div>
      <div className="point success">
        <div className={`${props.point === "success" ? "active" : ""}`}>
          <span>success</span>
        </div>
      </div>
    </div>

  </div>

}

export default Progress
