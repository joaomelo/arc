import ReactDOM from 'react-dom';

export function mountView (config) {
  const { element, Root, dependencies } = config;
  ReactDOM.render(
    <Root dependencies={dependencies}/>,
    document.getElementById(element)
  );
}
