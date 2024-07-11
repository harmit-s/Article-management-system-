import { Link, useNavigate, NavLink } from "react-router-dom";
import amsLogo from '../../assets/logo/logo.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faHome, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };


  return <header className="header">
    <Link to="/dashboard" className="header__logo-link">
      <img className='header__logo' src={amsLogo} alt='logo' />
      <h1 className="header__title">Article Management System</h1>
    </Link>

    <nav className="header__nav">
    <NavLink exact="true" activeclassname="active" to="/dashboard">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="header__icon2" to="/create">
                    <FontAwesomeIcon icon={faCirclePlus} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="header__icon3" to="/profile">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                
    </nav>
    <button className="header__logout-btn" onClick={handleLogout}>
    <FontAwesomeIcon icon={faPowerOff} color="#d22d2d" /> Logout</button>
  </header>;
}

export default Header;
