// Esse arquivo é o ponto de entrada da aplicação React. Ele renderiza o componente App dentro do elemento com id 'root' no HTML.

// Importando os módulos necessários
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Definindo o ponto de entrada da aplicação
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
