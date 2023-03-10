import { routerInstance } from 'src/router';
const useLogout = () => {
  const logout = () => {
    localStorage.removeItem('bii-token');

    routerInstance.push({ name: 'login-page' });
  };

  return {
    logout
  };
};

export { useLogout };
