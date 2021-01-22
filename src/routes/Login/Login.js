import React from 'react'

import Row from 'components/Row'
import Navbar from 'components/Navbar'

import avatar from 'assets/images/avatar.svg'

const Login = () => {
  return (
    <Row justifyContent='center'>
      <Navbar title='Título' icon={avatar} />
    </Row>
  )
}

export default Login
