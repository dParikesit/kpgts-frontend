/* eslint-disable react/react-in-jsx-scope */
import NavigationRow from '../components/TopBar/NavigationRow'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header>
        <NavigationRow />
        <div className='bg-center bg-cover bg-kapal'>
          <div className='flex flex-col justify-center h-screen items-center justify-items-center'>
            <div className='h-auto md:self-start md:w-1/2'>
              <Image src='/img/logo.png' width={1080} height={878}  />
            </div>
          </div>
        </div>
      </header>
      <div>
        <h1>Halo</h1>
      </div>
    </>
  )
}
