import Head from 'next/head'
import NavigationRow from '../components/TopBar/NavigationRow'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Auth from '../components/AuthController/Auth'

let pages = []

if (Auth.getRole) {
  pages = [
    {
      path: '/berita',
      label: 'Berita',
    },
    {
      path: '/logout',
      label: 'Logout'
    }
  ]
} else{
  pages = [
    {
      path: '/berita',
      label: 'Berita',
    },
    {
      path: '/registration',
      label: 'Registrasi',
    },
    {
      path: '/login',
      label: 'Login',
    },
  ]
}

export default function Home() {
  return (
    <>
      <NavigationRow pages={pages}/>
      <div className='bg-primary flex flex-col justify-center'>
        <div className='flex justify-center items-center min-h-screen sm:justify-start'>
          <img src='/img/bg.jpg' alt='Background' className='invisible sm:visible absolute h-4/5 w-full'></img>
          <img src='/img/logo.png' alt='Logo' className='z-10 absolute w-3/4 sm:w-1/2'></img>
        </div>
      </div>
    </>
  )
}
