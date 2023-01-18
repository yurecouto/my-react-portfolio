import React, { Suspense, useEffect } from "react";

import { MainContainer } from "./components/containers/MainContainer";
import { Header } from "./components/header";
import AboutMe from "./screens/aboutMe";
import Contact from "./screens/contact";
import Curriculum from "./screens/curriculum";

import Home from "./screens/home";
import Portfolio from "./screens/portfolio";
import WhatIDo from "./screens/whatIDo";

function App() {
  useEffect(() => {
    document.body.style.padding = "0";
    document.body.style.margin = "0";
  }, []);

  return (

    <Suspense fallback="loading">
      <Header/>
      <MainContainer>
        <Home/>
        <AboutMe/>
        <WhatIDo/>
        <Curriculum/>
        <Portfolio/>
        <Contact/>
      </MainContainer>
    </Suspense>

  );
}

export default App;
