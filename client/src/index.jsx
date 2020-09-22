import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import '__cli/core/i18n';
import { App } from '__cli/core/app';
import './styles.css';

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
