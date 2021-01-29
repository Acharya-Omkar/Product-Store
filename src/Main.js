import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

const Main = () => {
  return (
    <Container>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Container>
  );
};

export default Main;
