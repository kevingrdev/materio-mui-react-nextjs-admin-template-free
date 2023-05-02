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
import { LinearProgress, TablePagination } from '@mui/material'
import useGetUsers from 'src/@core/hooks/useGetUsers'

const statusObj = {
  ACTIVE: { color: 'success' },
  BLOCKED: { color: 'warning' },
  BLOCKED_BY_PAYMENT: { color: 'error' }
}

const DashboardTable = () => {
  const { users, page, loading, nextPage, prevPage } = useGetUsers()

  console.log({ users })

  return (
    <Card>
      {loading && <LinearProgress />}
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='tabla de conductores'>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Correo</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(users?.data?.riders ?? []).map(row => (
              <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.first_name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>

                <TableCell>{row.phone}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color ?? ''}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component='div'
        count={521}
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
