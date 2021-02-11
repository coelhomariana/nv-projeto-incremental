import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'components/Button'
import Navbar from 'components/Navbar'
import Card from 'components/Card'
import Row from 'components/Row'

import avatar from 'assets/images/avatar.svg'

const Dashboard = () => (
  <>
    <Navbar icon={avatar} title='Dashboard' />
    <Row>
      <Card />
      <Card />
      <Card />
      <Card />
    </Row>

    <Link to='/home'>
      <Button>Ir para Home</Button>
    </Link>
  </>
)

export default Dashboard
