import React from 'react'
import PropTypes from 'prop-types'

import Row from 'components/Row'
import Image from 'components/Image'
import Text from 'components/Text'

const Navbar = props => {
  const { title, icon } = props
  return (
    <Row
      justifyContent='space-between'
      backgroundColor='#212121'
      width='100vw'
      height='55px'
      paddingY='5px'
      paddingX='15px'
      {...props}
    >
      <Image src={icon} size='45px'></Image>
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
