import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import narutoImg from "../../../src/assets/img/NiceGuy.png";
import Quotes from '../../components/quotes/Quotes'
import { getQuote } from '../../services'
import dattebayo from '../../assets/sounds/dattebayo.mp3'

const audio = new Audio(dattebayo)

function App() {

  const isMounted = useRef(true)
  
  const [quote, setQuote] = useState({
    speaker: 'Loanding speaker ...',
    quote: 'Loading Quote'
  })

  const onUpdate = async () => {
    const resQuote = await getQuote()

    if (isMounted.current) {
      setQuote(resQuote)
      audio.play()
    }
  }

  useEffect(() => {
    onUpdate()

    return () => {
      isMounted.current = false
    }
  }, [])

  return (
    <>
      <Content>
        <Quotes 
          {... quote}
          onUpdate={onUpdate}
        />
        <RockLeeImg src={narutoImg} alt="Naruto nice guy" />
      </Content>
    </>
  );
}

const Content = styled.div`
  heigth: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RockLeeImg = styled.img`
  max-width: 100vh;
  align-self: flex-left-end;
`;
export default App;
