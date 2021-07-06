import React from 'react';
import  ReactDOM  from 'react-dom';
import './global.css';
import App from './App'; 
import reportWebVitals from './reportWebVitals';

const view = document.getElementById('root');

ReactDOM.render(<App />, view) //(<Lo que quiero mostrar /> , Donde lo muestro)
reportWebVitals();