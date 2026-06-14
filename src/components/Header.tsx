import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const navLinks = [
    { num: '01', label: 'Home', action: 'hero' },
    { num: '02', label: 'Features', action: 'features' },
    { num: '03', label: '$GHOST', action: 'token' },
    { num: '04', label: 'How It Works', action: 'demo' },
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
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #e2e8f0',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: isMobile ? '12px 16px' : isTablet ? '14px 24px' : '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const logoContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '8px' : '12px',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const logoImageContainerStyle: React.CSSProperties = {
    width: isMobile ? '32px' : '36px',
    height: isMobile ? '32px' : '36px',
    borderRadius: '50%',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 15px -3px rgba(139, 92, 246, 0.25)',
    transition: 'transform 0.3s',
  };

  const logoImageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const logoTextStyle: React.CSSProperties = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 700,
    fontSize: isMobile ? '1rem' : '1.25rem',
    letterSpacing: '0.025em',
    color: '#0f172a',
  };

  const navStyle: React.CSSProperties = {
    display: isMobile ? 'none' : 'flex',
    alignItems: 'center',
    gap: isTablet ? '16px' : '32px',
  };

  const navLinkStyle: React.CSSProperties = {
    fontSize: isTablet ? '10px' : '12px',
    fontFamily: 'monospace',
    color: '#475569',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    transition: 'color 0.2s',
    padding: '8px 4px',
    whiteSpace: 'nowrap',
  };

  const navNumberStyle: React.CSSProperties = {
    fontSize: isTablet ? '8px' : '10px',
    color: '#8b5cf6',
    fontWeight: 'bold',
  };

  const docsLinkStyle: React.CSSProperties = {
    fontSize: isTablet ? '10px' : '12px',
    fontFamily: 'monospace',
    color: '#475569',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    transition: 'color 0.2s',
    padding: '8px 4px',
    whiteSpace: 'nowrap',
  };

  const desktopCtaStyle: React.CSSProperties = {
    display: isMobile ? 'none' : 'flex',
    alignItems: 'center',
    gap: isTablet ? '8px' : '16px',
  };

  const supportBtnStyle: React.CSSProperties = {
    padding: isTablet ? '4px 10px' : '6px 14px',
    borderRadius: '12px',
    background: '#f1f5f9',
    border: '1px solid #e2e8f0',
    fontSize: isTablet ? '10px' : '12px',
    fontFamily: 'monospace',
    fontWeight: 500,
    color: '#334155',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    textDecoration: 'none',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
  };

  const startBtnStyle: React.CSSProperties = {
    padding: isTablet ? '8px 14px' : '10px 18px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    color: 'white',
    fontSize: isTablet ? '10px' : '12px',
    fontWeight: 600,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    textDecoration: 'none',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
  };

  const mobileMenuBtnStyle: React.CSSProperties = {
    display: isMobile ? 'flex' : 'none',
    padding: '8px',
    borderRadius: '8px',
    background: '#f1f5f9',
    border: '1px solid #e2e8f0',
    color: '#334155',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '40px',
    minHeight: '40px',
  };

  const mobileDrawerStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    top: isMobile ? '57px' : '69px',
    zIndex: 40,
    background: 'white',
    padding: '24px 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 57px)',
  };

  const mobileLogoContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingBottom: '16px',
    borderBottom: '1px solid #e2e8f0',
    marginBottom: '24px',
  };

  const mobileLogoImageStyle: React.CSSProperties = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const mobileLinksContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    flex: 1,
  };

  const mobileLinkStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textAlign: 'left',
    fontSize: '1rem',
    fontWeight: 500,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    color: '#1e293b',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s',
    padding: '12px 8px',
    width: '100%',
  };

  const mobileBottomStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    paddingTop: '24px',
    borderTop: '1px solid #e2e8f0',
    marginTop: 'auto',
  };

  const mobileGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
  };

  const mobileSupportBtnStyle: React.CSSProperties = {
    padding: '14px',
    textAlign: 'center',
    fontSize: '13px',
    fontWeight: 500,
    color: '#334155',
    background: '#f1f5f9',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    textDecoration: 'none',
    display: 'block',
  };

  const mobileLaunchBtnStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    padding: '16px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    color: 'white',
    fontWeight: 600,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    borderRadius: '12px',
    textDecoration: 'none',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    fontSize: '14px',
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
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img 
                src="/logo.jpg" 
                alt="GHOSTwire Logo" 
                style={logoImageStyle}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerHTML = '<span style="color: white; font-size: 18px;">👻</span>';
                  }
                }}
              />
            </div>
            <span style={logoTextStyle}>
              GHOST<span style={{ color: '#8b5cf6' }}>wire</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav style={navStyle}>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.action)}
                style={navLinkStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = '#8b5cf6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
              >
                <span style={navNumberStyle}>{link.num}</span>
                {!isTablet && link.label}
                {isTablet && link.label === 'How It Works' && 'Demo'}
                {isTablet && link.label !== 'How It Works' && link.label}
              </button>
            ))}
            <a
              href="https://scrap-docs.vercel.app/"
              target="_blank"
              rel="noreferrer"
              style={docsLinkStyle}
              onMouseEnter={(e) => e.currentTarget.style.color = '#8b5cf6'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
            >
              <span style={navNumberStyle}>06</span>
              Docs
              <ArrowUpRight size={isTablet ? 10 : 12} style={{ color: '#64748b' }} />
            </a>
          </nav>

          {/* Desktop CTA */}
          <div style={desktopCtaStyle}>
            <a 
              href="https://t.me/@ghowr_bot" 
              target="_blank" 
              rel="noreferrer" 
              style={supportBtnStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e2e8f0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f1f5f9';
              }}
            >
              <MessageCircle size={isTablet ? 12 : 14} style={{ color: '#8b5cf6' }} />
              {!isTablet && 'Support'}
              {isTablet && 'Help'}
            </a>
            <a
              href="https://t.me/@ghowr_bot"
              target="_blank"
              rel="noreferrer"
              style={startBtnStyle}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <span>{isTablet ? 'Trade' : 'Start Sniping'}</span>
              <ArrowUpRight size={isTablet ? 12 : 16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={mobileMenuBtnStyle}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
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
                  src="/logo.jpg" 
                  alt="GHOSTwire Logo" 
                  style={mobileLogoImageStyle}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span style={logoTextStyle}>
                  GHOST<span style={{ color: '#8b5cf6' }}>wire</span>
                </span>
              </div>

              {/* Mobile Links */}
              <div style={mobileLinksContainerStyle}>
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.action)}
                    style={mobileLinkStyle}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8b5cf6'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#1e293b'}
                  >
                    <span style={navNumberStyle}>{link.num}</span>
                    {link.label}
                  </button>
                ))}
                <a
                  href="https://scrap-docs.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  style={mobileLinkStyle}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#8b5cf6'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#1e293b'}
                >
                  <span style={navNumberStyle}>06</span>
                  Docs
                  <ArrowUpRight size={16} style={{ color: '#64748b' }} />
                </a>
              </div>
            </div>

            {/* Mobile Bottom Actions */}
            <div style={mobileBottomStyle}>
              <div style={mobileGridStyle}>
                <a
                  href="https://t.me/@ghowr_bot"
                  target="_blank"
                  rel="noreferrer"
                  style={mobileSupportBtnStyle}
                >
                  💬 Support
                </a>
                <a
                  href="https://x.com/GhostWire_bot"
                  target="_blank"
                  rel="noreferrer"
                  style={mobileSupportBtnStyle}
                >
                  𝕏 Twitter
                </a>
              </div>
              <a
                href="https://t.me/@ghowr_bot"
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

      {/* Add styles for mobile improvements */}
      <style>
        {`
          @media (max-width: 768px) {
            body {
              padding-top: 57px;
            }
          }
          
          @media (min-width: 769px) and (max-width: 1024px) {
            body {
              padding-top: 69px;
            }
          }
          
          @media (min-width: 1025px) {
            body {
              padding-top: 73px;
            }
          }
          
          /* Prevent body scroll when mobile menu is open */
          body.menu-open {
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
}