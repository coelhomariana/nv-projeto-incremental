import React from 'react'

import Row from 'components/Row'
import Navbar from 'components/Navbar'
import Text from 'components/Text'
import Image from 'components/Image'

import avatar from 'assets/images/avatar.svg'

const Login = () => {
  return (
    <Row justifyContent='center'>
      <Navbar>
        <Image src={avatar} alt='Avatar' width='40px' height='40px'></Image>
        <Text padding='5px'>Título</Text>
      </Navbar>
    </Row>
  )
}

export default Login
