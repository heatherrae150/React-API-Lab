import React from 'react';
import ReactDOM from 'react-dom';
import HarryPotterContainer from './containers/HarryPotterContainer.jsx'

window.addEventListener('load', function () {
  ReactDOM.render(
    <HarryPotterContainer />,
    document.getElementById('app')
  );
});
