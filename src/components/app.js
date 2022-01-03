import React, { Component } from 'react';

import Calender from './calender'

export default class App extends Component {
  constructor() {
    super()

  }
  
  render() {
    return (
      <div className='app'>
        <Calender />
      </div>
    );
  }
}
