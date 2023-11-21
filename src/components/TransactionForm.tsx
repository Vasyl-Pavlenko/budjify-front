import { FC, useState } from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import { IResponseTransactionLoader } from '../types/types'
import { CategoryModal } from './CategoryModal'

export const TransactionForm: FC = () => {
  const { categories } = useLoaderData() as IResponseTransactionLoader
  const [visibleModal, setVisibleModal] = useState<boolean>(false)

  return (
    <div className='rounded-md bg-slate-800 p-4'>
      <Form
        className='grid gap-2'
        method='post'
        action='/transactions'
      >
        <label
          className='grid cursor-pointer'
        >
          <span>Title</span>

          <input
            className='input bg-slate-900'
            type='text'
            placeholder='Enter title...'
            name='title'
            required
          />
        </label>

        <label
          className='grid cursor-pointer'
        >
          <span>
            Amount
          </span>

          <input
            className='input bg-slate-900'
            type='number'
            placeholder='Enter amount...'
            name='amount'
            required
          />
        </label>

        {categories.length ? (
          <label
            className='grid cursor-pointer'
          >
            <span>Category</span>

            <select
              className='input bg-slate-900 cursor-pointer'
              name='category'
              required
            >
              {categories.map(({id, title }) => (
                <option
                  value={id}
                  key={id}
                >
                  {title}
                </option>
              ))}
            </select>
          </label>
        ): (
            <h1 className='mt-2 text-red-500'>
              Great to have you here! 😊 To kick things off, let's create a category together!
            </h1>
        )}

        <button
          className='mt-2 flex max-w-fit items-center gap-2 text-white/50 hover:text-white'
          onClick={() => setVisibleModal(true)}
        >
          <FaPlus />

          <span>
            Time to organize! Easily manage your categories here
          </span>
        </button>

        <div className='flex items-center gap-4'>
          <label className='flex cursor-pointer items-center gap-2'>
            <input
              type='radio'
              name='type'
              value={'income'}
              className='form-radio text-blue-600'
            />

            <span>
              Income
            </span>
          </label>

          <label className='flex cursor-pointer items-center gap-2'>
            <input
              type='radio'
              name='type'
              value={'expense'}
              className='form-radio text-blue-600'
            />

            <span>
              Expense
            </span>
          </label>
        </div>

        <button className='btn btn-green mt-2 max-w-fit'>
          Submit
        </button>
      </Form>

      {visibleModal && (
        <CategoryModal
          type='post'
          setVisibleModal={setVisibleModal}
        />
      )}
    </div>
  )
}
