import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/products">Produtos</Link>
      <Link to="/upload">Upload</Link>
    </nav>
  );
}
