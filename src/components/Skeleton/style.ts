'use client';
import styled from "styled-components";

export const SkeletonContainer = styled.div`
  width: 100vw;
  max-width: 1100px;
  height: 80%;
  margin: auto;
  padding: 18px;
  gap: 25px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SkeletonWrapper = styled.div`
  width: 100%;
  height: 6.3rem;
  background-color: #b7b7b7;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const ProductSkeletonContainer = styled.div`
  width: 217.562px;
  height: 285px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  padding: 17px 40px 0px 40px;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
`;

export const SkeletonImage = styled.div`
  width: 80%; 
  height: 60%; 
  background-color: #ddd; 
  border-radius: 10px;
`;

export const SkeletonText = styled.div`
  width: 70%; 
  height: 10px; 
  background-color: #ddd; 
  border-radius: 5px;
`;

export const SkeletonButton = styled.div`
  width: 50%; 
  height: 20px; 
  background-color: #ddd; 
  border-radius: 5px; 
`;
