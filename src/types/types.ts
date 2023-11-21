export interface IUser {
  id: number;
  email: string;
  token: string;
}

export interface IUserData {
  email: string;
  password: string;
}

export interface IResponseUser {
  email: string;
  password: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface IResponseUserData {
  token: string;
  user: IResponseUser;
}

export interface ICategory {
  title: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  transactions: [];
}

export interface IResponseTransactionLoader {
  categories: ICategory[];
  transactions: ITransaction[];
  totalIncome: number;
  totalExpense: number;
}

export interface ITransaction {
  amount: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  type: string;
  id: number;
  category: ICategory
}

export interface ITransactionsTable {
  limit: number;
}

export interface IChart {
  totalIncome: number;
  totalExpense: number;
}

export interface IChartData {
  value: number;
  name: string;
}

export interface ICategoryModal {
  type: 'post' | 'patch'
  id?: number
  setVisibleModal: (visible: boolean) => void
}

export interface IProtectedRoute {
  children: JSX.Element;
}