import React from 'react'

import Column from 'components/Column'

const Card = ({ children, ...props }) => {
  return (
    <Column
      backgroundColor='white'
      p={20}
      border='none'
      borderRadius='0px 0px 6px 6px'
      width='350px'
      height='300px'
      justifyContent='space-between'
      margin='10px'
      boxShadow='3px 3px 3px rgba(255,255,255,.50)'
      {...props}
    >
      {children}
    </Column>
  )
}

export default Card
