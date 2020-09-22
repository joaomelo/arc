import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '__cli/core/app';
import '__cli/core/i18n';
import './styles.css';

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
