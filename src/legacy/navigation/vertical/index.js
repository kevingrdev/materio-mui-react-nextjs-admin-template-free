// ** Icon imports
import Login from 'mdi-material-ui/Login'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import Car from 'mdi-material-ui/Car'
import Account from 'mdi-material-ui/Account'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'

const navigation = () => {
  return [
    {
      title: 'Inicio',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Usuarios',
      icon: Account,
      path: '/usuarios',
      openInNewTab: false
    },
    {
      title: 'Conductores',
      icon: Car,
      path: '/conductores',
      openInNewTab: false
    },
    {
      title: 'Configuraciones',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      title: 'Salir',
      icon: Login,
      path: '/pages/login',
      openInNewTab: false
    }

    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    // {
    //   sectionTitle: 'User Interface'
    // },
    // {
    //   title: 'Typography',
    //   icon: FormatLetterCase,
    //   path: '/typography'
    // },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation
