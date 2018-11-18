import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDdwBGWusq3nDFi2CGMKNwnwuBUsos3uqQ',
      authDomain: 'myapp-3726f.firebaseapp.com',
      databaseURL: 'https://myapp-3726f.firebaseio.com',
      projectId: 'myapp-3726f',
      storageBucket: 'myapp-3726f.appspot.com',
      messagingSenderId: '589683640816'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
