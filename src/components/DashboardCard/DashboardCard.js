import React from 'react'

import Card from 'components/Card'
import Text from 'components/Text'

const DashboardCard = ({ title, content, ...props }) => (
  <Card width='300px' {...props}>
    <Text variant='big' marginX='5px' color='#6500ca'>
      {title}
    </Text>
    <Text variant='regular' marginTop='30px'>
      {content}
    </Text>
  </Card>
)

export default DashboardCard
