export const Login = (email: string, senha: string) => {
  if (email == 'matheus@gmail.com' && senha == '12345678') {
    const token = 'c185d07631ac49bd824d29b0781afb09';

    localStorage.setItem('LocadoraVeiculo:token', token);

    return true;
  }

  return false;
};

export const Logout = () => {
  localStorage.removeItem('LocadoraVeiculo:token');
  window.location.pathname = '/';
};
