import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'

const name = 'JM';
const element = <h1 className="bg-red-500">Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('app')
);
