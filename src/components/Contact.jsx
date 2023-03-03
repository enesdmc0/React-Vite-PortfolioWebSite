import {useRef, useState} from 'react';
import styled from 'styled-components';
import Map from './Map.jsx';
import emailjs from "@emailjs/browser";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  
`
const Left = styled.div`
    flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px){
    justify-content: center;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 25px;
  @media only screen and (max-width: 768px){
    width: 300px;
  }
`

const Title = styled.h1`
font-weight: 200`

const Input = styled.input`
  padding: 20px;
  background: #e8e6e6;
  border: none;
  border-radius: 5px;
  outline: none;
`
const TextArea = styled.textarea`
  padding: 20px;
  background: #e8e6e6;
  border: none;
  border-radius: 5px;
  outline: none;
`

const Button = styled.button`
  background: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px){
    display: none;
`


const Contact = () => {
    const [success, setSuccess] = useState(null)
    const form = useRef();
    const handleSubmit  = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_8v1hm3p", "template_v45zso7", form.current, "RVSy6W0EyFthuhuVJ")
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
            }, error => {
                console.log(error.text);
                setSuccess(false)
            })
    }
    return (
        <Section>
            <Container>
                <Left>
                    <Form ref={form} onSubmit={handleSubmit}>
                        <Title>Contact Us</Title>
                        <Input name="name" placeholder="Name"/>
                        <Input name="email" placeholder="Email"/>
                        <TextArea name="message" rows={10} placeholder="Write your message"/>
                        <Button>Send</Button>
                        {success && <span>Send your mail!</span>}
                    </Form>
                </Left>
                <Right>
                    <Map/>
                </Right>
            </Container>
        </Section>
    );
};

export default Contact;
