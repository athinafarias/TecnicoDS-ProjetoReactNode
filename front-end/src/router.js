// Esse arquivo é responsável por definir as rotas da aplicação

// Importando as dependências necessárias
import {Route, Routes, BrowserRouter} from 'react-router-dom'

// Importando as páginas
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Lista from './pages/Lista'
import Editar from './pages/Editar'

// Definindo o componente Router que irá conter as rotas da aplicação
function Router() {
    return (
        <BrowserRouter> {/* // O BrowserRouter é responsável por gerenciar o histórico de navegação da aplicação */}
            <Routes> {/* // O Routes é responsável por definir as rotas da aplicação */}
                <Route element={<Home/>} path="/" exact /> {/* // A rota "/" renderiza o componente Home */}
                <Route element={<Cadastro/>} path="/cadastro" />
                <Route element={<Lista/>} path="/lista" />
                <Route element={<Editar/>} path="/editar/:id" />
            </Routes>
        </BrowserRouter>
    )
}

// Exportando o componente Router para ser utilizado em outros arquivos
export default Router