import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <main>
          <Route path="/" component={HomeScreen} exact/>
          <Route path="/product/:id" component={ProductScreen}/>
        </main>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;


