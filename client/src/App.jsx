import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Connecting to backend...');

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Backend connection failed'));
  }, []);

  return (
    <div>
      <h1>TechFest 2026</h1>
      <h2>Student Event Portal</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;