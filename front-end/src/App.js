// Esse arquivo define o componente principal da aplicação React.

import './App.css' // Importa o CSS Global
import Router from './router' // E o componente Router, que gerencia as rotas da aplicação
import MusicPlayer from './components/MusicPlayer' // Importa o componente de player de música

function App() {

  return (
    <div className="App">
      <MusicPlayer />
      <Router />
    </div>
  )
}

export default App