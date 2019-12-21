import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
//when importing from file that use 'export' and not 'expost default' we have to use destructuring meaning {}
//import { robots } from './robots';

ReactDOM.render(<App /> , document.getElementById('root'));

serviceWorker.unregister();
