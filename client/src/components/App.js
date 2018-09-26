//  home of the react functionality, rendering layer control & react router
//  NOTE to self:
//      MODULE NAMING CONVENTION
//      when exporting a single function or code snippet
//          we begin the name with a lower case letter
//      when exporting a Class or any kind
//          we begin the name with an Upper Case Letter

//  library modules
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//  local modules
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2> Dashboard </h2>
const SurveyNew = () => <h2> SurveyNew </h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path = "/surveys" component = {Dashboard} />
                        <Route path = "/surveys/new" component = {SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);