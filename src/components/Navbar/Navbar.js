import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useUser } from 'context/user-context'
import { routes, unauthenticatedRoutes } from 'helpers/routes'

import Row from 'components/Row'
import Image from 'components/Image'
import Column from 'components/Column'
import Button from 'components/Button'
import Link from 'components/Link'
import DropdownMenu from 'components/DropdownMenu'

const Navbar = () => {
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
      color='white'
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

      <DropdownMenu isMenuOpen={isRoutesMenuOpen} TitleComponent={<p onClick={handleToggleRoutesMenu}>Navegação</p>}>
        <Column>
          {routes.map(({ path, name }) => (
            <Link href={path} textDecoration='none' color='white' key={path}>
              <MenuItem cursor='pointer'>{name}</MenuItem>
            </Link>
          ))}
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

export default Navbar
