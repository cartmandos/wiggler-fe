/* 	Login Component (inside a modal):
Email address 
Password  */
import {useContext, useState} from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
//DIALOG
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import styled from '@emotion/styled'
import {Divider} from '@mui/material'
import GoogleIcon from '@assets/logos/google-icon.svg?react'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import FilledInput from '@mui/material/FilledInput'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {Logo} from '@components/Logo'
import {useNavigateModal} from '@pages/Sign/ModalProvider'

import {useAuth} from '@navigation/Auth/AuthProvider'

const SignInHeader = () => {
  const navigateModal = useNavigateModal()

  return (
    <Grid container spacing={2} sx={{mb: 5}}>
      <Grid item container spacing={5}>
        <Grid item xs={12}>
          <Logo height="32px" width="96px" />
        </Grid>
        <Grid item xs={12}>
          <Typography component="h1" variant="h4" fontWeight={600}>
            Sign in
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body1" color="formMain">
          New user?&nbsp;
          {/*   <Button variant="text" onClick={() => navigateModal('signup')} sx={{color:"#000"}}>
            Create an Account
          </Button> */}
          <Link
            onClick={() => navigateModal('signup')}
            variant="body2"
            color="textSecondary"
          >
            Create an Account
          </Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

function SignInForm({handleClose}) {
  const {signIn,isLoading} = useAuth()
  const [error, setError] = useState('');

  const inputLabelProps = {style: {fontSize: '0.75rem'}}

  const [showPassword, setShowPassword] = useState(false)
  /*   const [isError, setIsError] = useState("");
   */
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  /* 
  const handleValidate = (event) => {
    const { value } = event.target;
    setIsError(value === 'errorMsg');
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = new FormData(e.currentTarget)
      console.log('Login:', {
        email: data.get('email'),
        password: data.get('password'),
      })

      await signIn(data.get('email'), data.get('password'))
      handleClose()
    } catch (err) {
      console.error(err)
      setError(err?.message || 'Something went wrong. Please try again.');
    }
  }
  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mb: 2}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth variant="standard">
            <InputLabel
              sx={{fontSize: '0.75rem', color: '#747474'}}
              htmlFor="email"
            >
              Email address
            </InputLabel>
            <Input
              required
              name="email"
              id="email"
              type="email"
              autoComplete="email"  
              />
            <FormHelperText 
               id="email-error-text"
               >
              Please enter an email address.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth variant="standard">
            <InputLabel
              sx={{fontSize: '0.75rem', color: '#747474'}}
              htmlFor="password"
            >
              Password
            </InputLabel>
            <Input
              required
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText id="password-error-text">
              Please enter a password.
            </FormHelperText>
          </FormControl>
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            componentsProps={{ typography: { variant: 'body2' } }}
            control={<Checkbox value="rememberUser" color="primary" />}
            label="Remember me"
          />
        </Grid> */}

        {/* Login Error Message */}
        <Grid item xs={12}>
          {!isLoading && error ? (
               <Typography variant="body2" color="textSecondary">{error}</Typography>
              ) : null}
        </Grid>

        <Grid item align="end" xs={12} sx={{mt: 1}}>
          <Button
            align="end"
            type="submit"
            variant="contained"
            color="secondary"
            sx={{
              borderRadius: 20,
            }}
          >
            Sign In
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default function SignIn() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <SignInHeader />
        <SignInForm />
      </Box>
    </Container>
  )
}

const GoogleSignInButton = styled(Button)({
  textTransform: 'none',
  paddingTop: '1rem',
  paddingBottom: '1rem',
})
export function SocialButtons() {
  return (
    <GoogleSignInButton
      /*             type="submit"
       */
      startIcon={
        <GoogleIcon
          sx={{verticalAlign: 'middle', height: '18px', width: '18px'}}
        />
      }
      fullWidth
      size="large"
      variant="contained"
      color="primary"
      sx={{borderRadius: 20, mt: 3, mb: 2}}
    >
      Continue with Google
    </GoogleSignInButton>
  )
}

// REVIEW: Built-in Dialog component from MUI: https://mui.com/@components/dialogs/
// DialogTitle, DialogContent, DialogContentText, DialogActions
export function LoginModal({open, onClose}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box sx={{display: 'flex', flexDirection: 'column', px: 10, py: 6}}>
        <SignInHeader />
        <SignInForm handleClose={onClose} />
        <Divider>Or</Divider>
        <SocialButtons />
      </Box>
    </Dialog>
  )
}
