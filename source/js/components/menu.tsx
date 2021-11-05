import React from 'react'
import {
  Nav,
  NavLi
} from '../styles/main.styles'

interface IMenu {
  data: []
}

export const Menu = (list: IMenu) => {
  const menu = list.data
  console.log(menu);
  const menuItems = menu.map((item,index)=> <NavLi key={index}>{item}</NavLi>)
  return(
    <Nav>{menuItems}</Nav>
  )
}