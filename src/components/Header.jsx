import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import accueilImage from '../assets/image/accueil.jpg';
import srchumainImage from '../assets/image/srchumain.jpg';
import formationImage from '../assets/image/formation.jpg';
import managementImage from '../assets/image/management.jpg';
import coachingImage from '../assets/image/coaching.jpg';
import logo from '../assets/image/logo.png';
import { lightTheme, darkTheme } from '../styles/theme';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.text;
  }, [theme]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navLinkStyle = {
    color: theme.primary,
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.1rem',
    padding: '8px 15px',
    borderRadius: '20px',
    transition: 'all 0.3s ease'
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '8px 15px',
    backgroundColor: theme.button.background,
    color: theme.button.text,
    textDecoration: 'none',
    borderRadius: '30px',
    transition: 'all 0.3s ease',
    border: `2px solid ${theme.button.border}`,
    fontWeight: '600',
    fontSize: '0.9rem',
    cursor: 'pointer'
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 30px',
      backgroundColor: theme.navBackground,
      boxShadow: `0 2px 8px ${theme.shadow}`,
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000
    }}>
      <Link to="/">
        <img src={logo} alt="Logo" style={{ height: '50px' }} />
      </Link>
      <div style={{ 
        display: 'flex', 
        gap: '30px',
        alignItems: 'center'
      }}>
        {['/', '/services', '/about', '/contact'].map((path, index) => (
          <Link 
            key={index}
            to={path}
            style={navLinkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.hoverBackground;
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {['Accueil', 'Services', 'À propos', 'Contact'][index]}
          </Link>
        ))}
        <button
          onClick={toggleDarkMode}
          style={buttonStyle}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Header;