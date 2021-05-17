import Auth from './Auth'

let role = Auth.getRole()
let pageListNoUser = [
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

let pageListUser = [
  {
    path: '/berita',
    label: 'Berita',
  },
  {
    path: '/logout',
    label: 'logout',
  },
]

function getPages(){
  if (role==='User'){
    return pageListUser
  } else{
    return pageListNoUser
  }
}

export default getPages