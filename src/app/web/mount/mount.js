import ReactDOM from 'react-dom';

export function mountWeb (config) {
  const { element, Root, dependencies } = config;
  ReactDOM.render(
    <Root dependencies={dependencies}/>,
    document.getElementById(element)
  );
}
