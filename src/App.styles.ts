import styled,{ createGlobalStyle } from 'styled-components';
//@ts-ignore
import BGImage from './images/image3.jpg'

export const GlobalStyle = createGlobalStyle`
html{
    height:100%,
}
body{
    background-image: url(${BGImage});
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
    height: 100vh;
    margin:0;
    padding:0 50px;
    display:flex;
    justify-content:center;
}
*{
    box-sizing:border-box;
    font-family: 'Cairo', sans-serif;
}
`;
export const Wrapper= styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;

    >p{
        color:#fff;
    }

    .score{
        color:#595959;
        font-size:2rem;
        margin: 0;
    }
    
    h1{
        font-family: 'Cairo', sans-serif;
        background-image:linear-gradient(180deg,#A3A2A2  ,#111111     );
        background-size:100%;
        background-clip:text;
        -webkit-background-clip:text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip:text;
        -moz-text-fill-color:transparent;
        font-size:80px;
        font-weight:400;
        text-align:center;
        margin:20px;
    }
    .start,.next{
        cursor:pointer;
        background:linear-gradient(180deg,#D6D5D4      ,#E6E6E6    );
        border:2px solid #E6E6E6 ;
        box-shadow:0px 5px 10px rgba(0,0,0,0.25);
        border-radius:20px;
        height:40px;
        margin:20px 0;
        padding:0 40px;
        font-family: 'Cairo', sans-serif;
       
    }
    .start{
        max-width:200px;
    }
`;