import React, { Suspense, useEffect, useState } from "react";

import { MainContainer } from "./components/containers/MainContainer";
import { Header } from "./components/header";
import Info from "./interfaces/Info";
import AboutMe from "./screens/aboutMe";
import Contact from "./screens/contact";
import Curriculum from "./screens/curriculum";

import Home from "./screens/home";
import Portfolio from "./screens/portfolio";
import WhatIDo from "./screens/whatIDo";
import api from "./services/api";
import i18n from "./translations/i18n";

function App() {
  useEffect(() => {
    document.body.style.padding = "0";
    document.body.style.margin = "0";
  }, []);

  const [info, setInfo] = useState<Info>()

  useEffect(() => {
    const fetch = async () => {
      const response = await api.get(`user/show/${process.env.REACT_APP_USER_ID}`);
      setInfo(response.data);
    }

    fetch()
  }, [])

  useEffect(() => {
    if (!localStorage.getItem("LANGUAGE")) {
      const userLang = navigator.language;

      switch (userLang) {
        case "pt-BR":
          i18n.changeLanguage("pt_BR")
          localStorage.setItem("LANGUAGE", JSON.stringify({
            "code": "pt_BR",
            "icon": "openmoji:flag-brazil",
            "name": "Portuguese"
          }))
          break

        case "en-US":
          i18n.changeLanguage("en_US")
          localStorage.setItem("LANGUAGE", JSON.stringify({
            "code": "en_US",
            "icon": "openmoji:flag-canada",
            "name": "English"
          }))
          break

        case "es-ES":
          i18n.changeLanguage("es_ES")
          localStorage.setItem("LANGUAGE", JSON.stringify({
            "code": "es_ES",
            "icon": "openmoji:flag-spain",
            "name": "Spanish"
          }))
          break

        case "et":
          i18n.changeLanguage("et")
          localStorage.setItem("LANGUAGE", JSON.stringify({
            "code": "et",
            "icon": "openmoji:flag-estonia",
            "name": "Estonian"
          }))
          break

        default:
          i18n.changeLanguage("pt_BR")
          localStorage.setItem("LANGUAGE", JSON.stringify({
            "code": "pt_BR",
            "icon": "openmoji:flag-brazil",
            "name": "Portuguese"
          }))
          break
      }
    }
  })

  return (
    <Suspense fallback="loading">
      <Header/>
      <MainContainer>
        <Home/>
        <AboutMe info={info}/>
        <WhatIDo/>
        <Curriculum/>
        <Portfolio/>
        <Contact info={info}/>
      </MainContainer>
    </Suspense>
  );
}

export default App;
