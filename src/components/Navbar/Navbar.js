import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Row from 'components/Row'
import Image from 'components/Image'
import Text from 'components/Text'
import DropdownMenu from 'components/DropdownMenu'

import { useUser } from 'context/user-context'

const Navbar = props => {
  const { title, icon } = props
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user } = useUser()
  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen)
  console.log(user)
  return (
    <Row
      justifyContent='space-between'
      backgroundColor='#212121'
      width='100vw'
      paddingY='5px'
      paddingX='15px'
      position='relative'
      {...props}
    >
      <DropdownMenu isMenuOpen={isMenuOpen} />
      <Image onClick={handleToggleMenu} src={icon} size='45px' />
      <Text marginY='10px' marginX='30px'>
        {title}
      </Text>
    </Row>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string
}

export default Navbar
