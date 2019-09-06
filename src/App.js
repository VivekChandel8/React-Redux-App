import React from 'react';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Postform />
      <hr />
      <Posts />
    </div>
    </Provider>
  );
}

export default App;
