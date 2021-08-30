import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    /* font-size */
    --open-sans: 'Open Sans', sans-serif;
    --noto-sans: 'Noto Sans', sans-serif;

    /* color */
    --first-color: #58BCB3;
    --second-color: #4FA9A1;
    --black-color: #000000;
    --white-color: #fff;
    --bg-color: #F6F6F6;
    --txt-color: #8d8c8c;
    --title-color: #8c8c8c;
    --border-color: #E8E8E8;
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