import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
      className="flex h-screen"
    >
      <div className="hidden lg:flex w-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 items-center justify-center">
      

        <div className="text-white font-bold text-4xl">
        <img src='foxx.png' className='bg-transparent w-25 h-16 drop-shadow-2xl mb-4 ml-20' alt='Logo'/>

            Welcome Back</div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
        <form onSubmit={handleSubmit} className="max-w-md w-full space-y-8 p-10">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Login to your account</h2>
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="email"
                required
                className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                required
                className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
           

              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </motion.div>
  )
}

export default Login