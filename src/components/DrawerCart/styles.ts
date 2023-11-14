'use client';
import styled from "styled-components";

export const ContentHeaderCart = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 24px;
`;

export const TitleCart = styled.h3`
width: 180px;
height: 56px;
flex-shrink: 0;
color: #FFF;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const ContentProductsCart = styled.div`
margin: auto;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 20px;

max-height: 600px;
overflow-y: auto;
padding-top: 20px;

::-webkit-scrollbar {
  display: none;
}
-ms-overflow-style: none;
scrollbar-width: none;
`;

export const ContentFooterCart = styled.div`
display: flex;
flex-direction: column;
`;

export const ContentTotalCart = styled.h4`
color: #FFF;

font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 15px;

display: flex;
align-items: center;
justify-content: space-between;
padding: 26px;
`;

export const ContentButtonCart = styled.button`
height: 80px;
flex-shrink: 0;
background: #000;
color: #FFF;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 15px; 
`;