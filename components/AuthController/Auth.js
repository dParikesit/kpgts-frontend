class Auth{

  static authenticateUser(token, email, role){
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('role', role);
  }

  static deAuthenticateUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
  }

  static isUserAuthenticated(){
    return localStorage.getItem('token') !== null;
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  static getEmail() {
    return localStorage.getItem('email');
  }

  static getRole() {
    return localStorage.getItem('role');
  }
}

export default Auth;