import React from 'react'
import styled, { css } from 'styled-components'

import Card from 'components/Card'
import Column from 'components/Column'

const DropdownMenu = ({ isMenuOpen, children, TitleComponent, ...props }) => {
  return (
    <Column>
      {TitleComponent}
      <Menu
        position='absolute'
        top='100%'
        padding='5px'
        margin='0'
        width='auto'
        height='auto'
        backgroundColor='#bfbfbf'
        justifyContent='space-between'
        boxShadow='none'
        isMenuOpen={isMenuOpen}
      >
        {children}
      </Menu>
    </Column>
  )
}

const Menu = styled(Card)(
  ({ isMenuOpen }) => css`
    visibility: ${isMenuOpen ? 'visible' : 'hidden'};
    opacity: ${isMenuOpen ? 1 : 0};
    transition: all ease-in-out 300ms;
    position: absolute;
    top: 100%;
  `
)

export default DropdownMenu
