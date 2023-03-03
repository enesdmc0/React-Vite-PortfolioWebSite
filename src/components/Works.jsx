import {useState} from 'react';
import styled from 'styled-components';
import { AiFillHtml5 } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { DiPhotoshop } from "react-icons/di";
import { SiAdobeindesign } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
const data = [
    {text: 'Web Design', logo: <AiFillHtml5/>},
    {text: 'Development', logo: <MdComputer/>},
    {text: 'Illustration', logo: <SiAdobeindesign/>},
    {text: 'Product Design', logo: <DiPhotoshop/>},
    {text: 'Social Media', logo: <FiInstagram/>}
]
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px){
    padding: 20px;
    justify-content: center;
`;

const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 20px;
`;

const ListItem = styled.li`
  font-size: 65px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  
  
  ::after{
    content: "${(props) => props.title}";
    position: absolute;
    top: 0; 
    left: 0;
    color: pink;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }
  
  &:hover{
    ::after{
      animation: moveText 0.5s linear both;
      
      @keyframes moveText {
        to{
          width: 100%;
        }
      }
    }
  }
  @media only screen and (max-width: 768px){
    font-size: 24px;
    -webkit-text-stroke: 0 white;
    color: white;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 250px;
`;

const Works = () => {
    const [activeLogo, setActiveLogo] = useState(<AiFillHtml5/>);
    const handleClick = (text, logo) => {
        setActiveLogo(logo);
    }
    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        {data && data.map((item) => (
                            <ListItem onClick={() => handleClick(item.text, item.logo)} title={item.text} key={item.text}>{item.text}</ListItem>))}
                    </List>
                </Left>
                <Right>{activeLogo}</Right>
            </Container>
        </Section>
    );
};

export default Works;
