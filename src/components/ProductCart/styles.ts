'use client';
import styled from "styled-components";

export const ContainerProductCart = styled.div`
width: 379px;     
height: 95px;
flex-shrink: 0;
border-radius: 8px;
background: #FFF;
box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
display: flex;
justify-content: space-around;
align-items: center;
padding: 4px;
position: relative; 

  @media (max-width: 768px) {
    width: 294px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -7px;
  right: -6px;
  background: #000; 
  color: #fff; 
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px; 
  border-radius: 50%; 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px; 
  width: 20px; 
  z-index: 10;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #333; 
  }

  user-select: none; 
  -webkit-tap-highlight-color: transparent;
`;



export const ContentQuantity = styled.div`
  small {
    color: #000;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;


export const ContentButtonsQuantity = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative; 

  width: 70px;
  height: 25px;
  flex-shrink: 0;

  border-radius: 4px;
  border: 1px solid #BFBFBF;
  background: #FFF;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px; 
    height: 70%; 
    top: 50%; 
    transform: translateY(-50%); 
    background-color: #BFBFBF; 
  }

  &::before {
    left: calc(33%); 
    margin-right: -3px;
  }

  &::after {
    right: calc(33%); 
    margin-left: -3px;
  }
`;

export const Button = styled.button`
background: transparent;
border: none;
cursor: pointer;
padding: 4px;
font-size: 16px;
`;