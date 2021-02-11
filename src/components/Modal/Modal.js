import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Row from 'components/Row'
import Card from 'components/Card'

const Modal = ({ children, isModalOpen, onClose, ...props }) => {
  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = 'auto'
      return
    }
    document.body.style.overflow = 'hidden'
  }, [isModalOpen])

  if (!isModalOpen) return null

  return (
    <Row
      justifyContent='center'
      alignItems='center'
      position='fixed'
      backgroundColor='rgba(0,0,0,.5)'
      height='100vh'
      width='100vw'
      top={0}
      left={0}
    >
      <Card width='600px' {...props}>
        {children}
      </Card>
    </Row>
  )
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  isModalOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default Modal
