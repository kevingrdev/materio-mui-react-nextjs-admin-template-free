// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Icons Imports
import MenuUp from 'mdi-material-ui/MenuUp'

const TotalEarning = ({ trips }) => {
  const data = [
    {
      progress: 49,
      imgHeight: 20,
      title: 'Viajes en Auto',
      color: 'primary',
      amount: Math.floor((trips / 100) * 49),
      subtitle: 'Estadísticas de rendimiento',
      imgSrc: '/images/cards/logo-zipcar.png'
    },
    {
      progress: 20,
      color: 'info',
      imgHeight: 27,
      title: 'Viajes en Pickup',
      amount: Math.floor((trips / 100) * 20),
      subtitle: 'Estadísticas de rendimiento',
      imgSrc: '/images/cards/logo-bitbank.png'
    },
    {
      progress: 30,
      imgHeight: 20,
      title: 'Viajes en Moto',
      color: 'secondary',
      amount: Math.floor((trips / 100) * 30),
      subtitle: 'Estadísticas de rendimiento',
      imgSrc: '/images/cards/logo-aviato.png'
    }
  ]

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ pt: theme => `${theme.spacing(6.25)} !important` }}>
        <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h4' sx={{ fontWeight: 600, fontSize: '2.125rem !important' }}>
            {trips}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
            <MenuUp sx={{ fontSize: '1.875rem', verticalAlign: 'middle' }} />
            <Typography variant='body2' sx={{ fontWeight: 600, color: 'success.main' }}>
              5%
            </Typography>
          </Box>
        </Box>

        <Typography component='p' variant='caption' sx={{ mb: 15 }}>
          En comparación con los {Math.floor((trips / 100) * 95)} viajes realizados el mes pasado
        </Typography>
        {data.map((item, index) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                ...(index !== data.length - 1 ? { mb: 8.5 } : {})
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                  <Typography variant='caption'>{item.subtitle}</Typography>
                </Box>

                <Box sx={{ minWidth: 85, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
                    {item.amount}
                  </Typography>
                  <LinearProgress color={item.color} value={item.progress} variant='determinate' />
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default TotalEarning
