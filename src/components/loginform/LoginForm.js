import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LogForm, LogLabel } from './LoginForm.styled';
import { useState } from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
    setEmail('');
    setPassword('');
  };

  return (
    <LogForm  autoComplete="off" onSubmit={handleSubmit}>
      <LogLabel >
        Email
        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
      </LogLabel>
      <LogLabel >
        Password
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
      </LogLabel>
      <button type="submit">Log In</button>
    </LogForm>
  );
};

