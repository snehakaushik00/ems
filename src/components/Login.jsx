import React, { useState } from 'react'

const Login = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

const submitHandler = (e) => {
  e.preventDefault()
    console.log("email is",email)
    console.log("password is",password)

    setemail("")
    setpassword("")
}

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form 
        onSubmit={(e) => {
           submitHandler(e)
         }}
        className='flex flex-col items-center justify-center'>
          <input 
          value={email}
          onChange={(e) => {
            setemail(e.target.value)
          }}
          required 
          className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'></input>
          <input 
          value={password}
          onChange={(e) => {
            setpassword(e.target.value)
          }}
          required
           className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password'></input>
          <button className='mt-5 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login