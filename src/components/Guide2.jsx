import React, { Component, useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const data = [
    "Store",
    "In bed",
    "Shore/beach",
    "High-rise",
    "Driving",
    "Outside",
  ];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 60px;
    padding-right: 120px;
    padding-top: 90px;
    justify-content: center;
  }
`;

const List = styled.ul`
  padding: 15px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
`;

const ListItem = styled.li`
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px orange;
  position: relative;
  transition: 0.5s;
  transition: transform 250ms;

  @media only screen and (max-width: 768px) {
    font-size: 26px;
    color: orange;
    -webkit-text-stroke: 0px;
    
  }
  @media only screen and (max-width: 667px) {
    
    font-size: 20px;
    color: orange;
    -webkit-text-stroke: 0px;
  }
  &:hover {
    color: black;
    transform: translateY(-15px);
    @media only screen and (max-width: 768px) {
        color: #d3d3d3;
        transform: translateY(-2px);
        
      }
  }
`;

const Right = styled.div`
  flex: 1;
  font-size: 37px;
  padding: 200px;
  @media only screen and (max-width: 768px) {
    font-size: 17px;
    padding: 20px;
    
  }
`;

const Guide2 = () => {
    const [work, setWork] = useState("Web Design");
        return (

            <Section id="works">
            <Container>
              <Left>
                <List>
                  {data.map((item) => (
                    <ListItem key={item} text={item} onClick={() => setWork(item)}>
                      {item}
                    </ListItem>
                  ))}
                </List>
              </Left>
              <Right>
                {work === data[0] ? (
                  <p>Immediately drop cover and hold on. If you must move to get away from heavy items on high shelves, drop to the ground first and crawl only the shortest distance necessary.</p>
                ) : work === data[1] ? (
                  <p>Hold on and stay there, protecting your head with a pillow or blanket. You are less likely to be injured in bed where you are shielded from flying objects and broken glass. Most injuries occur when people try to run for cover.</p>
                ) : work === data[2] ? (
                  <p>Immediately evacuate to high ground. Don’t wait for officials to issue a warning. Walk quickly, rather than drive, to avoid traffic, debris and other hazards.</p>
                ) : work === data[3] ? (
                  <p>Immediately drop, cover and hold on. Avoid windows and other hazards. Do not use elevators. Be aware sprinkler systems or fire alarms may activate.</p>
                ) : work === data[4] ?(
                  <p>Stay at your seat, bending over to protect your head and neck, or drop to the floor between rows if there's room. Don’t move until the shaking is over. When it stops, walk out slowly, following directions from officials. Remember to drop, cover and hold on during aftershocks.</p>
                ): work === data[5] ?(
                    <p>Pull over, stop and set the handbrake. Avoid overpasses, bridges, power lines, signs and other hazards. Stay inside the vehicle until the shaking is over. If a power line falls on the car, stay inside until a trained person removes the wire.</p>)
                    :(
                        <p>Immediately drop, cover and hold on.  Move to a clear area only if you can safely do so. Don't run. Avoid buildings, power lines, trees, signs, vehicles and other hazards. </p>
                        )
                    }
              </Right>
            </Container>
          </Section>

        )
    }


export default Guide2;