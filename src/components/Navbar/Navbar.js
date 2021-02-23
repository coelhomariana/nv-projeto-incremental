import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Row from 'components/Row'
import Image from 'components/Image'
import Text from 'components/Text'
import DropdownMenu from 'components/DropdownMenu'

const Navbar = props => {
  const { title, icon } = props
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleOpenMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <>
      <Row
        justifyContent='space-between'
        backgroundColor='#212121'
        width='100vw'
        height='55px'
        paddingY='5px'
        paddingX='15px'
        {...props}
      >
        <Image onClick={handleOpenMenu} src={icon} size='45px'></Image>
        <Text marginY='10px' marginX='30px'>
          {title}
        </Text>
      </Row>
      <DropdownMenu isMenuOpen={isMenuOpen} />
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string
}

export default Navbar
