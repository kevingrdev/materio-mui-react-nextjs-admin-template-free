// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import CommuteOutlined from 'mdi-material-ui/ChartTimelineVariant'

import ReportProblemOutlined from 'mdi-material-ui/CommentAlert'
import DriveEtaOutlined from 'mdi-material-ui/Car'
import CancelOutlined from 'mdi-material-ui/Cancel'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'

// import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'

// import SalesByCountries from 'src/views/dashboard/SalesByCountries'

import dynamic from 'next/dynamic'
import useSalesData from 'src/@core/hooks/useSalesData'

const SalesByCountries = dynamic(() => import('src/views/dashboard/SalesByCountries'), { ssr: false })
const StatisticsCard = dynamic(() => import('src/views/dashboard/StatisticsCard'), { ssr: false })

const Dashboard = () => {
  const { salesData } = useSalesData()

  const trips = Number(salesData[0]?.stats) ?? 0
  const drivers = Number(salesData[2]?.stats) ?? 0

  const tripsWeek = Math.floor(trips / 4)
  const userComplaint = Math.floor((trips / 100) * 1.4)
  const tripsCancel = Math.floor((trips / 100) * 1.4)
  const newDrivers = Math.floor((drivers / 100) * 4.4)

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={tripsWeek}
                icon={<CommuteOutlined />}
                color='success'
                trendNumber='+3%'
                title='Total Viajes Realizados'
                subtitle='Semanalmente'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={userComplaint}
                title='Quejas  de los usuarios'
                trend='negative'
                color='secondary'
                trendNumber='-5%'
                subtitle='Mes anterior'
                icon={<ReportProblemOutlined />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={newDrivers}
                trend='positive'
                trendNumber='+1.4%'
                title='Nuevos Conductores'
                subtitle='Mes anterior'
                icon={<DriveEtaOutlined />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={tripsCancel}
                color='warning'
                trend='negative'
                trendNumber='+4.4%'
                subtitle='Mes anterior'
                title='Cancelaciones por el usuario'
                icon={<CancelOutlined />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
