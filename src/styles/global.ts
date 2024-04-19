import { createGlobalStyle } from "styled-components";
import theme from "../theme";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    @media(max-width: 1200px){
        font-size: 93.75%
    }
    @media(max-width: 720px){
        font-size: 87.5%
    }
}

body{
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.background};
    max-width: 1254px;
    margin: 0 auto;
    min-height: 100vh;
}

body, input, text-area, a,  button{
    font-family: "Poppins", sans-serif;
    font-weight:400;
    border: 0;
    color: ${() => theme.colors.shade}
}


button, a{
    cursor: pointer;
    border:0;
}

::-webkit-scrollbar {
    border-radius: 5px;
    width: 10px;
}

::-webkit-scrollbar-thumb {
    background-color: ${() => theme.colors.green_500} ;
    border-radius: 5px;
}

::-webkit-scrollbar-track {
    background-color: ${() => theme.colors.background} ;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
`;
