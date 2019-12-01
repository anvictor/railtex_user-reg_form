import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import {createBrowserHistory} from "history"
import Contact from './modules/contact/contact';
import Address from './modules/address/address';
import Categories from './modules/categories/categories';
import Success from './modules/success/success';
import {connect} from 'react-redux';
import {
  setContact,
  setAddress,
  setCategories
} from './actions/index';
import './App.css';

const category1 = [
  "",
  "Architecture",
  "Business",
  "Cities",
  "Communication",
  "Creativity",
  "Culture",
  "Decision Making",
  "Design",
  "Economics",
  "Education"
];

const category2 = [
  "",
  "Employment",
  "Finance",
  "Governance",
  "Industries",
  "Information Technology",
  "Infrastructure",
  "Innovation",
  "Investing",
  "Knowledge",
  "Management"
];
const category3 = [
  "",
  "Marketing",
  "Metrics",
  "Motivation",
  "Organizational",
  "CultureProblem Solving",
  "Quality",
  "Risk",
  "Small Business",
  "Society",
  "Strategy"
];

function getIdValue(e) {
  return {
    id: e.target.id.split('-')[0],
    value: e.target.value
  }
}

function handleChange(event) {
  console.log(event.target);
}

const history = createBrowserHistory();

const ContactCall = (setContact) => (
  <Contact
    getIdValue={getIdValue}
    setContact={setContact}
  />
);
const AddressCall = (setAddress) => (
  <Address
    getIdValue={getIdValue}
    setAddress={setAddress}
  />
);
const CategoriesCall = (setCategories) => (
  <Categories
    category1={category1}
    category2={category2}
    category3={category3}
    handleChange={handleChange}
    setCategories={setCategories}
  />
);
const SuccessCall = (email) => (
  <Success
    email={email}
  />
);
const mapStateToProps = store => {
  return {store}
};

const mapDispatchToProps = dispatch => ({
  setContactDispatch: (email, password) =>
    dispatch(setContact(email, password)),
  setAddressDispatch: (country, city, address) =>
    dispatch(setAddress(country, city, address)),
  setCategoriesDispatch: (category1, category2, category3) =>
    dispatch(setCategories(category1, category2, category3)),

});
function App(props) {
  const setContact = props.setContactDispatch;
  const setAddress = props.setAddressDispatch;
  const setCategories = props.setCategoriesDispatch;
  return (
    <div className='formPlace'>
      <BrowserRouter history={history}>
        <Route exact path='/' component={() => ContactCall(setContact)}></Route>
        <Route path='/address' component={() => AddressCall(setAddress)}></Route>
        <Route path='/categories' component={() => CategoriesCall(setCategories)}></Route>
        <Route path='/success' component={() => SuccessCall(props.store.contact.email)}></Route>
      </BrowserRouter>
    </div>

  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
