'use client'
import React from 'react'
import { ButtonCartContainer, ButtonCartIcon, ButtonCartText } from './styles'

type Props = {}

function ButtonCart({ }: Props) {
  return (
    <ButtonCartContainer>
      <ButtonCartIcon src='/icon-cart.png'/>
      <ButtonCartText>0</ButtonCartText>
    </ButtonCartContainer>
  )
}

export default ButtonCart