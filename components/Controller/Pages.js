
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

export default function getPages(role){
  if (role.Role=='User'){
    return pageListUser
  } else{
    return pageListNoUser
  }
}