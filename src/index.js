import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Styles
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './Assets/Scss/Main.scss';
// Redux
import store from "./Store/index";
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
