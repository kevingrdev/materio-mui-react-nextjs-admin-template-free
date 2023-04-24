// ** React Imports
import { useState } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'
import login from 'src/@core/domain/usecases/login'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const translations = {
  welcome: '¡Bienvenido a {templateName}! 👋🏻',
  signIn: 'Por favor, inicie sesión en su cuenta y comience la aventura.',
  email: 'Correo electrónico',
  password: 'Contraseña',
  rememberMe: 'Recuérdame',
  forgotPassword: '¿Olvidó su contraseña?',
  loginButton: 'Iniciar sesión',
  newToPlatform: '¿Es nuevo en nuestra plataforma?',
  createAccount: 'Crear una cuenta',
  divider: 'o'
}

const LoginPage = () => {
  // ** State
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false
  })

  // ** Hook

  const router = useRouter()

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const [err, res] = await login({
      user: values.email,
      pass: values.password
    })
    console.log({ err, res })
    if (err === null) {
      router.push('/')
    }
  }

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}></Box>
          <Box sx={{ mb: 6 }}>
            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
              {translations.welcome.replace('{templateName}', themeConfig.templateName)}
            </Typography>
            <Typography variant='body2'>{translations.signIn}</Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField
              autoFocus
              fullWidth
              id='email'
              value={values.email}
              onChange={handleChange('email')}
              label={translations.email}
              sx={{ marginBottom: 4 }}
            />
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-login-password'>{translations.password}</InputLabel>
              <OutlinedInput
                label={translations.password}
                value={values.password}
                id='auth-login-password'
                onChange={handleChange('password')}
                type={values.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button
              fullWidth
              size='large'
              variant='contained'
              type='submit'
              sx={{ marginBottom: 7, marginTop: 12 }}
              // onClick={() => router.push('/')}
            >
              {translations.loginButton}
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2'></Typography>
            </Box>
            <Divider sx={{ my: 5 }} />
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default LoginPage
