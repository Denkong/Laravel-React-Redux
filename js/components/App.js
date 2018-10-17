import React, { Component } from 'react';

import {Provider} from 'react-redux';
import store from './store'

import Posts from './components/post'
import Postsform from './components/postform'




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div >
          <header >
            
            <h1 >Welcome to React</h1>
          </header>
          <Postsform/>
          <Posts/>
        </div>
      </Provider>
    );
  }
}

export default App;
