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

  /*
  @media screen and (max-width: 1760px) {}
  @media screen and (max-width: 1680px) {}
  @media screen and (max-width: 1600px) {}
  @media screen and (max-width: 1440px) {}
  @media screen and (max-width: 1280px) {}
  @media screen and (max-width: 1120px) {}
  @media screen and (max-width: 960px) {}
  @media screen and (max-width: 864px) {}
  @media screen and (max-width: 768px) {}
  @media screen and (max-width: 704px) {}
  @media screen and (max-width: 640px) {}
  @media screen and (max-width: 560px) {}
  @media screen and (max-width: 480px) {}
  @media screen and (max-width: 400px) {}
  */

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
