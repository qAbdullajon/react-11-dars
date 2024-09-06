import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Toastify from '../../components/toastify'
const index = () => {
  const [form, setForm] = useState({})
  const naviget = useNavigate()


  const hendleSubmit = (e) => {
    e.preventDefault()
    if (form.username === 'admin') {
      naviget('/admin-layout')
    } else if (form.username === 'user') {
      naviget('/student-layout')
    } else {
      Toastify('Section')
    }
  }
  const hendleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <ToastContainer />
      <form onSubmit={hendleSubmit} className='flex flex-col gap-2 w-1/4'>
        <TextField onChange={hendleChange} fullWidth name='username' label="Username" />
        <TextField onChange={hendleChange} fullWidth name='password' label="Password" />
        <Button type='submit' variant="contained">Contained</Button>
      </form>
    </div>
  )
}

export default index