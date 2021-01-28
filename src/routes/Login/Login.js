import React from 'react'
import { useState } from 'react'

import Row from 'components/Row'
import Column from 'components/Column'
import Button from 'components/Button'
import ConfirmationModal from 'components/ConfirmationModal'


const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Column justifyContent='center'>
      <Button marginTop='10px' onClick={() => setIsModalOpen(true)}>
        Abrir modal
      </Button>
      <ConfirmationModal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Row width='100%' height='100px' />
      </ConfirmationModal>

    </Column>
  )
}

export default Login
