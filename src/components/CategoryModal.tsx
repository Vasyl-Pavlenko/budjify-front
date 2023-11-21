import { FC } from 'react'
import { Form } from 'react-router-dom'
import { ICategoryModal } from '../types/types'

export const CategoryModal: FC<ICategoryModal> = ({ type, id, setVisibleModal }) => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-black/50 flex justify-center items-center'>
      <Form
        className='grid gap-2 w-[300px] p-5 rounded-lg bg-slate-900'
        action='/categories'
        method={type}
        onSubmit={() => setVisibleModal(false)}
      >
        <label htmlFor='title'>
          <small>Category title</small>

          <input
            className='input w-full'
            type='text'
            name='title'
            placeholder='Enter category...'
          />

          <input
            type='hidden'
            name='id'
            value={id}
          />
        </label>

        <div className='flex items-center gap-2'>
          <button
            type='submit'
            className='btn btn-green'
          >
            {type === 'patch' ? 'Save' : ' Create'}
          </button>

          <button
            className='btn btn-red'
            onClick={() => setVisibleModal(false)}
          >
            Close
          </button>
        </div>
      </Form>
    </div>
  )
}
