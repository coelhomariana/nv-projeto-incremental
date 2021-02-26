import React from 'react'

import Navbar from 'components/Navbar'
import DashboardCard from 'components/DashboardCard'
import Row from 'components/Row'
import Column from 'components/Column'

import avatar from 'assets/images/avatar.svg'

import { DASHBOARD_DATA } from 'helpers/constants'

const Dashboard = () => (
  <Column>
    <Navbar icon={avatar} title='Dashboard' color='white' />
    <Row width='100%' flexWrap='wrap' padding='10px' justifyContent='center'>
      {DASHBOARD_DATA.map(post => (
        <DashboardCard title={post.title} content={post.content} key={post.title} />
      ))}
    </Row>
  </Column>
)

export default Dashboard
