import 'tailwindcss/tailwind.css'
import { AuthContext, AuthValue } from '../components/Controller/AuthContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContext.Provider value = { AuthValue }>
      <Component {...pageProps} />
    </AuthContext.Provider>
  )
}

export default MyApp
