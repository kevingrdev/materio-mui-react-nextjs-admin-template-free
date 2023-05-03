// ** MUI Imports
import { useRouter } from 'next/router'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// import Typography from '@mui/material/Typography'
import { Avatar, LinearProgress, Paper } from '@mui/material'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

import useUser from 'src/@core/hooks/useUser'
import UserInformation from 'src/views/dashboard/UserInformation'
import UserRidesTable from 'src/views/dashboard/UserRidesTable'

const User = () => {
  const router = useRouter()
  const { id } = router.query

  console.log('-')

  console.log({ id })

  const { loading, user } = useUser(id)

  console.log({ user })

  if (!user || loading) {
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
      <Grid container justifyContent='space-between' padding={2} spacing={6}>
        <Grid item xs={12} md={8} marginTop={5}>
          <UserInformation user={user} />
        </Grid>
        <Grid item xs={12} md={12} marginTop={5}>
          <UserRidesTable id={id} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default User
