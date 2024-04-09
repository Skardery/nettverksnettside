// pages/login.js
import { useState } from 'react';
import { auth } from '@/components/auth'; // Adjust the path based on where your firebase.js is located
import { signInWithEmailAndPassword } from "firebase/auth";
import Router from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
      Router.push('/input');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nettverk@guiden.no" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="n3ttv3rksgu1den" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
