import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle` 
 body{ 
   margin: 0;
   font-family: 'Atma', cursive;
   background-color: rgb(255, 222, 89);
 }

 h2, h3, button {
  font-family: 'Alegreya Sans', sans-serif;
 }
 `

export const NavStyled = styled.div`
    background-color: black;    
    width: 100%;
    height: 190px;
    font-size: 40px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const FormStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 222, 89);    

`


