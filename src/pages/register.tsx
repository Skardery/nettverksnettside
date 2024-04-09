import { useState } from 'react';
import { auth } from '@/components/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
import Router from 'next/router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async (e) => {
    e.preventDefault(); 
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
      Router.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={register}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nettverk@guiden.no" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="n3ttv3rksgu1den" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
