import { useState,useEffect } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicks: ${count}`;
    
    console.log("Main har click par chalta hoon!");
  }, [count]);

  return (
    <div style={styles.container}>
      <h1>🏠 Home Page</h1>
      <p>Welcome to the Home Page!</p>
      
      <div style={styles.card}>
        <h2>Counter Demo</h2>
        <p>Count: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)} style={styles.button}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} style={styles.button}>
          Decrement
        </button>
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
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default Home;
