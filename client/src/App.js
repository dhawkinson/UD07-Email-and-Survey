import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        //  NOTE to self: the href below can remain a relative path because of,
        //  the proxy definition in the client-side package.json file
        //  the proxy provides the target for localhost:5000 in dev
        //  prior to deploying to production, we run a react-build and the react app becomes
        //  straight javascript that is henceforth executed by the node/express api engine.
        //  So, in prod the top-level domain is prepended to the relative path (no problem)
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Email and Survey</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <a href="/auth/google">Sign in with Google</a>
            </div>
        );
    }
}

export default App;
