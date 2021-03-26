import ReactDOM from 'react-dom';

export function mountWeb (config) {
  const { element, root } = config;
  ReactDOM.render(root, document.getElementById(element));
}
