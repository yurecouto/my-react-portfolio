import React, { useEffect } from 'react';
import { MainContainer } from './components/containers/MainContainer';
import { Header } from './components/header';

import CoverLetter from './screens/coverLetter';
import WhatIDo from './screens/whatIDo';

function App() {
  useEffect(() => {
    document.body.style.padding = "0";
    document.body.style.margin = "0";
  }, []);

  return (
    <>
      <Header/>
      <MainContainer>
        <CoverLetter/>
        <WhatIDo/>
      </MainContainer>
    </>
  );
}

export default App;
