import React from 'react'
import { useState } from 'react'

import Row from 'components/Row'
import Modal from 'components/Modal'
import Button from 'components/Button'
import Column from 'components/Column'
import Navbar from 'components/Navbar'

import avatar from 'assets/images/avatar.svg'

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Column justifyContent='center'>
      <Navbar icon={avatar} />
      <Button mt='10px' onClick={() => setIsModalOpen(true)}>
        Abrir modal
      </Button>
      <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Row width='100%' height='100px' />
      </Modal>
    </Column>
  )
}

export default Login
