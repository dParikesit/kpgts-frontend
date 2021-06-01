/* eslint-disable react/react-in-jsx-scope */
import Router from 'next/router'
import { AuthContext } from '../components/Controller/AuthContext'
import { useContext } from 'react'

function Login(){
  let Auth = useContext(AuthContext)

  let user = {
    email: '',
    password: ''
  }

  const submitHandler = (e) => {
    e.preventDefault()
    user.email = document.getElementById('email-address').value
    user.password = document.getElementById('password').value

    fetch(('http://localhost:3001/user/login'), {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(user),
    }).then(
      (res) => res.json()
    ).then(
      (res) => {
        console.log(res.message)
        Auth.addRole(res.role)
      }
    ).then(
      Router.push('/account')
    )
  }
  return(
    <>
      <div className='h-screen w-screen flex items-center justify-center bg-primary'>
        <div className='w-3/4 md:max-w-md'>
          <div>
            <img className='mx-auto h-48 w-auto' src='/img/logo.png' alt='logo'></img>
            <h2 className='mt-6 text-center text-xl font-bold md:text-3xl md:font-extrabold'>
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={submitHandler} method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"></input>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"></input>
              </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-primary bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login