/* eslint-disable react/react-in-jsx-scope */
import NavigationRow from '../components/TopBar/NavigationRow'

export default function Home() {
  return (
    <>
      <NavigationRow />
      <div className='bg-primary flex flex-col justify-center'>
        <div className='flex justify-center items-center min-h-screen sm:justify-start'>
          <img src='/img/bg.jpg' alt='Background' className='invisible sm:visible absolute h-4/5 w-full'></img>
          <img src='/img/logo.png' alt='Logo' className='z-10 absolute w-3/4 sm:w-1/2'></img>
        </div>
      </div>
    </>
  )
}