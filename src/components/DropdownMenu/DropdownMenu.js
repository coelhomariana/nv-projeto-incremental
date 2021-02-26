import React from 'react'
import styled from 'styled-components'

import Card from 'components/Card'
import Row from 'components/Row'
import Button from 'components/Button'
import Column from 'components/Column'

const DropdownMenu = ({ isMenuOpen }) => {
  if (!isMenuOpen) return null

  const handleLogout = () => {
    localStorage.removeItem('username')
    window.location.reload()
  }

  return (
    <Card
      position='absolute'
      top='100%'
      padding='5px'
      margin='0'
      width='auto'
      height='auto'
      backgroundColor='#bfbfbf'
      justifyContent='space-between'
      boxShadow='none'
    >
      <Column>
        <MenuItem cursor='pointer'>Configurações</MenuItem>
        <MenuItem cursor='pointer'>Minha Conta</MenuItem>
        <MenuItem cursor='pointer'>Ajuda</MenuItem>
      </Column>

      <Row justifyContent='center' margin='5px'>
        <Button width='100%' onClick={handleLogout}>
          Deslogar
        </Button>
      </Row>
    </Card>
  )
}

const MenuItem = styled(Row)`
  padding: 5px;

  &:hover {
    background-color: #6500ca;
    color: #01f7c6;
  }
`

export default DropdownMenu
