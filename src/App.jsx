import Hero from './components/Hero.jsx';
import Who from './components/Who.jsx';
import Works from './components/Works.jsx';
import Contact from './components/Contact.jsx';
import styled from 'styled-components';
function App() {

    const Container = styled.div`
      height: 100vh;
      scroll-snap-type: y mandatory;
      scroll-behavior: smooth;
      overflow-y: auto;
      scrollbar-width: none;
      color: white;
      background: url("/img/bg.jpeg");
      &::-webkit-scrollbar {
        display: none
      }
    `

  return (
    <Container>
        <Hero/>
        <Who/>
        <Works/>
        <Contact/>
    </Container>
  )
}

export default App
