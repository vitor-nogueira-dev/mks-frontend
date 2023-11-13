'use client'
import React from 'react'
import { HeaderContainer, HeaderTitle, HeaderSubtitle, HeaderContentTitles } from './styles'
import ButtonCart from '../ButtonCartHeader'

type Props = {}

function Header({ }: Props) {
  return (
    <HeaderContainer>
      <HeaderContentTitles>
        <HeaderTitle>mks</HeaderTitle>
        <HeaderSubtitle>Sistemas</HeaderSubtitle>
      </HeaderContentTitles>
      <ButtonCart />
    </HeaderContainer>
  )
}

export default Header