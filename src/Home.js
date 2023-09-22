import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  @media only screen and (min-width: 768px) {
    flex-direction: row; /* Horizontal alignment in desktop mode */
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    flex: 3;
  }
`;

const Right = styled.div`
  flex: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 68px;
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    font-size: 52px;
  }
`;

const Subtitle = styled.h2`
  color: orange;
  font-size: 32px;

  @media only screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Desc = styled.p`
  font-size: 16px;
  color: Black;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    padding: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    flex-direction: column; /* Vertical alignment in mobile view */
    align-items: center;
  }
`;

const Button = styled.div`
  background-color: orange;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-align: center;

  transition: 0.3s;
  transition: transform 250ms;

  &:hover {
    background-color: blue;
    transform: translateY(-5px);
  }
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Icon = styled.img`
  background-color: blue;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  width: 20px;
  transition: transform 0.3s;

  &:hover {
    background-color: red;
    transform: scale(1.3);
  }
`;

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

class Home extends Component {
  render() {
    return (
      <Section id="who">
        <Container>
          <Left>
            <Title>Be prepared this time</Title>
            <WhatWeDo>
              <Line src="./img/line.png" alt="Line" />
              <Subtitle>Earthquakes happen a lot more than you think</Subtitle>
            </WhatWeDo>

            <Desc>
              Earthquakes can't be predicted. The first sign may be a loud bang
              or roar. You may then feel the ground shake and roll for several
              minutes.
            </Desc>
            <ButtonContainer>
              <Button>
                <Link style={linkStyle} to={"/quake-tracker"} smooth>
                  Map
                </Link>
              </Button>
              <Button>
                <Link style={linkStyle} to={"/quake-guide"} smooth>
                  Guide
                </Link>
              </Button>
              <Button href="https://github.com/QasimAK191/earthquakealert">
                GitHub
              </Button>
            </ButtonContainer>
          </Left>
          <Right>
            <Img src="./img/world.png" alt="World Map" />
          </Right>
        </Container>
      </Section>
    );
  }
}

export default Home;
