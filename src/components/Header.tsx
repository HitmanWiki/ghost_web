import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, MessageCircle, Zap } from 'lucide-react';

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const navLinks = [
    { num: '01', label: 'Home', action: 'hero' },
    { num: '02', label: 'Features', action: 'features' },
    { num: '03', label: 'How It Works', action: 'demo' },
    { num: '04', label: '$GHOST', action: 'token' },
    { num: '05', label: 'FAQ', action: 'faq' }
  ];

  const handleLinkClick = (action: string) => {
    setIsOpen(false);
    onScrollTo(action);
  };

  const headerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    background: 'rgba(10, 4, 27, 0.92)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: isMobile ? '12px 16px' : '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const logoContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '10px' : '14px',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const logoImageContainerStyle: React.CSSProperties = {
    width: isMobile ? '40px' : '48px',
    height: isMobile ? '40px' : '48px',
    borderRadius: '12px',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    flexShrink: 0,
  };

  const logoImageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const logoTextStyle: React.CSSProperties = {
    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
    fontWeight: 800,
    fontSize: isMobile ? '1.25rem' : '1.5rem',
    letterSpacing: '-0.02em',
    color: '#ffffff',
  };

  const logoAccentStyle: React.CSSProperties = {
    color: '#8b5cf6',
  };

  const navStyle: React.CSSProperties = {
    display: isMobile ? 'none' : 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const navLinkStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    fontWeight: 500,
    fontFamily: "'Inter', sans-serif",
    color: '#c4b5fd',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '10px 16px',
    borderRadius: '10px',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
    position: 'relative',
  };

  const navNumberStyle: React.CSSProperties = {
    fontSize: '0.7rem',
    color: '#8b5cf6',
    fontWeight: 700,
    opacity: 0.6,
  };

  const docsLinkStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    fontWeight: 500,
    fontFamily: "'Inter', sans-serif",
    color: '#c4b5fd',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '10px 16px',
    borderRadius: '10px',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
  };

  const desktopCtaStyle: React.CSSProperties = {
    display: isMobile ? 'none' : 'flex',
    alignItems: 'center',
    gap: '12px',
  };

  const supportBtnStyle: React.CSSProperties = {
    padding: '10px 18px',
    borderRadius: '12px',
    background: 'rgba(139, 92, 246, 0.15)',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    fontSize: '0.875rem',
    fontWeight: 500,
    fontFamily: "'Inter', sans-serif",
    color: '#c4b5fd',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
  };

  const startBtnStyle: React.CSSProperties = {
    padding: '10px 22px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: 600,
    fontFamily: "'Inter', sans-serif",
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
    boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
  };

  const mobileMenuBtnStyle: React.CSSProperties = {
    display: isMobile ? 'flex' : 'none',
    padding: '10px',
    borderRadius: '10px',
    background: 'rgba(139, 92, 246, 0.15)',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    color: '#c4b5fd',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '44px',
    minHeight: '44px',
  };

  const mobileDrawerStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    top: isMobile ? '69px' : '80px',
    zIndex: 40,
    background: '#0A041B',
    padding: '32px 24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 69px)',
    borderTop: '1px solid rgba(139, 92, 246, 0.1)',
  };

  const mobileLogoContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    paddingBottom: '20px',
    borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
    marginBottom: '28px',
  };

  const mobileLogoImageStyle: React.CSSProperties = {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    objectFit: 'cover',
  };

  const mobileLinksContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: 1,
  };

  const mobileLinkStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    textAlign: 'left',
    fontSize: '1.1rem',
    fontWeight: 500,
    fontFamily: "'Inter', sans-serif",
    color: '#e5e7eb',
    background: 'rgba(139, 92, 246, 0.05)',
    border: '1px solid rgba(139, 92, 246, 0.08)',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    padding: '16px 20px',
    width: '100%',
  };

  const mobileBottomStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    paddingTop: '24px',
    borderTop: '1px solid rgba(139, 92, 246, 0.1)',
    marginTop: 'auto',
  };

  const mobileGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
  };

  const mobileSupportBtnStyle: React.CSSProperties = {
    padding: '16px',
    textAlign: 'center',
    fontSize: '0.95rem',
    fontWeight: 500,
    color: '#c4b5fd',
    background: 'rgba(139, 92, 246, 0.1)',
    borderRadius: '12px',
    border: '1px solid rgba(139, 92, 246, 0.15)',
    textDecoration: 'none',
    display: 'block',
    fontFamily: "'Inter', sans-serif",
  };

  const mobileLaunchBtnStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    padding: '18px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    color: 'white',
    fontWeight: 600,
    fontFamily: "'Inter', sans-serif",
    borderRadius: '12px',
    textDecoration: 'none',
    boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)',
    fontSize: '1rem',
  };

  return (
    <>
      <header style={headerStyle}>
        <div style={containerStyle}>
          {/* Logo */}
          <a 
            href="#" 
            style={logoContainerStyle} 
            onClick={(e) => { 
              e.preventDefault(); 
              onScrollTo('hero');
              setIsOpen(false);
            }}
          >
            <div 
              style={logoImageContainerStyle}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(139, 92, 246, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.3)';
              }}
            >
              <img 
                src="/logo.png" 
                alt="GHOSTwire" 
                style={logoImageStyle}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerHTML = '<span style="color: white; font-size: 24px;">👻</span>';
                  }
                }}
              />
            </div>
            <span style={logoTextStyle}>
              GHOST<span style={logoAccentStyle}>wire</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav style={navStyle}>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.action)}
                style={navLinkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#c4b5fd';
                  e.currentTarget.style.background = 'none';
                }}
              >
                <span style={navNumberStyle}>{link.num}</span>
                {link.label}
              </button>
            ))}
            <a
              href="https://docs.ghostwirebot.tech/"
              target="_blank"
              rel="noreferrer"
              style={docsLinkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#c4b5fd';
                e.currentTarget.style.background = 'none';
              }}
            >
              <span style={navNumberStyle}>06</span>
              Docs
              <ArrowUpRight size={14} style={{ color: '#64748b' }} />
            </a>
          </nav>

          {/* Desktop CTA */}
          <div style={desktopCtaStyle}>
            <a 
              href="https://t.me/ghost_wirebot" 
              target="_blank" 
              rel="noreferrer" 
              style={supportBtnStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
              }}
            >
              <MessageCircle size={16} style={{ color: '#8b5cf6' }} />
              Support
            </a>
            <a
              href="https://t.me/ghost_wirebot"
              target="_blank"
              rel="noreferrer"
              style={startBtnStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 92, 246, 0.3)';
              }}
            >
              <Zap size={16} />
              <span>Start Sniping</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={mobileMenuBtnStyle}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={mobileDrawerStyle}
          >
            <div>
              {/* Mobile Logo */}
              <div style={mobileLogoContainerStyle}>
                <img 
                  src="/logo.png" 
                  alt="GHOSTwire" 
                  style={mobileLogoImageStyle}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span style={logoTextStyle}>
                  GHOST<span style={logoAccentStyle}>wire</span>
                </span>
              </div>

              {/* Mobile Links */}
              <div style={mobileLinksContainerStyle}>
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.action)}
                    style={mobileLinkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(139, 92, 246, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.08)';
                    }}
                  >
                    <span style={navNumberStyle}>{link.num}</span>
                    {link.label}
                  </button>
                ))}
                <a
                  href="https://docs.ghostwirebot.tech/"
                  target="_blank"
                  rel="noreferrer"
                  style={mobileLinkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(139, 92, 246, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.08)';
                  }}
                >
                  <span style={navNumberStyle}>06</span>
                  Docs
                  <ArrowUpRight size={18} style={{ color: '#64748b', marginLeft: 'auto' }} />
                </a>
              </div>
            </div>

            {/* Mobile Bottom Actions */}
            <div style={mobileBottomStyle}>
              <div style={mobileGridStyle}>
                <a
                  href="https://t.me/ghost_wirebot"
                  target="_blank"
                  rel="noreferrer"
                  style={mobileSupportBtnStyle}
                >
                  💬 Support
                </a>
                <a
                  href="https://x.com/ghostwirebot_?s=21"
                  target="_blank"
                  rel="noreferrer"
                  style={mobileSupportBtnStyle}
                >
                  𝕏 Twitter
                </a>
              </div>
              <a
                href="https://t.me/ghost_wirebot"
                target="_blank"
                rel="noreferrer"
                style={mobileLaunchBtnStyle}
              >
                🚀 Launch Bot
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          @media (max-width: 768px) {
            body {
              padding-top: 69px;
            }
          }
          @media (min-width: 769px) {
            body {
              padding-top: 80px;
            }
          }
          body.menu-open {
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
}