import { Avatar, Grid, Paper, Typography } from '@mui/material'
import useCities from 'src/legacy/@core/hooks/useCities'

function UserInformation({ user }) {
  const { cities } = useCities()

  const findCityNameById = (cityId, cities) => {
    const city = cities.find(city => city.id === cityId)

    return city ? city.name : 'Ciudad no encontrada'
  }

  return (
    <Paper>
      <Grid sx={{ padding: '28px 16px' }} container spacing={4}>
        <Grid item xs={12} md={3}>
          <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              alt={`${user.first_name} ${user.last_name}`}
              src={user.profile_picture}
              sx={{ width: 120, height: 120 }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant='h4' sx={{ mb: 1 }}>
            {user.first_name} {user.last_name}
          </Typography>
          <Typography variant='subtitle1' sx={{ mb: 1 }}>
            {user.email}
          </Typography>
          <Typography variant='subtitle1' sx={{ mb: 1 }}>
            {user.phone}
          </Typography>
          <Typography variant='subtitle1' sx={{ mb: 1 }}>
            {user.city_id ? `Ciudad: ${findCityNameById(user.city_id, cities)}` : 'Ciudad: N/A'}
          </Typography>
          {/* <Typography variant='subtitle1' sx={{ mb: 1 }}>
            {user.date_of_birth ? `Fecha de nacimiento: ${user.date_of_birth}` : 'Fecha de nacimiento: N/A'}
          </Typography> */}
          {/* <Typography variant='subtitle1' sx={{ mb: 1 }}>
            {user.license_expiration_date
              ? `Fecha de expiración de la licencia: ${user.license_expiration_date}`
              : 'Fecha de expiración de la licencia: N/A'}
          </Typography> */}
          <Typography variant='subtitle1' sx={{ mb: 1 }}>
            {user.status ? `Estatus: ${user.status}` : 'Estatus: N/A'}
          </Typography>
          <Typography variant='subtitle1' sx={{ mb: 1 }}>
            {user.banned_reason ? `Razón de suspensión: ${user.banned_reason}` : 'Razón de suspensión: N/A'}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default UserInformation
