import {Route, Routes, BrowserRouter} from 'react-router-dom'

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Lista from './pages/Lista'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/" exact />
                <Route element={<Cadastro/>} path="/cadastro" />
                <Route element={<Lista/>} path="/lista" />
            </Routes>
        </BrowserRouter>
    )
}

export default Router