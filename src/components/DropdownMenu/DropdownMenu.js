import React from 'react'

import Card from 'components/Card'
import Row from 'components/Row'
import Button from 'components/Button'

const DropdownMenu = ({ isMenuOpen }) => {
  if (!isMenuOpen) return null

  const handleLogout = () => {
    localStorage.removeItem('username')
    window.location.reload()
  }

  return (
    <Card
      position='absolute'
      padding='0px'
      marginTop='55px'
      width='150px'
      backgroundColor='#bfbfbf'
      justifyContent='space-around'
    >
      <Row height='50px'>Menu1</Row>
      <Row height='50px'>Menu2</Row>
      <Row height='50px'>Menu3</Row>
      <Row height='50px'>Menu4</Row>
      <Row height='50px'>Menu4</Row>
      <Button width='100%' onClick={handleLogout}>
        Logout
      </Button>
    </Card>
  )
}

export default DropdownMenu
