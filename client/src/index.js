//  home of the redux functionality, data layer control

//  library modules
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

//  local modules
import App from './components/App';
import reducers from './reducers';

//  establish 'state' store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//  hook up store to React via Provider
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);
