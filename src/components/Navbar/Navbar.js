import React from 'react'

import Row from 'components/Row'

const Navbar = props => {
  const { children } = props
  return (
    <Row justifyContent='space-between' backgroundColor='white' width='600px' height='60px' padding='10px' {...props}>
      {children}
    </Row>
  )
}

export default Navbar
