import TextField from "@material-ui/core/TextField/TextField";
import {Link} from "react-router-dom";
import React from "react";
import MainBackGround from "../mainBackGround/mainBackGround";
import Progress from "../progress/progress";
import FormBackGround from "../formBackground/formBackGround";

class Address extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      city: '',
      address: '',
      countryValid: true,
      cityValid: true,
      addressValid: true,
      formValid: false
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.trySubmit = this.trySubmit.bind(this);
  }

  validateField(fieldName, value) {
    let countryValid = this.state.countryValid;
    let cityValid = this.state.cityValid;
    let addressValid = this.state.addressValid;
    switch(fieldName) {
      case 'country':
        countryValid = value.length >= 3;
        this.setState({
          countryValid: countryValid,
          country: value,
        });
        break;
      case 'city':
        cityValid = value.length >= 3;
        this.setState({
          cityValid: cityValid,
          city: value,
        });
        break;
      case 'address':
        addressValid = value.length >= 3;
        this.setState({
          addressValid: addressValid,
          address: value,
        });
        break;
      default:
        break;
    }
  }


  handleOnChange(e){
    let {id, value}= this.props.getIdValue(e);
    this.setState({[id]: value},
      () => {
      this.validateField(id, value);
      if (
        this.state.country.length>2 &&
        this.state.city.length>2 &&
        this.state.address.length>2
      ){
        this.setState({formValid: true});
      }
    });
  }

  trySubmit(){
    this.setState({formValid: false},
      () => {
        let e = {
          target:{
            id: "country",
            value: this.state.country
          }
        };
        this.handleOnChange(e);
        e = {
          target:{
            id: "city",
            value: this.state.city
          }
        };
        this.handleOnChange(e);
        e = {
          target:{
            id: "address",
            value: this.state.address
          }
        };
        this.handleOnChange(e);
      },
      () => {
        if (this.state.country>2 &&
          this.state.city>2 &&
          this.state.address>2){
          this.setState({formValid: true})
        }
      });
  }

  setNewState(setAddress){
    const {country, city, address} = this.state;
    setAddress(country, city, address);
  }

  render(){
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
          point={"address"}
        />
      <form className={"form"} noValidate autoComplete="off">
        <div className="input-block">
          <label
            className="label-input"
            htmlFor="country-input">
            Country
          </label>
          <TextField
            error={!this.state.countryValid}
            label={this.state.countryValid?"":"Country To Short"}
            id="country-input"
            className={'inputTextField'}
            variant="outlined"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="input-block">
          <label
            className="label-input"
            htmlFor="city-input">
            City
          </label>
          <TextField
            error={!this.state.cityValid}
            label={this.state.cityValid?"":"City To Short"}
            id="city-input"
            className={'inputTextField'}
            variant="outlined"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="input-block">
          <label
            className="label-input"
            htmlFor="address-input">
            Address
          </label>
          <TextField
            error={!this.state.addressValid}
            label={this.state.addressValid?"":"Address To Short"}
            id="address-input"
            className={'inputTextField'}
            variant="outlined"
            onChange={this.handleOnChange}
          />
        </div>
      </form>
      <div onClick={this.trySubmit} className={`link ${this.state.formValid?'enabled':'disabled'}`}>
        <div onClick={() => this.setNewState(this.props.setAddress)}>
          <Link to="/categories">NEXT</Link>
        </div>
      </div>
        </div>
      </div>
    </div>
  }
}

export default Address;
