import React from 'react';

import styled, { createGlobalStyle } from 'styled-components';

import Timer from './components/Timer';
import SocailLinks from './components/SocialLinks';

import bgStars from './images/bg-stars.svg';
import bgMountains from './images/pattern-hills.svg';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    font-family: 'Red Hat Text', sans-serif;
  }
`;
const Wrapper = styled.div`
    justify-content: center;
    background: url(${bgStars}) hsl(235, 16%, 14%);
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
`;
const MountainsTheme = styled.div`
    position: absolute;
    top: 70%;
    left: 0;
    width: 100vw;
    height: 400px;
    background: url(${bgMountains}) no-repeat;
    background-size: cover;
    @media (max-width: 950px) {
        background-position-x: -85rem;
    }
`;

function App() {
    return (
        <Wrapper>
            <GlobalStyle />
            <Timer />
            <SocailLinks />
            <MountainsTheme />
        </Wrapper>
    );
}

export default App;
