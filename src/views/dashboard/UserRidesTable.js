import React from 'react'
import useUserRides from 'src/@core/hooks/useUserRides'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination
} from '@mui/material'
import useCities from 'src/@core/hooks/useCities'

export default function UserRidesTable({ id }) {
  const { rides, pagination, page, handlePageChange } = useUserRides(id)

  console.log({ rides })
  const { cities } = useCities()

  const findCityNameById = (cityId, cities) => {
    const city = cities.find(city => city.id === cityId)

    return city ? city.name : 'Ciudad no encontrada'
  }

  const totalRides = pagination?.total_items ?? 0

  return (
    <>
      <Typography variant='h4' component='h2' gutterBottom>
        Viajes del usuario
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label='tabla de viajes'>
          <TableHead>
            <TableRow>
              <TableCell>Conductor</TableCell>
              {/* <TableCell>ID del viaje</TableCell> */}
              <TableCell>Ciudad</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Origen</TableCell>
              <TableCell>Destino</TableCell>
              <TableCell>Pago</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rides.map(ride => (
              <TableRow key={ride.id}>
                <TableCell component='th' scope='row'>
                  {ride?.driver?.name ?? ''}
                </TableCell>
                {/* <TableCell>{ride.id}</TableCell> */}
                <TableCell>{findCityNameById(ride.city_id, cities)}</TableCell>
                <TableCell component='th' scope='row'>
                  {new Date(ride.created_at).toLocaleString()}
                </TableCell>
                <TableCell>{ride.pickup.address}</TableCell>
                <TableCell>{ride?.drops?.[0]?.address ?? 'Dirección no encontrada'}</TableCell>
                <TableCell>{ride?.estimate?.total || 'No encontrado'}</TableCell>
                <TableCell>{ride.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10]}
          component='div'
          count={totalRides}
          rowsPerPage={10}
          page={page - 1}
          onPageChange={handlePageChange}
          onRowsPerPageChange={() => {}}
        />
      </TableContainer>
    </>
  )
}
