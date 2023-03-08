import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { checkPermission, login } from 'api/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        return;
      }
      const result = await checkPermission(authToken);

      if (result) {
        navigate('/todo');
      }
    };

    checkTokenIsValid();
  }, [navigate]);

  const handleClick = async () => {
    if (username.length === 0 || password.length === 0) {
      return;
    }
    const { success, authToken } = await login({
      username,
      password,
    });

    if (success) {
      localStorage.setItem('authToken', authToken);

      Swal.fire({
        title: '登入成功!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
        position: 'top',
      });
      navigate('/todo');
      return;
    }

    if (localStorage.getItem('authToken')) {
      localStorage.removeItem('authToken');
    }
    Swal.fire({
      title: '登入失敗!',
      icon: 'error',
      html: '登入帳號或密碼有誤。',
      showConfirmButton: false,
      timer: 1000,
      position: 'top',
    });
  };

  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>登入 Todo</h1>

      <AuthInputContainer>
        <AuthInput
          label="帳號"
          placeholder="請輸入帳號"
          value={username}
          onChange={(nameInputValue) => setUsername(nameInputValue)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          type="password"
          label="密碼"
          placeholder="請輸入密碼"
          value={password}
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        />
      </AuthInputContainer>
      <AuthButton onClick={handleClick}>登入</AuthButton>
      <Link to="/signup">
        <AuthLinkText>註冊</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default LoginPage;
