import React from 'react'

import Row from 'components/Row'
import Card from 'components/Card'
import Text from 'components/Text'

const Modal = () => {
  return (
    <Row
      justifyContent='center'
      alignItems='center'
      position='fixed'
      backgroundColor='rgba(0,0,0,.5)'
      height='100vh'
      width='100vw'
    >
      <Card width='600px'></Card>
    </Row>
  )
}

export default Modal
