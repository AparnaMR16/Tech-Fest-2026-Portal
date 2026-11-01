
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Checking backend connection...');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/health`)
      .then(response => {
        if (!response.ok) throw new Error('Connection failed');
        return response.json();
      })
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Backend connection failed'));
  }, []);

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">TF<span>26</span></div>
        <h2>TechFest 2026</h2>
        <a href="#about">About</a>
      </header>

      <main className="hero">
        <p className="tag">MAR BASELIOS COLLEGE OF ENGINEERING AND TECHNOLOGY</p>

        <h1>
          TECHFEST <span>2026</span>
        </h1>

        <h2>Innovation. Creativity. Technology.</h2>

        <p className="description">
          Welcome to TechFest 2026, a platform for students to explore
          technology, showcase their talents and experience innovation.
        </p>

        <div className="status">
          <span className="dot"></span>
          {message}
        </div>

        <a className="explore" href="#about">Explore TechFest</a>
      </main>

      <section id="about" className="about">
        <h2>About TechFest</h2>
        <p>
          TechFest 2026 brings together technology enthusiasts to learn,
          collaborate and showcase their skills through technical events
          and activities.
        </p>
      </section>

      <footer>
        © 2026 TechFest | Student Event Portal
      </footer>
    </div>
  );
}

export default App;
