import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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


function App() {
  return (
    <header>
      <Router>
        <ModalPage />
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/"></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/Homepage">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Items">
                    Items
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button onClick"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    User
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">
                      Log off
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <DisplayCart />
                </li>
              </ul>
            </div>
          </div>
        </nav>
          <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route element={<Homepage />} path="/" />
          </Route>
          <Route element={<Homepage/>} path="/Homepage"/>
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="Items" element={<ItemPage />} />
            <Route path="/update/:id" element={<ItemEdit/>} />
        </Routes>
      </Router>
    </header>




  );
}

export default App;
