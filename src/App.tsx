// import React from "react";
// import { Button, Card } from "antd";
// import logo from "./logo.svg";
import "./App.css";
import Login from "./components/pages/Login";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SelectProduct from "./components/pages/SelectProduct";
import ProductList from "./components/pages/ProductList";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<SelectProduct />}>
              <Route path="/category/:categoryId" element={<ProductList />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
