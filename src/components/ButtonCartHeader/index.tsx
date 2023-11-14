'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { TOGGLE_CART } from '@/redux/actions/actions'
import { getTotalItems } from '@/redux/selectors/selectors'
import { ButtonCartContainer, ButtonCartIcon, ButtonCartText } from './styles'

function ButtonCartHeader() {
  const dispatch = useDispatch()

  const getTotalsItems = useSelector(getTotalItems)

  const handleOpenCart = () => {
    dispatch({ type: TOGGLE_CART, payload: true })
  }
  return (
    <ButtonCartContainer onClick={handleOpenCart}>
      <ButtonCartIcon src='/icon-cart.png' />
      <ButtonCartText>{getTotalsItems}</ButtonCartText>
    </ButtonCartContainer>
  )
}

export default ButtonCartHeader