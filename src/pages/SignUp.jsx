/* Signup Component (inside a modal):
Should take an email address 
Password (twice to make sure passwords match)
First and last name
Phone number */
import {useState} from 'react'
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
import {Divider} from '@mui/material'
import {useNavigateModal} from 'pages/Sign/ModalProvider'
import {SocialButtons} from 'pages/Login'
import {Logo} from 'components/Logo'

const SignUpHeader = () => {
  return (
    <Grid container spacing={2} sx={{mb: 1}}>
      <Grid item container spacing={5}>
        <Grid item xs={12}>
          <Logo height="32px" width="96px" />
        </Grid>
        <Grid item xs={12}>
          <Typography component="h1" variant="h4" fontWeight={600}>
            Create an Account
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default function SignUp() {
  const navigateModal = useNavigateModal()

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <>
      <Typography variant="body1" color="formMain">
        Sign up with mail&nbsp;
        {/*   <Button variant="text" onClick={() => navigateModal('signup')} sx={{color:"#000"}}>
            Create an Account
          </Button> */}
        <Link
          onClick={() => navigateModal('login')}
          href="#"
          variant="body2"
          color="textSecondary"
        >
          Already have an account?
        </Link>
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="rememberUser" color="primary" />}
              label="Remember me"
            />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>
          Sign Up
        </Button>
      </Box>
    </>
  )
}

export function SignupModal({open, onClose}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box sx={{display: 'flex', flexDirection: 'column', px: 10, py: 6}}>
        <SignUpHeader />
        <SocialButtons />
        <Divider>Or</Divider>
        <SignUp />
      </Box>
    </Dialog>
  )
}
