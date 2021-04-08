import Link from 'next/link'
import Router from 'next/router'
import Auth from '../AuthController/Auth'

const logoutHandler = (e) => {
  e.preventDefault()
  Auth.deAuthenticateUser()
  Router.push('/login')
}

function NavigationRow (props) {
  const items = props.pages.map((page)=>{
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