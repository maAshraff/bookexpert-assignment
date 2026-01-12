import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        if(username === "admin" && password === "password"){
            localStorage.setItem('authToken', 'mock-token');
            navigate('/');
        } else {
            setError("Invalid Credentials")
        }

    }
  return (
   <div className='min-h-screen flex items-center justify-center bg-gray-100'>
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
    <form onSubmit={handleLogin} >
        <div className='mb-4'>
            <label htmlFor="username" className='block text-sm font-medium mb-1'>Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" placeholder='please enter User Name' className='w-full p-2 border rounded' required />
        </div>
        <div className='mb-4'>
            <label htmlFor="password" className='block text-sm font-medium mb-1'>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder='please enter password' required className='w-full p-2 border rounded'/>
        </div>
        { error && <p className='text-red-500 mb-4'>{error}</p>}
        <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>Login</button>
    </form>
    <div className="text-gray-400 text-sm mt-2 text-center">DemoUserName: admin ; Password : password</div>
    </div>


   </div>
  )
}

export default Login