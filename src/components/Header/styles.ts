'use client';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 70%;
  max-width: 90rem;
  height: 6.3rem;
  background-color: #0f52ba;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
`;

export const HeaderContentTitles = styled.div`
  display: flex;
`;

export const HeaderTitle = styled.h1`
  color: #fff;
  font-family: Montserrat;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2rem;
  text-transform: uppercase;
`;

export const HeaderSubtitle = styled.h2`
  color: #fff;
  font-family: Montserrat;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.6rem;
  margin-top: 0.35rem;
  margin-left: 0.2rem;
`;
