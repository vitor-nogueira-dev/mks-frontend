'use client';
import { IPropsIconCart } from '@/interfaces/IPropsIconCart';
import styled from 'styled-components';

export const ButtonCartContainer = styled.div`
  width: 90px;
  height: 45px;
  border-radius: 8px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  cursor: pointer;

  &:hover { 
    background: #F2F2F2;
    transition: all ease-in-out 0.3s;
  }
`;

export const ButtonCartIcon = styled.img<IPropsIconCart>`
  width: 19px;
  height: 18px;
  margin-right: 10px;
  src: url(${(props) => props.src});
`;

export const ButtonCartText = styled.div`
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
