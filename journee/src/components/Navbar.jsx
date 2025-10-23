import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Journee</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/destinations" className="hover:text-blue-200 transition">
              Destinations
            </Link>
          </li>
          <li>
            <Link to="/book" className="hover:text-blue-200 transition">
              Book
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-200 transition">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


