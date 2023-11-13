'use client'
import React from 'react'
import { ButtonCartContainer, ButtonCartIcon, ButtonCartText } from './styles'
import { useDispatch } from 'react-redux'
import { TOGGLE_CART } from '@/redux/actions/actions'
type Props = {}


function ButtonCartHeader({ }: Props) {
  const dispatch = useDispatch()

  const handleOpenCart = () => {
    dispatch({ type: TOGGLE_CART, payload: true })
  }
  return (
    <ButtonCartContainer onClick={handleOpenCart}>
      <ButtonCartIcon src='/icon-cart.png' />
      <ButtonCartText>0</ButtonCartText>
    </ButtonCartContainer>
  )
}

export default ButtonCartHeader