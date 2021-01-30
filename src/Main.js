import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ShowProduct from "./components/ShowProduct/ShowProduct";
import Header from "./components/Header/Header";

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Header />
        <Home />
      </Route>
      <Route path="/products">
      <Header />
        <ShowProduct />
      </Route>
    </Switch>
  );
};

export default Main;
