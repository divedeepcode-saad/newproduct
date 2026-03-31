import { useState } from 'react';

function About() {
  const [showDetails, setShowDetails] = useState(false);
  const [name, setName] = useState('User');
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setName(inputValue);
      setInputValue('');
    }
  };

  return (
    <div style={styles.container}>
      <h1>ℹ️ About Page</h1>
      <p>Learn more about us on this page!</p>

      <div style={styles.card}>
        <h2>Interactive Form</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your name"
          style={styles.input}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <button onClick={handleSubmit} style={styles.button}>
          Submit
        </button>
        <p style={{ marginTop: '10px' }}>Hello, <strong>{name}</strong>!</p>
      </div>

      <div style={styles.card}>
        <button 
          onClick={() => setShowDetails(!showDetails)} 
          style={styles.button}
        >
          {showDetails ? '📖 Hide Details' : '📖 Show Details'}
        </button>
        {showDetails && (
          <div style={{ marginTop: '15px', textAlign: 'left', lineHeight: '1.6' }}>
            <p>📝 This is a simple React application built with Vite.</p>
            <p>⚡ It demonstrates basic state management and page navigation.</p>
            <p>🚀 Perfect for learning React fundamentals!</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    width: '200px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    margin: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  navButton: {
    padding: '12px 30px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default About;
