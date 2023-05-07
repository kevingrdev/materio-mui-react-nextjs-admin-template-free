// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import { getFromLocalStorage } from 'src/legacy/@core/utils/localStorage'

const translations = {
  uploadNewPhoto: 'Subir nueva foto',
  company: 'Compañía',
  role: 'Rol',
  status: 'Estado',
  admin: 'Administrador',
  author: 'Autor',
  editor: 'Editor',
  maintainer: 'Mantenedor',
  subscriber: 'Suscriptor',
  active: 'Activo',
  inactive: 'Inactivo',
  pending: 'Pendiente',
  nameLabel: 'Nombre',

  emailLabel: 'Correo Electrónico'
}

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const TabAccount = () => {
  // ** State
  const [openAlert, setOpenAlert] = useState(true)
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

  const [userInfo, setUserInfo] = useState({
    roles: ['ADMIN'],
    email: '',
    id: '',
    active: false,
    name: ''
  })

  useEffect(() => {
    const res = getFromLocalStorage('userInfo')
    console.log({ res })
    setUserInfo({ ...res })
  }, [])

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <Box></Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth disabled label={translations.nameLabel} value={userInfo.name} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              disabled
              type='email'
              label={translations.emailLabel}
              placeholder={userInfo.email}
              value={userInfo.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth disabled>
              <InputLabel>{translations.role}</InputLabel>
              <Select label={translations.role} defaultValue='admin'>
                <MenuItem value='admin'>{translations.admin}</MenuItem>
                <MenuItem value='author'>{translations.author}</MenuItem>
                <MenuItem value='editor'>{translations.editor}</MenuItem>
                <MenuItem value='maintainer'>{translations.maintainer}</MenuItem>
                <MenuItem value='subscriber'>{translations.subscriber}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth disabled>
              <InputLabel>{translations.status}</InputLabel>
              <Select
                label={translations.status}
                value={userInfo.active && 'active'}
                defaultValue={userInfo.active && 'active'}
              >
                <MenuItem value='active'>{translations.active}</MenuItem>
                <MenuItem value='inactive'>{translations.inactive}</MenuItem>
                <MenuItem value='pending'>{translations.pending}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} pb={16}>
            <TextField fullWidth disabled label={translations.company} placeholder='Pronto' defaultValue='Pronto' />
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount
