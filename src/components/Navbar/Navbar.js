import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useUser } from 'context/user-context'

import Row from 'components/Row'
import Image from 'components/Image'
import Text from 'components/Text'
import DropdownMenu from 'components/DropdownMenu'

const Navbar = props => {
  const { title } = props
  const { user } = useUser()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen)

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
      <Image onClick={handleToggleMenu} src={user.avatar} size='45px' />
      <Text marginY='10px' marginX='30px'>
        {title}
      </Text>
    </Row>
  )
}

Navbar.propTypes = {
  title: PropTypes.string
}

export default Navbar
