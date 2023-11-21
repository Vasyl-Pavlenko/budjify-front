/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from "react"
import { AuthService } from "../services/auth.service"
import { toast } from 'react-toastify'
import { setTokenToLocalStorage } from "../helpers"
import { useAppDispatch } from "../store/hooks"
import { login } from "../store/user/userSlice"
import { useNavigate } from "react-router-dom"

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const registrationHandler = async(e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const data = await AuthService.registration({email, password})

      if (data) {
        toast.success('Account Created! Welcome to Budjify! 🎉')
        setIsLogin(!isLogin)
      }
    } catch (err: any) {
      const error = err.response?.data.message
      toast.error(error.toString())
    }
  }

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const data = await AuthService.login({ email, password })

      if (data) {
        setTokenToLocalStorage('token', data.token)
        dispatch(login(data))
        toast.success("Welcome back! You're now logged in. Enjoy Budjifying! 😊")
        navigate('/')
      }
    } catch (err: any) {
      const error = err.response?.data.message
      toast.error(error.toString())
    }
  }

  return (
    <div className="mt-40 flex flex-col justify-center items-center bg-slate-900 text-white">
      <h1 className="text-center text-xl mb-10">
        {isLogin ? 'Login' : 'Registration'}
      </h1>

      <form
        onSubmit={isLogin ? loginHandler : registrationHandler}
        className="flex flex-col w-1/3 mx-auto gap-5"
      >
        <input
          type='email'
          className="input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type='password'
          className="input"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-green mx-auto" >
          Submit
        </button>
      </form>

      <div className="mt-5 flex justify-center" >
        {isLogin ? (
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-slate-300 hover:text-white"
          >
            New to Budjify? Create an account and start budgeting today! 🚀
          </button>
        ) : (
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-slate-300 hover:text-white"
          >
            Already part of the Budjify family? Log in and continue managing your budget! 🔐
          </button>
        )}
      </div>
    </div>
  )
}

export default Auth
