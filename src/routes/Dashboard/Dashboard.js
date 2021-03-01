import React, { useMemo } from 'react'
import { useQuery } from 'react-query'

import Navbar from 'components/Navbar'
import DashboardCard from 'components/DashboardCard'
import Row from 'components/Row'
import Column from 'components/Column'
import Loader from 'components/Loader'

import avatar from 'assets/images/avatar.svg'
import { getAllCards } from 'services/dashboardCards'

const Dashboard = () => {
  const { isLoading, data } = useQuery('getDashboardCards', getAllCards)

  return (
    <Column>
      <Navbar icon={avatar} title='Dashboard' color='white' />

      <Row width='100%' flexWrap='wrap' padding='10px' justifyContent='center'>
        {isLoading ? <Loader /> : data.map(post => <DashboardCard title={post.title} content={post.content} />)}
      </Row>
    </Column>
  )
}

export default Dashboard
