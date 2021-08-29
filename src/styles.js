import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --open-sans: 'Open Sans', sans-serif;
    --noto-sans: 'Noto Sans', sans-serif;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    font-family: 'Oswald', sans-serif;
  }

  img{
    max-width:100%;
    height:auto;
    vertical-align: middle;
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }

  input,button{
    outline: none;
  }
`;

export default GlobalStyle;
