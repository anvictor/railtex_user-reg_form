import TextField from "@material-ui/core/TextField/TextField";
import {Link} from "react-router-dom";
import React from "react";
import MainBackGround from "../mainBackGround/mainBackGround";
import FormBackGround from '../formBackground/formBackGround';
import Progress from "../progress/progress";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailValid: true,
      passwordValid: true,
      passwordConfirmValid: true,
      formValid: false
    };

    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.trySubmit = this.trySubmit.bind(this);
  }

  validateField(fieldName, value) {
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    switch (fieldName) {
      case 'email':
        //Devise library
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        this.setState({
          emailValid: !!emailValid,
          email: value,
        });
        break;
      case 'password':
        passwordValid = value.length >= 6;
        this.setState({
          passwordValid: passwordValid,
          password: value,
        });
        break;
      default:
        break;
    }
  }


  handleOnBlur(e) {
    let {id, value} = this.props.getIdValue(e);
    this.setState({[id]: value},
      () => {
        this.validateField(id, value)
      });
  }

  trySubmit() {
    this.setState({formValid: false},
      () => {
        let e = {
          target: {
            id: "email",
            value: this.state.email
          }
        };
        this.handleOnBlur(e);
        e = {
          target: {
            id: "password",
            value: this.state.password
          }
        };
        this.handleOnBlur(e);
      },
      () => {
        if (this.state.emailValid &&
          this.state.passwordValid &&
          this.state.passwordConfirmValid) {
          this.setState({formValid: true})
        }
      });
  }

  handleOnChange(e) {
    let {emailValid, passwordValid, password} = this.state;
    let passwordConfirm = e.target.value;
    console.log('emailValid', emailValid, 'passwordValid', passwordValid, 'password', password, 'passwordConfirm', passwordConfirm);
    if (password === passwordConfirm) {
      this.setState({passwordConfirmValid: true},
        () => {
          if (this.state.emailValid &&
            this.state.passwordValid &&
            this.state.passwordConfirmValid) {
            this.setState({formValid: true})
          }
        });
    } else {
      this.setState({passwordConfirmValid: false});
    }
  }

  setNewState(setContact) {
    const {email, password} = this.state;
    setContact(email, password);
  }

  render() {
    return <div className="iterfacePlace">
      <MainBackGround
        greenSquare={'greenSquare'}
        yellowSquare={'yellowSquare'}
        roseSquare={'roseSquare'}
      />
      <div className="overLayer">
        <FormBackGround
          greenSquare1={'greenSquare1'}
          yellowSquare1={'yellowSquare1'}
          yellowSquare2={'yellowSquare2'}
          roseSquare1={'roseSquare1'}
        />
        <div className='formOverLayer'>
          <Progress
            point={"contact"}
          />
          <form className={"form"} noValidate autoComplete="off">
            <div className="input-block">
              <label
                className="label-input"
                htmlFor="email-input">
                Email
              </label>
              <TextField
                error={!this.state.emailValid}
                label={this.state.emailValid ? "" : "Invalid Email"}
                id="email-input"
                className={'inputTextField'}
                variant="outlined"
                onBlur={this.handleOnBlur}
              />
            </div>
            <div className="input-block">
              <label
                className="label-input"
                htmlFor="password-input">
                Password
              </label>
              <TextField
                error={!this.state.passwordValid}
                label={this.state.passwordValid ? "" : "Password To Short"}
                id="password-input"
                className={'inputTextField'}
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onBlur={this.handleOnBlur}
              />
            </div>
            <div className="input-block">
              <label
                className="label-input"
                htmlFor="confirm-password-input">
                Password confirm
              </label>
              <TextField
                error={!this.state.passwordConfirmValid}
                label={this.state.passwordConfirmValid ? "" : "Password Does Not Match"}
                id="confirm-password-input"
                className={'inputTextField'}
                type="password"
                variant="outlined"
                onChange={this.handleOnChange}
              />
            </div>
          </form>
          <div onClick={this.trySubmit} className={`link ${this.state.formValid ? 'enabled' : 'disabled'}`}>
            <div onClick={() => this.setNewState(this.props.setContact)}>
              <Link to="/address">NEXT</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  }

}

export default Contact;
