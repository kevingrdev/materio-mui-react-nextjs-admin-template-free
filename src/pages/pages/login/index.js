// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
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
import Google from 'mdi-material-ui/Google'
import Github from 'mdi-material-ui/Github'
import Twitter from 'mdi-material-ui/Twitter'
import Facebook from 'mdi-material-ui/Facebook'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const LoginPage = () => {
  // ** State
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  // ** Hook
  const theme = useTheme()
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

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg
              width='160'
              height='62'
              viewBox='0 0 272 62'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              // style={{
              //   ...style
              // }}
            >
              <path
                d='M68.1342 9.34788C79.2821 9.34788 88.3207 18.3848 88.3207 29.5344H79.0722C79.0722 23.4935 74.1751 18.5964 68.1342 18.5964C62.0933 18.5964 57.1962 23.4935 57.1962 29.5344V44.2589C57.1962 49.3658 53.0564 53.5074 47.9477 53.5074V29.5344C47.9495 18.3848 56.9863 9.34788 68.1342 9.34788ZM249.395 18.6646C242.339 18.6646 236.598 24.4047 236.598 31.4617C236.598 38.517 242.338 44.2589 249.395 44.2589C256.45 44.2589 262.192 38.5188 262.192 31.4617C262.19 24.4047 256.45 18.6646 249.395 18.6646ZM249.395 9.41609C261.569 9.41609 271.439 19.2855 271.439 31.46C271.439 43.6345 261.569 53.5039 249.395 53.5039C237.22 53.5039 227.351 43.6345 227.351 31.46C227.349 19.2872 237.22 9.41609 249.395 9.41609ZM115.057 18.6646C108.002 18.6646 102.26 24.4047 102.26 31.4617C102.26 38.517 108 44.2589 115.057 44.2589C122.114 44.2589 127.854 38.5188 127.854 31.4617C127.854 24.4047 122.112 18.6646 115.057 18.6646ZM115.057 9.41609C127.232 9.41609 137.101 19.2855 137.101 31.46C137.101 43.6345 127.232 53.5039 115.057 53.5039C102.883 53.5039 93.0132 43.6345 93.0132 31.46C93.0132 19.2872 102.883 9.41609 115.057 9.41609ZM182.121 29.2878C181.988 18.2536 173.007 9.34788 161.941 9.34788C150.794 9.34788 141.755 18.3848 141.755 29.5344V53.5056H151.003V29.5344C151.003 23.4935 155.901 18.5964 161.941 18.5964C167.982 18.5964 172.879 23.4935 172.879 29.5344V29.6201V53.5109H182.128V29.6201V29.5344V29.2878H182.121V29.2878ZM213.429 35.5665C213.429 40.3657 209.538 44.2571 204.738 44.2571C199.939 44.2571 196.048 40.3657 196.048 35.5665V18.7433H213.611V9.49654H196.048C196.048 4.38958 191.908 0.248047 186.799 0.248047V11.3225V20.571V35.5683C186.799 45.4761 194.831 53.5074 204.738 53.5074C214.646 53.5074 222.678 45.4761 222.678 35.5683L213.429 35.5665ZM43.2763 31.0542C43.2763 42.6533 34.1484 52.1204 22.6858 52.6661L9.25549 52.6766C9.25549 57.6891 5.19266 61.752 0.180143 61.752H0V52.6766C0 52.6679 0 52.6609 0 52.6521V31.3271C0 19.3957 9.54232 9.50704 21.4737 9.41784C33.4996 9.32864 43.2763 19.0494 43.2763 31.0542ZM34.0295 30.9773C34.0295 24.1336 28.4818 18.5859 21.6381 18.5859C14.7944 18.5859 9.24675 24.1336 9.24675 30.9773V43.3686H21.9564L21.9494 43.3616C28.6497 43.1937 34.0295 37.716 34.0295 30.9773Z'
                fill='#9063FE'
              />
            </svg>
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
              Welcome to {themeConfig.templateName}! 👋🏻
            </Typography>
            <Typography variant='body2'>Please sign-in to your account and start the adventure</Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <TextField autoFocus fullWidth id='email' label='Email' sx={{ marginBottom: 4 }} />
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-login-password'>Password</InputLabel>
              <OutlinedInput
                label='Password'
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
            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
              <FormControlLabel control={<Checkbox />} label='Remember Me' />
              <Link passHref href='/'>
                <LinkStyled onClick={e => e.preventDefault()}>Forgot Password?</LinkStyled>
              </Link>
            </Box>
            <Button
              fullWidth
              size='large'
              variant='contained'
              sx={{ marginBottom: 7 }}
              onClick={() => router.push('/')}
            >
              Login
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{ marginRight: 2 }}>
                New on our platform?
              </Typography>
              <Typography variant='body2'>
                <Link passHref href='/pages/register'>
                  <LinkStyled>Create an account</LinkStyled>
                </Link>
              </Typography>
            </Box>
            <Divider sx={{ my: 5 }}></Divider>
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default LoginPage
