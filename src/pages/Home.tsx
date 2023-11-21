import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/hooks';
import { logout } from '../store/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa'

const Home: FC = () => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="mt-40 flex flex-col justify-center items-center bg-slate-900 text-white">
      <h1 className="text-center text-4xl mb-6 font-bold">
        Welcome to Budjify! 🌟
      </h1>

      <p className="text-center text-lg mb-10">
        Your personal budget management made easy.
        <br />
        <br />
        Join our family of savvy budgeters and start budgeting today! 💸✨
      </p>

      {isAuthenticated ? (
        <div className='flex gap-3'>
          <button
            className="btn btn-green mx-auto"
            onClick={() => navigate('/transactions')}
          >
            Transactions
          </button>

          <button
            className="btn btn-red mx-auto"
            onClick={handleLogout}
          >
            <span> Log out</span>

            <FaSignOutAlt />
          </button>
        </div>
      ) : (
        <button
          className="btn btn-green mx-auto"
          onClick={() => navigate('/auth')}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Home;
