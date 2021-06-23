import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  background-color: lightgray;
    border-radius:10px;
    display:inline-block;
    color: white;
    font-family:Arial, Helvetica, sans-serif;
    font-size:16px;
    font-weight:bold;
    align-content: center
  }
  h1{
    text-align: center;
    color: white;
    font-family:Arial, Helvetica, sans-serif;
}
h4{
    text-align: center;
    color: white;
    font-family:Arial, Helvetica, sans-serif;
}
h5{
    text-align: center;
    color: white;
    font-family:Arial, Helvetica, sans-serif;
}
  .div{
box-sizing: border-box;
overflow: visible;
display: inline-block;
flex-wrap: wrap;
padding: 10px;
}

.link{
    color: white;
    font-family: Arial, Helvetica, sans-serif
}
.mainheader{
box-sizing: border-box;
background-color: lightgray;
overflow: visible;
border: 5px solid ;
display: flex;
padding: 20px;
justify-content: space-around;
}

.container{
    display: inline-block;
}

.img{
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
}

.text{
    height: fit-content;
    width: fit-content;
    background-color: beige;
    margin-left: auto;
  margin-right: auto
}

.p{
  height: fit-content;
    width: fit-content;
    background-color: beige;
    margin-left: auto;
  margin-right: auto
}

.button{
    background-color:blue;
    border-radius:10px;
    display:inline-block;
    color:white;
    font-family:Arial, Helvetica, sans-serif;
    font-size:16px;
}
`;
export default GlobalStyle;







































