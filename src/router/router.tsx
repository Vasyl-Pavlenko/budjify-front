import { createBrowserRouter } from 'react-router-dom'
import ErrorPage  from "../pages/ErrorPage";
import Home  from "../pages/Home";
import Layout from "../pages/Layout";
import Transactions, { transactionsAction, transactionsLoader }  from '../pages/Transactions';
import Categories, { categoriesAction, categoriesLoader }  from '../pages/Categories';
import Auth  from '../pages/Auth';
import { ProtectedRoute } from '../components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'transactions',
        action: transactionsAction,
        loader: transactionsLoader,
        element: (
          <ProtectedRoute>
            <Transactions />
          </ProtectedRoute >
        ),
      },
      {
        path: 'categories',
        action: categoriesAction,
        loader: categoriesLoader,
        element: (
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute >
        ),
      },
      {
        path: 'auth',
        element: <Auth />,
      }
    ]
  }
])