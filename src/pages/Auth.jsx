import { useState } from 'react';
import { api, setToken } from '../lib/api';

export default function Auth(){
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function submit(e){
    e.preventDefault();
    setError('');
    try{
      if(isLogin){
        const form = new URLSearchParams();
        form.set('username', email);
        form.set('password', password);
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'}/auth/login`, {
          method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: form.toString()
        });
        const data = await res.json();
        if(!res.ok) throw new Error(data.detail || 'Login failed');
        setToken(data.access_token);
        location.href = '/user';
      } else {
        const data = await api('/auth/register', { method: 'POST', body: { name, email, password } });
        setToken(data.access_token);
        location.href = '/user';
      }
    }catch(e){ setError(String(e.message || e)); }
  }

  return (
    <div className="max-w-sm mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-2xl font-semibold mb-4">{isLogin? 'Login' : 'Create account'}</h1>
      <form onSubmit={submit} className="space-y-3">
        {!isLogin && <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full h-11 px-3 rounded-lg border border-black/10 dark:border-white/10" required/>}
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full h-11 px-3 rounded-lg border border-black/10 dark:border-white/10" required/>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full h-11 px-3 rounded-lg border border-black/10 dark:border-white/10" required/>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button className="w-full h-11 rounded-lg bg-blue-600 text-white">{isLogin? 'Login' : 'Sign up'}</button>
      </form>
      <button onClick={()=>setIsLogin(v=>!v)} className="mt-3 text-sm text-blue-600">{isLogin? 'Create an account' : 'I already have an account'}</button>
    </div>
  );
}
