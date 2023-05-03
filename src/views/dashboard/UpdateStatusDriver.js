// import { makeStyles } from '@mui/styles'
import { Button, FormControl, InputAdornment, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useState } from 'react'
import updateDriverStatus from 'src/@core/domain/usecases/updateStatusDriver'

const MyForm = ({ currentStatus, id, reload }) => {
  const [status, setStatus] = useState(currentStatus)
  const [reason, setReason] = useState('')

  const handleStatusChange = event => {
    setStatus(event.target.value)
  }

  const handleReasonChange = event => {
    setReason(event.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    setStatus('')
    setReason('')
    await updateDriverStatus(id, status, reason)

    await reload()
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid display='flex' flexDirection='column' gap={4}>
        <Typography variant='h6' mb={4}>
          Cambiar Estatus
        </Typography>

        <FormControl variant='outlined' size='small' required fullWidth>
          <InputAdornment>Estatus</InputAdornment>
          <Select label='Estado' value={status} onChange={handleStatusChange} inputProps={{ 'aria-label': 'Estado' }}>
            <MenuItem value='ACCEPT'>Aceptado</MenuItem>
            <MenuItem value='RETENTION'>Retención</MenuItem>
            <MenuItem value='BANNED'>Bloqueado por infracción</MenuItem>
            <MenuItem value='BLOCKED'>Bloqueado</MenuItem>
          </Select>
        </FormControl>

        <TextField
          variant='outlined'
          size='small'
          required
          fullWidth
          multiline
          rows={5}
          label='Motivo'
          value={reason}
          onChange={handleReasonChange}
        />
        <Button fullWidth type='submit' variant='contained' color='primary'>
          Actualizar
        </Button>
      </Grid>
    </form>
  )
}

export default MyForm
