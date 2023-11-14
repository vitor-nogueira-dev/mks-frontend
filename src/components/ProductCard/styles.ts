'use client'
import styled from "styled-components";

export const ContainerProduct = styled.div`
width: 217.562px;
height: 285px;
flex-shrink: 0;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
padding: 17px 40px 0px 40px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

export const ContentProduct = styled.div`
display:flex;
flex-wrap: wrap;
`;

export const ContentTextsProduct = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
height: 92px;
padding: 14px 9px;
gap: 6px;
`;

interface PropsStyled {
  fontSize?: string;
  backgroundColor?: string;
  width?: string;
}

export const NameProduct = styled.h3<PropsStyled>`
width: ${(props) => props.width || '60%'};
color: #2C2C2C;
font-size:  ${(props) => props.fontSize || '16px'}; 
font-style: normal;
font-weight: 400;
line-height: 19px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const DescriptionProduct = styled.p`
width: 100%;
height: 25px;
flex-shrink: 0;
color: #2C2C2C;
font-size: 10px;
font-style: normal;
font-weight: 300;
line-height: 12px;
padding: 0 2px;
`;

export const PriceProduct = styled.p<{ $backgroundColor?: string, $width?: string, $fontSize?: string }>`
width: ${(props) => props.$width || '36%'};
height: 26px;
flex-shrink: 0;
display: flex;
justify-content: center;
align-items: center;
padding: 5px 10px;
border-radius: 5px;
background: ${(props) => props.$backgroundColor || '#373737'};
color: ${(props) => props.color || '#FFF'};
font-size:  ${(props) => props.$fontSize || '15px'}; 
font-style: normal;
font-weight: 700;
line-height: 15px;`;

export const ButtonAddProduct = styled.button`
width: 218px;
height: 31.907px;
flex-shrink: 0;
border-radius: 0px 0px 8px 8px;
display: flex;
justify-content: center;
align-items: center;
gap:10px;
color: #FFF;
background-color: #0F52BA;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 18px; 
text-transform: uppercase;

  &:hover{
    background-color: #0F52BA;
    opacity: 0.8;
    transition: all ease-in-out 0.3s;
  }
`;

export const PhotoProduct = styled.img`
  width: ${(props) => props.width || '111px'}; 
  height: ${(props) => props.height || '138px'};
  flex-shrink: 0;
  src: url(${(props) => props.src});
`;

export const BagIconProduct = styled.img`
width: 12px;
height: 13.5px;
src: url(${(props) => props.src});
`;