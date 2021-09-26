import { createGlobalStyle } from 'styled-components';
import Bg from '../img/Bg.jpeg'
  
  const GlobalStyle = createGlobalStyle`
  body {
    background: url(${Bg}) center no-repeat;
    background-size: cover;
    color: #332c36;
    padding: 0;
    margin: 0;
    font-family: 'New Tegomin', serif;
  }
`;

export default GlobalStyle;