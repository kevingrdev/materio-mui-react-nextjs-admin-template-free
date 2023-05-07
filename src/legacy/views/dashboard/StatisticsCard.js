import useSalesData from 'src/legacy/@core/hooks/useSalesData'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import CellphoneLink from 'mdi-material-ui/CellphoneLink'
import AccountOutline from 'mdi-material-ui/AccountOutline'

function getIcon(icon) {
  switch (icon) {
    case 'TrendingUp':
      return <TrendingUp sx={{ fontSize: '1.75rem' }} />
    case 'CurrencyUsd':
      return <CurrencyUsd sx={{ fontSize: '1.75rem' }} />
    case 'DotsVertical':
      return <DotsVertical sx={{ fontSize: '1.75rem' }} />
    case 'CellphoneLink':
      return <CellphoneLink sx={{ fontSize: '1.75rem' }} />
    case 'AccountOutline':
      return <AccountOutline sx={{ fontSize: '1.75rem' }} />
    default:
      return null
  }
}

const renderStats = salesData => {
  return salesData.map(
    (item, index) =>
      item.stats !== 'No registrados' && (
        <Grid item xs={12} sm={3} key={index}>
          <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              variant='rounded'
              sx={{
                mr: 3,
                width: 44,
                height: 44,
                boxShadow: 3,
                color: 'common.white',
                backgroundColor: `${item.color}.main`
              }}
            >
              {getIcon(item.icon)}
            </Avatar>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='caption'>{item.title}</Typography>
              <Typography variant='h6'>{item.stats}</Typography>
            </Box>
          </Box>
        </Grid>
      )
  )
}

const StatisticsCard = () => {
  const { salesData, isLoading, error } = useSalesData()

  return (
    <Card>
      <CardHeader
        title='Estadísticas de la App'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
        subheader={
          <Typography variant='body2'>
            <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
              4.5% de crecimiento
            </Box>{' '}
            😎 este mes
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats(salesData)} {/* Este es un placeholder para la función que renderiza las estadísticas */}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default StatisticsCard
