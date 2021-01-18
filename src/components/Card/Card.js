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

{
  /* <Text variant='tiny'>(inserir imagem)</Text>
        <Text variant='big'>Título</Text>
        <Text variant='regular' marginTop='10px' color='gray'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud.
        </Text>
        <Row>
          <Button>Botão</Button>
        </Row> */
}
