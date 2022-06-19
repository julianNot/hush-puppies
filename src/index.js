import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar messageDiscount="HOT SALE -30% EN SANDALIAS" />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);