class Auth {
  static setRole (role) {
    if (typeof window !== "undefined") {
      localStorage.setItem('role', role)
    }
  }

  static getRole () {
    if (typeof window !== "undefined") {
      return localStorage.getItem('role')
    }
  }

  static removeRole(){
    if (typeof window !== "undefined") {
      localStorage.removeItem('role')
    }
    
  }
}

export default Auth