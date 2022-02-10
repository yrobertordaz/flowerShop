// import React from "react";
// import { Button, Card } from "antd";
// import logo from "./logo.svg";
import "./App.css";
// import Login from "./components/pages/Login";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SelectProduct from "./components/pages/SelectProduct";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route>
            {/* <Route index element={<Login />} /> */}
            <Route index element={<SelectProduct />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
