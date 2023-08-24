import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
// import css from './RegisterForm.module.css';

import { RegForm, RegLabel } from './RegisterForm.styled';
import { useState } from 'react';



export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <RegForm  autoComplete="off" onSubmit={handleSubmit}>
      <RegLabel >
        Username
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
      </RegLabel>
      <RegLabel >
        Email
        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
      </RegLabel>
      <RegLabel >
        Password
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
      </RegLabel>
      <button type="submit">Register</button>
    </RegForm>
  );
};
