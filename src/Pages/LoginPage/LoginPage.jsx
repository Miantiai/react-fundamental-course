import { useContext } from 'react';
import Button from '../../components/UI components/Button/Button';
import Input from '../../components/UI components/Input/Input';
import { AuthContext } from '../../context';

export default function LoginPage() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  function login(e) {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <Input type="text" placeholder="Введите пароль" />
        <Input type="text" placeholder="Введите пароль" />
        <Button>Login</Button>
      </form>
    </div>
  );
}
