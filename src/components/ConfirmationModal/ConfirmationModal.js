import React from 'react'

import Modal from 'components/Modal'
import Text from 'components/Text'
import Row from 'components/Row'
import Button from 'components/Button'

const ConfirmationModal = ({ isModalOpen, onClose, ...props }) => (
  <Modal alignItems='center' justifyContent='space-around' isModalOpen={isModalOpen} onClose={onClose} {...props}>
    <Text variant='big'>Aviso!</Text>
    <Row alignItems='center' justifyContent='center'>
      <Text variant='medium'>Tem certeza que deseja fazer isso?</Text>
    </Row>
    <Row>
      <Button margin='10px' onClick={onClose}>
        Sim
      </Button>
      <Button margin='10px' onClick={onClose}>
        Cancelar
      </Button>
    </Row>
  </Modal>
)

export default ConfirmationModal
