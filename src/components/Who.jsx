import React from 'react';
import styled from 'styled-components';
import { FaReact } from "react-icons/fa";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex; 
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1100px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 200px;
  @media only screen and (max-width: 768px){
    display: none;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 768px){
    align-items: center;
    text-align: center;
  }
`

const Title = styled.h1`
font-size: 70px;
  @media only screen and (max-width: 768px){
    font-size: 55px;
`



const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;`

const Line = styled.img`
  height: 5px;`

const Subtitle = styled.h2`
    color: #da4ea2;
`

const Desc = styled.p`
font-size: 24px;
color: lightgray;
`

const Button = styled.button`
  background: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`


const Hero = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <FaReact/>
                </Left>
                <Right>
                    <Title>Think outside the square space</Title>
                    <WhatWeDo>
                        <Line src="/img/line.png"/>
                        <Subtitle>Who we Are</Subtitle>
                    </WhatWeDo>
                    <Desc>
                        a creative group of designers and developers with a passion for the arts.
                    </Desc>
                    <Button>See our works</Button>
                </Right>
            </Container>
        </Section>
    );
};

export default Hero;
