import { Icon } from "@iconify/react";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LoadingContainer } from "./components/containers/LoadingContainer";
import { MainContainer } from "./components/containers/MainContainer";
import { Header } from "./components/header";
import Info from "./interfaces/Info";
import { selectTheme, setTheme } from "./providers/slices/theme.slice";
import AboutMe from "./screens/aboutMe";
import Contact from "./screens/contact";
import Curriculum from "./screens/curriculum";

import Home from "./screens/home";
import Portfolio from "./screens/portfolio";
import WhatIDo from "./screens/whatIDo";
import api from "./services/api";
import i18n from "./translations/i18n";

import dark from "./themes/dark.theme";
import light from "./themes/light.theme";

function App() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const [info, setInfo] = useState<Info>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    document.body.style.padding = "0";
    document.body.style.margin = "0";
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const response = await api.get(`user/show/${process.env.REACT_APP_USER_ID}`);
      setInfo(response.data);
      setIsLoading(false)
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
            "icon": "openmoji:flag-united-kingdom",
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

  useEffect(() => {
    if (localStorage.getItem("THEME") === "dark") {
      dispatch(setTheme(dark))
      localStorage.setItem("THEME", "dark")
    } else {
      dispatch(setTheme(light))
      localStorage.setItem("THEME", "light")
    }
  })

  return (
    (isLoading ? (
      <LoadingContainer>
        <Icon
          icon="eos-icons:bubble-loading"
          style={{
            height: "64px",
            width: "64px",
            color: theme.COLORS.TEXT_HIGHLIGHT
          }}
        />
      </LoadingContainer>
    ) : (
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
    ))
  );
}

export default App;
