import React, { useMemo } from 'react'
import { useQuery } from 'react-query'

import Navbar from 'components/Navbar'
import DashboardCard from 'components/DashboardCard'
import Row from 'components/Row'
import Column from 'components/Column'
import Loader from 'components/Loader'

import avatar from 'assets/images/avatar.svg'

import { DASHBOARD_DATA } from 'helpers/constants'
import { getAllCards } from 'services/dashboardCards'

const Dashboard = () => {
  const { isLoading, data } = useQuery('getDashboardCards', getAllCards)
  const formattedData = useMemo(() => {
    if (!data) return

    return data.data
  }, [data])

  return (
    <Column>
      <Navbar icon={avatar} title='Dashboard' color='white' />
      {/* SE CARREGANDO = MOSTRAR LOADER : TRABALHAR COM OS DADOS */}
      <Row width='100%' flexWrap='wrap' padding='10px' justifyContent='center'>
        {DASHBOARD_DATA.map(post => (
          <DashboardCard title={post.title} content={post.content} key={post.title} />
        ))}
      </Row>
    </Column>
  )
}

export default Dashboard
