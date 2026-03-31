import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <h2 style={styles.logo}>MyApp</h2>
        <ul style={styles.links}>
          <li>
            <Link to="/" style={styles.link}>🏠 Home</Link>
          </li>
          <li>
            <Link to="/about" style={styles.link}>ℹ️ About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '15px 0',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    paddingX: '20px',
  },
  logo: {
    color: 'white',
    margin: 0,
    fontSize: '24px',
  },
  links: {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
    margin: 0,
    padding: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s',
  },
};

export default Navbar;
