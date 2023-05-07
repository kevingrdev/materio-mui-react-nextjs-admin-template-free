// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Configs
import themeConfig from 'src/legacy/configs/themeConfig'

// ** Styled Components
const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = props => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props

  // ** Hooks
  const theme = useTheme()

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: 6 }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href='/' passHref>
          <StyledLink>
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
          </StyledLink>
        </Link>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
