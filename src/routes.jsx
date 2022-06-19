import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Index from "./views/Index";
import Filmes from "./views/filmes/Filmes"
import Series from './views/series/Series'
import Documentarios from './views/documentarios/Documentarios'
import Cabecalho from "./components/Cabecalho";
import Footer from "./components/Footer";

export default function AppRouter() {
    return (
        <Router>
            <Cabecalho />
                <Routes>
                    <Route path='/' element={<Index />}/>
                    <Route path='/filmes' element={<Filmes />}/>
                    <Route path='/series' element={<Series />}/>
                    <Route path='/documentarios' element={<Documentarios />}/>
                </Routes>
                <Footer />
        </Router>
    );
}