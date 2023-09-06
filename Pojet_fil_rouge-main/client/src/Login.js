import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Dans un scénario réel, vous devriez envoyer ces données à votre backend
    // pour vérification. Pour cet exemple, je simule simplement une connexion réussie.
    
    // Si les informations d'identification sont correctes:
    onLogin(true); // Supposons que onLogin est une fonction passée en tant que prop qui change l'état de connexion.
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Identifiant:</label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
        </div>

        <div className="input-group">
          <label>Mot de passe:</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginPage;
