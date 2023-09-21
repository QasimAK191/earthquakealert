import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import PDFFile from "../rm.pdf";

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
  position: relative;
  display: flex;
  padding-right: 20px;
  justify-content: center; /* Horizontal centering */
  align-items: center; /* Vertical centering */
  height: 100vh
  @media only screen and (max-width: 768px) {
    flex: 0;
    display: none;
  }
`;

//RIGHT SIDE

const Right = styled.div`
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
    background-color: red;
    transform: translateY(-5px);
  }
`;

const Img = styled.img`
height: 30%;
width: 100%;
@media only screen and (max-width: 768px) {
  display: none;
}
`;

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch(PDFFile).then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "Guide.pdf";
      alink.click();
    });
  });
};

class Guide1 extends Component {

    render() {
        return (

            <Section id="who">
            <Container>
              <Left>
                <Img src="./img/drop_cover_hold.png"></Img>
              </Left>
              <Right>
                <Title>Drop, Cover and Hold on</Title>
                <WhatWeDo>
                  <Line src="./img/line.png" />
                  <Subtitle>When you feel the ground shake, immediately drop, cover and hold on.</Subtitle>
                </WhatWeDo>
                <ul>
                        <li><b>Drop</b> to your hands and knees. If you’re inside, stay inside – don’t run outdoors or to other rooms
                        </li>
                        <li><b>Cover</b> your head and neck with your arm and take shelter under a sturdy piece of furniture.
                
                        </li>
                        <li><b>Hold </b>
                        on to your shelter, covering your head and neck until the shaking stops

                        </li>
                    </ul>
                <Desc>
                    
                Prepare your home
Before an earthquake, you can help prevent injuries and damage by making some changes inside your home. Severe shaking can topple large furniture and appliances, toss heavy items from walls and shelves, and throw open cupboards. 
                </Desc>
                <Button>
                  <Link style={linkStyle} onClick={onButtonClick} smooth>
                    Download Guide
                  </Link>
                </Button>
              </Right>
            </Container>
          </Section>


        )
    }
}

export default Guide1;