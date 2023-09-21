import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import Guide1 from "./components/Guide1.jsx";
import Guide2 from "./components/Guide2.jsx";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  width: 100%;
  overflow-x: hidden !important;
  scrollbar-width: none;
`;

class Guide extends Component {
  render() {
    return (
      <Container>
        <Guide1 />
        <br />
        <br />
        <br />
        <br />
        <Guide2 />
      </Container>
    );
  }
}

export default Guide;
