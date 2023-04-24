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
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'

const Dashboard = () => {
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
                stats='45,000'
                icon={<CommuteOutlined />}
                color='success'
                trendNumber='+10%'
                title='Total Viajes Realizados'
                subtitle='Semanalmente'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='300'
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
                stats='22'
                trend='positive'
                trendNumber='+8%'
                title='Nuevos Conductores'
                subtitle='Este mes'
                icon={<DriveEtaOutlined />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='5'
                color='warning'
                trend='negative'
                trendNumber='+20%'
                subtitle='Última Semana'
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
