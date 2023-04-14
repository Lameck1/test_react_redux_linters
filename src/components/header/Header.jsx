import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header({
  backIcon, date, text, micIcon, settingsIcon,
}) {
  return (
    <header>
      <div className="brand-logo">
        <NavLink className="nav-link" to="/">{backIcon}</NavLink>
        <span>{date}</span>
      </div>
      <div className="header-text">
        <span>{text}</span>
      </div>
      <div className="mic-settings">
        {micIcon}
        {settingsIcon}
      </div>
    </header>
  );
}

Header.propTypes = {
  backIcon: PropTypes.element.isRequired,
  date: PropTypes.string,
  text: PropTypes.string,
  micIcon: PropTypes.element.isRequired,
  settingsIcon: PropTypes.element.isRequired,
};

Header.defaultProps = {
  date: '',
  text: '',
};

export default Header;
