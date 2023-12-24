import {Navigate} from 'react-router-dom'
import {useAuth} from './AuthProvider'
import {LOGIN} from '@navigation/CONSTANTS'

export default function PrivateRoute({element, redirectTo = '/'}) {
  const {isAuth, currentUser} = useAuth()
    // console.log('isAuth', isAuth)
    // console.log('currentUser', currentUser)

  return currentUser ? element : <Navigate to={redirectTo} />
}
