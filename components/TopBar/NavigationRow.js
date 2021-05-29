/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Link from 'next/link'
import Router from 'next/router'
import { useContext } from 'react'
import { AuthContext } from '../Controller/AuthContext'

function NavigationRow () {
  const logoutHandler = (e) => {
    e.preventDefault()
    fetch(('http://localhost:3001/user/logout'), {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: ''
    }).then(
      res => res.json()
    ).then(
      res => {
        Auth.removeRole();
        console.log(res.message)
      }
    ).catch(
      err => {
        console.log(err)
      }
      
    )
    Router.push('/')
  }
  
  let Auth = useContext(AuthContext)
  let pages = [
    {
      path: '/berita',
      label: 'Berita',
    },
  ]

  if (Auth.role == 'User') {
    pages.push(
      {
        path: '/logout',
        label: 'logout',
      },
    )
  } else {
    pages.push(
      {
        path: '/registration',
        label: 'Registrasi',
      },
      {
        path: '/login',
        label: 'Login',
      },
    )
  }

  let items = pages.map((page)=>{
    if (page.path === '/logout'){
      return(
        <button onClick={logoutHandler} className='text-text text-l font-bold p-4'>
          Logout
        </button>
      )
    } else {
      return (
        <Link href={page.path} key={page.path}>
          <button className='text-text text-l font-bold p-4'>
            {page.label}
          </button>
        </Link>
      )
    }
  })

  return (
    <nav className='bg-primary'>
      <div className='flex items-center justify-end h-1/5 mr-32'>
        {items}
      </div>
    </nav>
  )
}

export default NavigationRow