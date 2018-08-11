import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './container/App/App';
import registerServiceWorker from './registerServiceWorker';
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
