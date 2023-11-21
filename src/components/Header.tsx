import { FC } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaBtc, FaSignOutAlt } from 'react-icons/fa'
import { useAuth } from '../hooks/useAuth'
import { useAppDispatch } from '../store/hooks'
import { logout } from '../store/user/userSlice'
import { removeTokenFromLocalStorage } from '../helpers'
import { toast } from 'react-toastify'

export const Header: FC = () => {
  const isAuth = useAuth()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logout())
    removeTokenFromLocalStorage('token')
    toast.success('Logged out successfully. See you again soon! 👋')
    navigate('/')
  }

  return (
    <div className='flex items-center p-4 shadow-sm bg-slate-800 backdrop-blur-sm'>
      <Link to='/'>
        <FaBtc sixe={20} />
      </Link>

      {isAuth && (
        <nav className='ml-auto mr-6'>
          <ul className='flex items-center gap-5'>
            <li>
              <NavLink
                to={'/'}
                className={({ isActive }) => isActive ? 'text-white' : 'text-white/50'}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to={'/transactions'}
                className={({ isActive }) => isActive ? 'text-white' : 'text-white/50'}
              >
                Transactions
              </NavLink>
            </li>

            <li>
              <NavLink
                to={'/categories'}
                className={({ isActive }) => isActive ? 'text-white' : 'text-white/50'}
              >
                Categories
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

      {isAuth ? (
        <button
          className="btn btn-red"
          onClick={logoutHandler}
        >
          <span> Log out</span>
          
          <FaSignOutAlt />
        </button>
      ): (
          <Link
            className="py-2 ml-auto text-white/50 hover:text-white"
            to={'auth'}
          >
            Log In / Sign In
          </Link>
      )}
    </div>
  )
}
