import Auth from './Auth'
import router from 'next/router'

export function logOut () {
  (e) => {
    e.preventDefault()
    fetch(('http://localhost:3001/user/logout'), {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: ''
    }).then(
      res => {
        res.json()
        Auth.removeRole();
        console.log(Auth.getRole())
      }
    ).catch(
      err => console.log(err)
    )
    router.push('/')
  }
}