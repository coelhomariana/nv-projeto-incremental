import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useUser } from 'context/user-context'

import Row from 'components/Row'
import Image from 'components/Image'
import Column from 'components/Column'
import Button from 'components/Button'
import DropdownMenu from 'components/DropdownMenu'

const Navbar = props => {
  const { title } = props
  const { user, logout } = useUser()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isRoutesMenuOpen, setIsRoutesMenuOpen] = useState(false)

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const handleToggleRoutesMenu = () => setIsRoutesMenuOpen(!isRoutesMenuOpen)

  return (
    <Row
      justifyContent='space-between'
      alignItems='center'
      backgroundColor='#212121'
      width='100vw'
      paddingY='5px'
      paddingX='25px'
      position='relative'
      {...props}
    >
      <DropdownMenu
        isMenuOpen={isMenuOpen}
        TitleComponent={<Image onClick={handleToggleMenu} size='45px' src={user.avatar}></Image>}
      >
        <Column>
          <MenuItem cursor='pointer'>Configurações</MenuItem>
          <MenuItem cursor='pointer'>Minha Conta</MenuItem>
          <MenuItem cursor='pointer'>Ajuda</MenuItem>
        </Column>

        <Row justifyContent='center' margin='5px'>
          <Button width='100%' onClick={logout}>
            Deslogar
          </Button>
        </Row>
      </DropdownMenu>

      <DropdownMenu isMenuOpen={isRoutesMenuOpen} TitleComponent={<p onClick={handleToggleRoutesMenu}>Dashboard</p>}>
        <Column>
          <MenuItem cursor='pointer'>Rota 1</MenuItem>
          <MenuItem cursor='pointer'>Rota 2</MenuItem>
          <MenuItem cursor='pointer'>Rota 3</MenuItem>
        </Column>
      </DropdownMenu>
    </Row>
  )
}

const MenuItem = styled(Row)`
  padding: 5px;

  &:hover {
    background-color: #6500ca;
    color: #01f7c6;
  }
`

Navbar.propTypes = {
  title: PropTypes.string
}

export default Navbar
