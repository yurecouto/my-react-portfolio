import React, { useEffect } from 'react';
import { MainContainer } from './components/containers/MainContainer';
import { MainHeader } from './components/functionals/MainHeader';
import Competencies from './screens/competencies';
import CoverLetter from './screens/coverLetter';

function App() {
  useEffect(() => {
    document.body.style.padding = "0";
    document.body.style.margin = "0";
  }, []);

  return (
    <>
      <MainHeader/>
      <MainContainer>
        <CoverLetter/>
        <Competencies/>
      </MainContainer>
    </>
  );
}

export default App;
