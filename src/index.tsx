import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RPECalc from './RPECalc';
import * as serviceWorker from './serviceWorker';
import RPECalcTour from './RPECalcTour';

ReactDOM.render(
    <RPECalcTour />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

