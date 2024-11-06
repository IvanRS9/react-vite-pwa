import ResistorCalculator from './Components/ResistorCalculator'
import Banner from './Components/Banner'
import FormPizza from './Components/FormPizza'
import Pedidos from './Components/Pedidos'
import './App.css'
import Productos from './Components/Productos'
import Busqueda from './Components/Busqueda'
import Item from './Components/Item'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Busqueda />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/producto/:id" element={<Item />} />
        </Routes>
    </Router>
);
}

export default App
