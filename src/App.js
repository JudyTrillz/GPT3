import React from "react";
import "./App.css";
import { Brand, CTA, Header } from "./components";
import { Blog, Features, Footer, Home, Possibility, WhatGPT3 } from "./containers";

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Header />
        <Home />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
