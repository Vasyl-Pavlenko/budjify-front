import { FC } from 'react';
import { useAuth } from '../hooks/useAuth';
import img from '../assets/protected.webp';
import { IProtectedRoute } from '../types/types';

export const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
  const isAuth = useAuth();

  return isAuth ? (
    children
  ) : (
    <div className="flex flex-col justify-center items-center mt-20 gap-10">
      <h1 className="text-2xl">
        Oops! This page is for registered users only. Please log in to access it.
      </h1>
      
      <img
        className='w-1/2'
        src={img}
        alt='Protected'
      />
    </div>
  );
};
