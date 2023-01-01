import React, { useEffect } from 'react';
import { MainContainer } from './components/containers/MainContainer';
import { MainHeader } from './components/functionals/MainHeader';
import Competencies from './screens/competencies';
import CoverLetter from './screens/coverLetter';
import Curriculum from './screens/curriculum';

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
        <Curriculum/>
      </MainContainer>
    </>
  );
}

export default App;
