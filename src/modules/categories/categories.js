import TextField from "@material-ui/core/TextField/TextField";
import {Link} from "react-router-dom";
import React from "react";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import MainBackGround from "../mainBackGround/mainBackGround";
import Progress from "../progress/progress";
import FormBackGround from "../formBackground/formBackGround";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category1: '',
      category2: '',
      category3: '',
      category1Valid: true,
      category2Valid: true,
      category3Valid: true,
      formValid: false
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  };

  handleOnChange(e) {
    let {target: {name, value}} = e;
    this.setState({
        [name]: value,
        [`${name}Valid`]: true
      },
      () => {
        if (
          this.state.category1 &&
          this.state.category2 &&
          this.state.category3
        ) {
          this.setState({formValid: true});
        }
      })
  }


  setNewState(setCategories) {
    const {category1, category2, category3} = this.state;
    setCategories(category1, category2, category3);
  }

  render() {
    const {category1, category2, category3} = this.props;
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
            point={"categories"}
          />
          <form className={"form"} noValidate autoComplete="off">
            <div className="input-block">
              <label
                className="label-input"
                htmlFor="category1">
                Category 1
              </label>
              <TextField
                id="category1"
                name="category1"
                select
                className={"inputTextField"}
                value={this.state.category1}
                onChange={this.handleOnChange}
                SelectProps={{
                  MenuProps: {
                    className: "classes.menu",
                  },
                }}
                margin="normal"
                variant="outlined"
              >
                {category1.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="input-block">
              <label
                className="label-input"
                htmlFor="category2">
                Category 2
              </label>
              <TextField
                id="category2"
                name="category2"
                select
                className={'inputTextField'}
                value={this.state.category2}
                onChange={this.handleOnChange}
                SelectProps={{
                  MenuProps: {
                    className: 'classes.menu',
                  },
                }}
                margin="normal"
                variant="outlined"
              >
                {category2.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="input-block">
              <label
                className="label-input"
                htmlFor="category3">
                Category 3
              </label>
              <TextField
                id="category3"
                name="category3"
                select
                className={'inputTextField'}
                value={this.state.category3}
                onChange={this.handleOnChange}
                SelectProps={{
                  MenuProps: {
                    className: 'classes.menu',
                  },
                }}
                margin="normal"
                variant="outlined"
              >
                {category3.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </form>

          <div className='link enabled'>
            <div onClick={() => this.setNewState(this.props.setCategories)}>
              <Link to="/success">NEXT</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Categories;
