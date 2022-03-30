import React from 'react'
import styled from 'styled-components'

import New from '../New';
import NewDisney from '../NewDisney';
import Originals from '../Originals';
import Recommends from '../Recommends';
import Trending from '../Trending';
import ImgSlider from '../UI/ImgSlider';
import Viewers from '../Viewers';

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <New />
      <NewDisney />
      <Trending />
      <Originals />
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  display: block;
  overflow-x: hidden;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center/cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home