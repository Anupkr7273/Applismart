// src/utils/auth.js
export const demoCredentials = {
  email: 'demo@applismart.com',
  password: 'password123'
};

export const login = (email, password) => {
  if (email === demoCredentials.email && password === demoCredentials.password) {
    localStorage.setItem('isAuthenticated', 'true');
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem('isAuthenticated');
};

export const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};