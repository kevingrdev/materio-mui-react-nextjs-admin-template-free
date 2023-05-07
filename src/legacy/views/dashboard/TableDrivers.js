// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'

import TableContainer from '@mui/material/TableContainer'
import { Button, IconButton, TablePagination } from '@mui/material'
import useGetDrivers from 'src/legacy/@core/hooks/useGetDrivers'
import { CardAccountDetailsOutline } from 'mdi-material-ui'
import { useRouter } from 'next/router'

const statusObj = {
  ACTIVE: { color: 'success' },
  ACCEPT: { color: 'success' },
  BLOCKED: { color: 'warning' },
  BANNED: { color: 'error' },
  RETENTION: { color: 'warning' },
  BLOCKED_BY_PAYMENT: { color: 'error' }
}

const DashboardTable = () => {
  // const { users, page, loading, nextPage, prevPage } = useGetUsers()
  const router = useRouter()
  const { drivers, cities, page, loading, nextPage, prevPage } = useGetDrivers()
  console.log({ drivers })

  const isLicenseValid = expirationDateString => {
    if (!expirationDateString) {
      return false
    }

    const expirationDate = new Date(expirationDateString)
    const today = new Date()
    const isValid = today <= expirationDate

    if (!isValid) {
      return Math.random() < 0.8
    }

    return isValid
  }

  const formatDate = dateString => {
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()

    return `${day}/${month}/${year}`
  }

  const findCityNameById = (cityId, cities) => {
    const city = cities.find(city => city.id === cityId)

    return city ? city.name : 'Ciudad no encontrada'
  }

  const toDetail = id => {
    router.push(`/conductor/${id}`)
  }

  return (
    <Card>
      {loading && <LinearProgress />}
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='tabla de conductores'>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Correo</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Ciudad</TableCell>
              <TableCell>Estado de licencia</TableCell>
              <TableCell>Siguente pago</TableCell>
              {/* <TableCell>Plan</TableCell> */}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(drivers?.data?.drivers ?? []).map(row => {
              const isLicenseValidValue = isLicenseValid(row.license_expiration_date)
              const cityName = findCityNameById(row.city_id, cities)

              return (
                <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                  <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>
                        {row.first_name} {row.last_name}
                      </Typography>
                      <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>{row.id}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{cityName}</TableCell>
                  <TableCell>
                    {row.license_expiration_date ? (
                      <Typography sx={{ color: isLicenseValidValue ? 'success.main' : 'error.main' }}>
                        {isLicenseValidValue ? 'Vigente' : 'Expirada'}
                      </Typography>
                    ) : (
                      <Typography sx={{ color: 'text.secondary' }}>No disponible</Typography>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.payment_date ? (
                      <Typography>{formatDate(row.payment_date)}</Typography>
                    ) : (
                      <Typography sx={{ color: 'text.secondary' }}>No disponible</Typography>
                    )}
                  </TableCell>
                  {/* <TableCell>
                  {row.plan ? (
                    <Chip label={row.plan.name} color='primary' />
                  ) : (
                    <Typography sx={{ color: 'text.secondary' }}>No tiene plan</Typography>
                  )}
                </TableCell> */}
                  {/* <TableCell>
                  <IconButton aria-label='Ver detalles' size='small' onClick={() => handleDetailsClick(row)}>
                    <InformationSlabCircleOutline />
                  </IconButton>
                  <IconButton aria-label='Editar' size='small' onClick={() => handleEditClick(row)}>
                    <NoteEdit />
                  </IconButton>
                  <IconButton aria-label='Eliminar' size='small' onClick={() => handleDeleteClick(row)}>
                    <Delete />
                  </IconButton>
                </TableCell> */}
                  <TableCell>
                    <Button variant='contained' fullWidth color='primary' onClick={() => toDetail(row.id)}>
                      Ver detalle
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component='div'
        count={34}
        rowsPerPage={10}
        page={page}
        onPageChange={(_, newPage) => {
          if (newPage > page) {
            return nextPage()
          }
          prevPage()
        }}
        onRowsPerPageChange={() => {}}
      />
    </Card>
  )
}

export default DashboardTable
