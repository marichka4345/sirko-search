import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import initialState from '../../data';

import PetMap from '../PetMap/PetMap';

import './app.global.scss';

const store = createStore(rootReducer, initialState);
export default class App extends Component {
  render() {
    return (<Provider store={ store }>
      <PetMap />
    </Provider>);
  }
}