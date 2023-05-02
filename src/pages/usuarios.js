// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import TableUser from 'src/views/dashboard/TableUser'

// import SalesByCountries from 'src/views/dashboard/SalesByCountries'

import useSalesData from 'src/@core/hooks/useSalesData'

const Usuarios = () => {
  const { salesData } = useSalesData()

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TableUser />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Usuarios
