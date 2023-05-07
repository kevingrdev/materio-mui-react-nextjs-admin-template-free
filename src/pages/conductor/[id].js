// ** MUI Imports
import Grid from '@mui/material/Grid'

import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'

import useDriver from 'src/legacy/@core/hooks/useDriverDetail'

// ** Icons Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/legacy/@core/styles/libs/react-apexcharts'
import { Avatar, LinearProgress, Paper } from '@mui/material'
import UpdateStatusDriver from 'src/legacy/views/dashboard/UpdateStatusDriver'

import DriverRidesTable from 'src/legacy/views/dashboard/DriverRidesTable'

// // ** Demo Components Imports
// import TableDrivers from 'src/views/dashboard/TableDrivers'

// import SalesByCountries from 'src/views/dashboard/SalesByCountries'

// ---page
const Driver = () => {
  const router = useRouter()
  const { id } = router.query

  const { driver, loading, reload } = useDriver(id)

  if (!driver || loading) {
    return (
      <ApexChartWrapper>
        <Grid container justifyContent='space-between' padding={2} spacing={6}>
          <Grid item xs={12} md={12} marginTop={5}>
            <LinearProgress />
          </Grid>
        </Grid>
      </ApexChartWrapper>
    )
  }

  return (
    <ApexChartWrapper>
      <Grid container justifyContent='space-between' padding={2} spacing={12}>
        <Grid item sx={{ padding: '28px 16px' }} xs={12} md={8} marginTop={5}>
          <Paper>
            <Grid sx={{ padding: '28px 16px' }} container spacing={4}>
              <Grid item xs={12} md={3}>
                <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Avatar
                    alt={`${driver.first_name} ${driver.last_name}`}
                    src={driver.profile_picture}
                    sx={{ width: 120, height: 120 }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography variant='h4' sx={{ mb: 1 }}>
                  {driver.first_name} {driver.last_name}
                </Typography>
                <Typography variant='subtitle1' sx={{ mb: 1 }}>
                  {driver.email}
                </Typography>
                <Typography variant='subtitle1' sx={{ mb: 1 }}>
                  {driver.phone}
                </Typography>
                <Typography variant='subtitle1' sx={{ mb: 1 }}>
                  Ciudad: {driver.city_id}
                </Typography>
                <Typography variant='subtitle1' sx={{ mb: 1 }}>
                  Fecha de nacimiento: {driver.date_of_birth}
                </Typography>
                <Typography variant='subtitle1' sx={{ mb: 1 }}>
                  Fecha de expiración de la licencia: {driver.license_expiration_date}
                </Typography>
                <Typography variant='subtitle1' sx={{ mb: 1 }}>
                  Estatus: {driver.status}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} paddingTop={0}>
          <UpdateStatusDriver currentStatus={driver.status} id={driver.id} reload={reload} />
        </Grid>

        <Grid item xs={12} md={12} marginTop={5}>
          <DriverRidesTable id={id} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Driver
