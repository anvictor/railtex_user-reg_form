import {Link} from "react-router-dom";
import React from "react";
import MainBackGround from "../mainBackGround/mainBackGround";
import Progress from "../progress/progress";
import FormBackGround from "../formBackground/formBackGround";
import './success.css';

function Success(props){
  return <div className="iterfacePlace">
    <MainBackGround
      greenSquare={'greenSquare'}
      yellowSquare={'yellowSquare'}
      roseSquare={'roseSquare'}
    />
    <div className="overLayer">
      <FormBackGround
        greenSquare={'greenSquare'}
        yellowSquare1={'yellowSquare1'}
        yellowSquare2={'yellowSquare2'}
        roseSquare={'roseSquare'}
      />
      <div className='formOverLayer'>
      <Progress
        point={"success"}
      />
        <div className='successPlace'>
          <h1>Success!</h1>
          <p>{props.email}</p>
          <p>Your account was successfully registered.</p>
          <p>Please await for account approval.</p>
          <p>It can take up constructor 24 hours</p>
          <h6>have questions?</h6>
          <h6>
            Contact
            <Link to="/">info@site.com</Link>
          </h6>

        </div>
      </div>
        </div>

  </div>
}

export default Success;
