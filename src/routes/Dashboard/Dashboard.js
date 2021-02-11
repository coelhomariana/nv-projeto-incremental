import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'components/Button'
import Navbar from 'components/Navbar'
import DashboardCard from 'components/DashboardCard'
import Row from 'components/Row'
import Column from 'components/Column'

import avatar from 'assets/images/avatar.svg'

const Dashboard = () => (
  <Column>
    <Navbar icon={avatar} title='Dashboard' />
    <Row width={1} flexWrap='wrap' padding='10px' justifyContent='center'>
      <DashboardCard
        title='Texto Um'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In id nibh nec velit consectetur porttitor posuere sed neque.
        Vivamus quis pellentesque ex. '
      ></DashboardCard>
      <DashboardCard
        title='Texto Dois'
        content='Pellentesque non efficitur dolor, quis mattis ex.
        Pellentesque rutrum justo in efficitur blandit.
        Pellentesque efficitur eros sed tempor laoreet. Donec luctus est turpis, et elementum n'
      ></DashboardCard>
      <DashboardCard
        title='Texto Três'
        content='Fusce nec libero dapibus lectus facilisis vestibulum.
      Proin sed eleifend mi, sed efficitur eros. Nunc non arcu odio.
       Aenean ac accumsan erat, et dictum dolor. '
      />
      <DashboardCard
        title='Texto Quatro'
        content=' Mauris egestas metus est, ac varius nibh viverra ac.
        Nam eget ultrices sem, id aliquet nunc.
        In eleifend enim eget orci luctus imperdiet.'
      />
    </Row>
  </Column>
)

export default Dashboard
