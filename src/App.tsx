import {useEffect} from 'react'
import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import { useAppDispatch } from "./store/hooks"
import { getTokenFromLocalStorage } from "./helpers/localstorage.helper"
import { toast } from 'react-toastify'
import { AuthService } from "./services/auth.service"
import { login, logout } from "./store/user/userSlice"

function App() {
  const dispatch = useAppDispatch()
  const checkAuth = async () => {
    const token = getTokenFromLocalStorage()

    try {
      if (token) {
        const data = await AuthService.getMe()

        if (data) {
          dispatch(login(data))
        } else {
          dispatch(logout())
        }
      }
    } catch (err) {
      console.log(err)
      toast.error('Oops! Something went wrong. Please try again or contact support. 🤔')
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
