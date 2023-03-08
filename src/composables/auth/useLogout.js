const useLogout = () => {
  const logout = () => {
    localStorage.removeItem('bii-token');
  };

  return {
    logout
  };
};

export { useLogout };
