import React from 'react'

import Row from 'components/Row'
import Image from 'components/Image'
import Text from 'components/Text'

const Navbar = props => {
  const { title, icon } = props
  return (
    <Row justifyContent='space-between' backgroundColor='white' width='600px' height='55px' padding='5px' {...props}>
      <Image src={icon} size='45px'></Image>
      <Text margin='10px'>{title}</Text>
    </Row>
  )
}

export default Navbar
