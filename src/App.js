import { useEffect, useState } from "react";
import "./App.css";

import ProductService from "./services/productService";
import Navi from "./layouts/Navi";
import Dashboard from "./layouts/Dashboard";
import RightColumn from "./layouts/RightColumn";
import Filter from "./pages/Filter";
import Login from "./pages/Login"

import { fetchDetailProduct, fetchProducts } from "./store/thunk";
import { getFromLocalStorage } from "./helper/LocalStorageHelper";
import toast, { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

function App() {


  const [login, setLogin] = useState(true)
  return (
    <div className="App">
      <div className="anabir">
        <Toaster></Toaster>

        <Navi></Navi>
      </div>
        {login ? <Dashboard/> : <Login/>}

    </div>
  );
}

export default App;
