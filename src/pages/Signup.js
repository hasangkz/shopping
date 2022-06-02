import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signup, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Üye Ol</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email Adresiniz:</span>
          <input
            required
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Parola:</span>
          <input
            required
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>Üye Ol</button>
        {error && <h4>Hata! {error}</h4>}
      </form>
    </div>
  );
}
