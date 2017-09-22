import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

const HomePage = () => <h2>Home Page</h2>;
const LandingPage = () => <h2> Landing Page</h2>;
const Dashboard = () => <h2>Dashboard</h2>;

class Test extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(Test);




//actions creator here

import axios  from 'axios';
import {GET_USER} from './types';


const fetchData = ()=> {
  return function(dispatch){
    axios.get('/api/getdata')
    .then(res => dispatch({type: GET_USER, payload: res.data}));
  }
}

import Provider from 'react-redux';
import {createStore, applyMiddleWare} from 'redux';
const store= createStore(()=>[], {}, applyMiddleWare());


render(){
  return(
    <Provider store={store}>

    </Provider>
  )
}
