// Esse arquivo define o componente principal da aplicação React.

import './App.css' // Importa o CSS Global
import Router from './router' // E o componente Router, que gerencia as rotas da aplicação

function App() {

  return (
    <div className="App">
      <Router />
    </div>
  )
}

export default App