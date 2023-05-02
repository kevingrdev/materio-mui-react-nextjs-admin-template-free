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
import TableContainer from '@mui/material/TableContainer'
import { TablePagination } from '@mui/material'

const rows = [
  {
    nombre: 'Juan Pérez',
    correo: 'juan.perez@gmail.com',
    fecha_ingreso: '09/27/2018',
    salario: '$19586.23',
    edad: 27,
    estado: 'activo',
    calificación: 4.9,
    vehículo: 'Toyota Corolla'
  },
  {
    nombre: 'María García',
    correo: 'maria.garcia@hotmail.com',
    fecha_ingreso: '09/23/2016',
    salario: '$23896.35',
    edad: 61,
    estado: 'inactivo',
    calificación: 4.7,
    vehículo: 'Honda Civic'
  },
  {
    nombre: 'Pedro Ramírez',
    correo: 'pedro.ramirez@yahoo.com',
    fecha_ingreso: '10/15/2017',
    salario: '$18991.67',
    edad: 59,
    estado: 'rechazado',
    calificación: null,
    vehículo: 'N/A'
  },
  {
    nombre: 'Ana González',
    correo: 'ana.gonzalez@gmail.com',
    fecha_ingreso: '06/12/2018',
    salario: '$19252.12',
    edad: 30,
    estado: 'inactivo',
    calificación: 4.8,
    vehículo: 'Hyundai Elantra'
  },
  {
    nombre: 'Jorge Hernández',
    correo: 'jorge.hernandez@yahoo.com',
    fecha_ingreso: '03/24/2018',
    salario: '$13076.28',
    edad: 66,
    estado: 'rechazado',
    calificación: null,
    vehículo: 'N/A'
  },
  {
    nombre: 'Sofía Díaz',
    correo: 'sofia.diaz@gmail.com',
    fecha_ingreso: '08/25/2017',
    salario: '$10909.52',
    edad: 33,
    estado: 'activo',
    calificación: 4.6,
    vehículo: 'Kia Optima'
  },
  {
    nombre: 'Luis Torres',
    correo: 'luis.torres@hotmail.com',
    fecha_ingreso: '06/01/2017',
    salario: '$17803.80',
    edad: 61,
    estado: 'activo',
    calificación: 4.9,
    vehículo: 'Toyota Camry'
  },
  {
    nombre: 'Carolina Méndez',
    correo: 'carolina.mendez@yahoo.com',
    fecha_ingreso: '12/03/2017',
    salario: '$12336.17',
    edad: 22,
    estado: 'inactivo',
    calificación: 4.5,
    vehículo: 'Chevrolet Spark'
  }
]

const statusObj = {
  activo: { color: 'success' },
  inactivo: { color: 'warning' },
  rechazado: { color: 'error' }
}

const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='tabla de conductores'>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Correo</TableCell>
              <TableCell>Fecha de ingreso</TableCell>
              <TableCell>Salario</TableCell>
              <TableCell>Edad</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Calificación</TableCell>
              <TableCell>Vehículo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.nombre} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.nombre}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.correo}</TableCell>
                <TableCell>{row.fecha_ingreso}</TableCell>
                <TableCell>{row.salario}</TableCell>
                <TableCell>{row.edad}</TableCell>
                <TableCell>
                  <Chip
                    label={row.estado}
                    color={statusObj[row.estado].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
                <TableCell>{row.calificación}</TableCell>
                <TableCell>{row.vehículo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={10}
        rowsPerPage={12}
        page={1}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
      />
    </Card>
  )
}

export default DashboardTable
