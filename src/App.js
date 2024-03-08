import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import CartPage from "./Components/Cart/CartPage";
import ItemPage from "./Components/Item/ItemPage";
import Homepage from "./Components/Modal and homepage/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import DisplayCart from "./Components/Cart/DisplayCart";
import ModalPage from "./Components/Modal and homepage/ModalPage";
import ItemEdit from "./Components/Item/ItemEdit";
import ProtectedRoutes from "./Components/Modal and homepage/ProtectedRoutes";
import LoginPage from "./Components/Modal and homepage/LoginPage";
import Navbar from "./Components/Modal and homepage/Navbar";

function App() {
  return (
    <header>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route element={<Homepage />} path="/" />
          </Route>
          <Route element={<Homepage />} path="/Homepage" />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="Items" element={<ItemPage />} />
          <Route path="/update/:id" element={<ItemEdit />} />
        </Routes>
      </Router>
    </header>
  );
}
export default App;
