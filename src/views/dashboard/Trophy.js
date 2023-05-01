// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})

const Trophy = () => {
  // ** Hook
  const theme = useTheme()
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>¡Bienvenido, Administrador! 🚗👨‍✈️</Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          Nuevo mes, nuevos retos
        </Typography>
        <Typography variant='h6' sx={{ my: 4, color: 'primary.main' }}>
          Revisa las estadísticas de la plataforma
        </Typography>
        {/* <Button size='small' variant='contained'>
          Ver Estadísticas
        </Button> */}
        <TriangleImg alt='fondo con triángulos' src={`/images/misc/${imageSrc}`} />
      </CardContent>
    </Card>
  )
}

export default Trophy
