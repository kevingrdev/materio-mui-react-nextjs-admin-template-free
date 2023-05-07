// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/legacy/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import TableDrivers from 'src/legacy/views/dashboard/TableDrivers'

// import SalesByCountries from 'src/views/dashboard/SalesByCountries'

const Usuarios = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TableDrivers />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Usuarios
