import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from '../Pages/Home';
import Teste from '../Pages/Teste';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} /> {/* Redireciona para /home */}
        <Route path="/home" element={<Home />} />
        <Route path="/testes" element={<Teste />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
