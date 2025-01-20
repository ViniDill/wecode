import React from 'react';
import { BrowserRouter, Route, Routes as Rota } from "react-router-dom";
import Home from '../Pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Rota>
        <Route path="/home" element={<Home />} />
      </Rota>
    </BrowserRouter>
  );
}

export default Routes;
