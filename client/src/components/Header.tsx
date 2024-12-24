import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          <Link to="/">Brain Trail</Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-gray-300">
                Features
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
