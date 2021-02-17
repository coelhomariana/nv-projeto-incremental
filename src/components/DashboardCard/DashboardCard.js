import React from 'react'

import Card from 'components/Card'
import Text from 'components/Text'

const DashboardCard = ({ children, title, content, ...props }) => {
  return (
    <Card>
      <Text variant='big' margin='5px 5px 30px 5px' color='#6500ca'>
        {title}
      </Text>
      <Text variant='regular'>{content}</Text>
    </Card>
  )
}

export default DashboardCard
