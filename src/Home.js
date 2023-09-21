import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column; /* Ensure items stack vertically on mobile */
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    flex: 3;
  }
`;

//RIGHT SIDE

const Right = styled.div`
  flex: 2;
  position: relative;
  display: flex;
  padding-right: 20px;
  justify-content: center; /* Horizontal centering */
  align-items: center; /* Vertical centering */
  height: 100vh @media only screen and (max-width: 768px) {
    flex: 0;
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }

  @media only screen and (max-width: 667px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.h2`
  color: orange;
  @media only screen and (max-width: 667px) {
    font-size: 20px;
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
  font-size: 24px;
  color: Black;

  @media only screen and (max-width: 768px) {
    padding: 25px;
    font-size: 15px;
    overflow-wrap: break-word;
  }
`;

const Button = styled.div`
  background-color: orange;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 10px;
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
  height: 70%;
  width: 100%;
  @media only screen and (max-width: 768px) {
    display: none;
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
              <Line src="./img/line.png" />
              <Subtitle>Earthquakes happen alot more than you think</Subtitle>
            </WhatWeDo>

            <Desc></Desc>
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
          </Left>
          <Right>
            <Img src="./img/world.png"></Img>
          </Right>
        </Container>
      </Section>
    );
  }
}

export default Home;
