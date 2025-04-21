import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import '../styles/BorderAnimation.css';
import '../styles/StatsAnimation.css';
import { lightTheme, darkTheme } from '../styles/theme';
import accueilImage from '../assets/image/accueil.jpg';
import srchumainImage from '../assets/image/srchumain.jpg';
import formationImage from '../assets/image/formation.jpg';
import managementImage from '../assets/image/management.jpg';
import coachingImage from '../assets/image/coaching.jpg';
import logo from '../assets/image/logo.png';
import JobList from '../components/JobList';

const Home = () => {
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
    padding: '12px 30px',
    backgroundColor: theme.button.background,
    color: theme.button.text,
    textDecoration: 'none',
    borderRadius: '30px',
    transition: 'all 0.3s ease',
    border: `2px solid ${theme.button.border}`,
    fontWeight: '600',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    fontSize: '0.9rem',
    boxShadow: `0 4px 15px ${theme.shadow}`
  };

  const expertises = [
    {
      title: 'Ressources Humaines',
      description: 'Accompagnement stratégique et opérationnel en gestion des talents et organisation RH',
      link: '/services#rh',
      image: srchumainImage,
    },
    {
      title: 'Formation Digitale',
      description: 'Solutions de formation en ligne innovantes pour booster les compétences de vos équipes',
      link: '/services#formation',
      image: formationImage,
    },
    {
      title: 'Management Stratégique',
      description: 'Conseil en pilotage stratégique, transformation et conduite du changement',
      link: '/services#management',
      image: managementImage,
    },
    {
      title: 'Coaching Professionnel',
      description: 'Coaching individuel et collectif certifié pour accompagner la performance durable',
      link: '/services#coaching',
      image: coachingImage,
    },
  ];

  const stats = [
    { number: '15+', label: 'Années d\'expérience' },
    { number: '500+', label: 'Clients satisfaits' },
    { number: '95%', label: 'Taux de satisfaction' },
    { number: '50+', label: 'Experts certifiés' },
  ];

  const whyChooseUs = [
    {
      title: 'Expertise Confirmée',
      description: 'Une équipe d\'experts certifiés avec plus de 15 ans d\'expérience',
      icon: '🎯'
    },
    {
      title: 'Solutions Sur Mesure',
      description: 'Des approches personnalisées adaptées à vos besoins spécifiques',
      icon: '⚡'
    },
    {
      title: 'Innovation Continue',
      description: 'Des méthodes et outils innovants pour rester à la pointe',
      icon: '🚀'
    },
    {
      title: 'Accompagnement Global',
      description: 'Un suivi complet de vos projets du début à la fin',
      icon: '🤝'
    }
  ];

  return (
    <div style={{ backgroundColor: theme.background, color: theme.text }}>
      <div className="top"></div>
      
      {/* Navbar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 30px',
        backgroundColor: theme.navBackground,
        boxShadow: `0 2px 8px ${theme.shadow}`,
        position: 'fixed',
        top: '10px',
        width: '100%',
        zIndex: 1000
      }}>
        <img src={logo} alt="Logo" style={{ height: '50px' }} />
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
            style={{
              ...buttonStyle,
              padding: '8px 15px',
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="hero fade-in"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${accueilImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '100px 0',
          textAlign: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '80px'
        }}
      >
        <div className="container">
          <h1 className="slide-down" style={{ 
            fontSize: '3.5rem', 
            marginBottom: '20px',
            fontWeight: '700',
            letterSpacing: '2px',
            animation: 'slideDown 0.8s ease-out forwards'
          }}>
            Bienvenue chez HousniJob
          </h1>
          <p className="slide-up" style={{ 
            fontSize: '1.2rem', 
            marginBottom: '40px',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.8',
            opacity: '0.9',
            animation: 'slideUp 0.8s ease-out 0.2s forwards'
          }}>
            Cabinet de Conseil en Ressources Humaines, Formation Digitale, Management Stratégique et Coaching Professionnel Certifié
          </p>
          <div className="scale-in" style={{
            animation: 'scaleIn 0.5s ease-out 0.4s forwards',
            opacity: '0'
          }}>
            <Link 
              to="/services" 
              className="hero-cta-button"
              style={{
                display: 'inline-block',
                padding: '20px 45px',
                backgroundColor: 'transparent',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                border: '3px solid #fff',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                position: 'relative',
                overflow: 'hidden',
                zIndex: '1',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.color = '#1a1a1a';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(255,255,255,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
              }}
            >
              Découvrir nos expertises
            </Link>
          </div>
        </div>
        <style>
          {`
            @keyframes slideDown {
              from {
                opacity: 0;
                transform: translateY(-30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes scaleIn {
              from {
                opacity: 0;
                transform: scale(0.9);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            .hero-cta-button::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(45deg, #ffffff, #f0f0f0);
              opacity: 0;
              transform: scaleX(0);
              transform-origin: right;
              transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              z-index: -1;
            }

            .hero-cta-button:hover::before {
              transform: scaleX(1);
              transform-origin: left;
              opacity: 1;
            }

            .hero-cta-button:active {
              transform: scale(0.95) !important;
            }
          `}
        </style>
      </section>

      {/* Stats Section */}
      <section style={{ 
        padding: '80px 0',
        backgroundColor: '#1a1a1a',
        color: 'white'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            textAlign: 'center'
          }}>
            {stats.map((stat, index) => (
              <div key={index} className="stats-card fade-in">
                <div className="stats-number">{stat.number}</div>
                <div className="stats-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertises Section */}
      <section style={{ 
        padding: '60px 0',
        backgroundColor: '#1a1a1a',
        color: 'white'
      }}>
        <div className="container">
          <h2 className="fade-in" style={{ 
            textAlign: 'center', 
            marginBottom: '40px',
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#fff'
          }}>
            Nos Domaines d'Expertise
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {expertises.map((item, index) => (
              <div
                key={index}
                className="expertise-card"
                style={{
                  position: 'relative',
                  height: '300px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  animation: `slideIn 0.5s ease-out ${index * 0.2}s forwards`,
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.3s ease-in-out',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px',
                    transition: 'all 0.3s ease-in-out'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.95))';
                    e.currentTarget.parentElement.querySelector('.expertise-content').style.transform = 'translateY(0)';
                    e.currentTarget.parentElement.querySelector('.expertise-title').style.transform = 'translateY(0)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))';
                    e.currentTarget.parentElement.querySelector('.expertise-content').style.transform = 'translateY(100%)';
                    e.currentTarget.parentElement.querySelector('.expertise-title').style.transform = 'translateY(0)';
                  }}
                >
                  <h3 
                    className="expertise-title"
                    style={{
                      color: '#fff',
                      fontSize: '1.5rem',
                      marginBottom: '10px',
                      transform: 'translateY(0)',
                      transition: 'transform 0.3s ease-in-out'
                    }}
                  >
                    {item.title}
                  </h3>
                  <div 
                    className="expertise-content"
                    style={{
                      transform: 'translateY(100%)',
                      transition: 'transform 0.3s ease-in-out'
                    }}
                  >
                    <p style={{
                      color: '#fff',
                      marginBottom: '20px',
                      fontSize: '0.9rem',
                      lineHeight: '1.6'
                    }}>
                      {item.description}
                    </p>
                    <Link
                      to={item.link}
                      className="btn-expertise"
                      style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: 'transparent',
                        color: '#fff',
                        border: '2px solid #fff',
                        borderRadius: '25px',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#fff';
                        e.currentTarget.style.color = '#1a1a1a';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#fff';
                      }}
                    >
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>
          {`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            .expertise-card:hover .expertise-content {
              transform: translateY(0) !important;
            }
            
            .expertise-card:hover img {
              transform: scale(1.1);
            }
          `}
        </style>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ 
        padding: '100px 0',
        backgroundColor: '#223'
      }}>
        <div className="container">
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '60px',
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#fff'
          }}>
            Pourquoi Nous Choisir ?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {whyChooseUs.map((item, index) => (
              <aside key={index} 
                className="animated-border"
                style={{
                  position: 'relative',
                  padding: '30px',
                  backgroundColor: '#223',
                  transition: 'transform 0.3s ease',
                  color: 'white'
                }}
              >
                <div className="content" style={{
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '20px',
                    textAlign: 'center'
                  }}>{item.icon}</div>
                  <h3 className="fluid" style={{
                    fontSize: '1.5rem',
                    marginBottom: '15px',
                    color: '#fff'
                  }}>{item.title}</h3>
                  <p className="fluid" style={{
                    color: '#ddd',
                    lineHeight: '1.6'
                  }}>{item.description}</p>
                </div>
              </aside>
            ))}
          </div>
        </div>
      </section>

      {/* Job List Section */}
      <section style={{ 
        padding: '80px 0',
        backgroundColor: '#1a1a1a',
        color: 'white'
      }}>
        <div className="container">
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '40px',
            fontSize: '2.5rem',
            fontWeight: '700',
            color: theme.text
          }}>
            Nos Offres d'Emploi
          </h2>
          <JobList />
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="fade-in"
        style={{
          backgroundColor: '#1a1a1a',
          padding: '100px 0',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <h2 
            className="slide-down"
            style={{
              fontSize: '2.8rem',
              fontWeight: '700',
              marginBottom: '30px',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              animation: 'slideDown 0.8s ease-out forwards'
            }}
          >
            Besoin d'un accompagnement sur mesure ?
          </h2>
          <p 
            className="slide-up"
            style={{
              fontSize: '1.2rem',
              marginBottom: '40px',
              color: '#fff',
              opacity: '0.9',
              maxWidth: '800px',
              margin: '0 auto 40px',
              lineHeight: '1.8',
              animation: 'slideUp 0.8s ease-out 0.2s forwards'
            }}
          >
            Contactez-nous pour discuter de vos projets et découvrir nos solutions personnalisées
          </p>
          <div 
            className="scale-in"
            style={{
              animation: 'scaleIn 0.5s ease-out 0.4s forwards',
              opacity: '0'
            }}
          >
            <Link 
              to="/contact" 
              className="cta-button"
              style={{
                display: 'inline-block',
                padding: '15px 40px',
                backgroundColor: 'transparent',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '30px',
                border: '2px solid #fff',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative',
                overflow: 'hidden',
                zIndex: '1'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.color = '#1a1a1a';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Nous contacter
            </Link>
          </div>
        </div>
        <style>
          {`
            @keyframes slideDown {
              from {
                opacity: 0;
                transform: translateY(-30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes scaleIn {
              from {
                opacity: 0;
                transform: scale(0.9);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            .cta-button:hover {
              background-color: #fff !important;
              color: #1a1a1a !important;
              transform: translateY(-3px) !important;
              box-shadow: 0 5px 15px rgba(255,255,255,0.3) !important;
            }
          `}
        </style>
      </section>
    </div>
  );
};

export default Home;
