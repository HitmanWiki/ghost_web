import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

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
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #e2e8f0',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const logoContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const logoImageContainerStyle: React.CSSProperties = {
    width: '36px',
    height: '36px',
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
    fontSize: '1.25rem',
    letterSpacing: '0.025em',
    color: '#0f172a',
  };

  const navStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  };

  const navLinkStyle: React.CSSProperties = {
    fontSize: '12px',
    fontFamily: 'monospace',
    color: '#475569',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'color 0.2s',
  };

  const navNumberStyle: React.CSSProperties = {
    fontSize: '10px',
    color: '#8b5cf6',
    fontWeight: 'bold',
  };

  const docsLinkStyle: React.CSSProperties = {
    fontSize: '12px',
    fontFamily: 'monospace',
    color: '#475569',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'color 0.2s',
  };

  const desktopCtaStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  };

  const supportBtnStyle: React.CSSProperties = {
    padding: '6px 14px',
    borderRadius: '12px',
    background: '#f1f5f9',
    border: '1px solid #e2e8f0',
    fontSize: '12px',
    fontFamily: 'monospace',
    fontWeight: 500,
    color: '#334155',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    transition: 'all 0.2s',
  };

  const startBtnStyle: React.CSSProperties = {
    padding: '10px 18px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    color: 'white',
    fontSize: '12px',
    fontWeight: 600,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    transition: 'all 0.2s',
  };

  const mobileMenuBtnStyle: React.CSSProperties = {
    display: 'none',
    padding: '8px',
    borderRadius: '8px',
    background: '#f1f5f9',
    border: '1px solid #e2e8f0',
    color: '#334155',
    cursor: 'pointer',
  };

  const mobileDrawerStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    top: '69px',
    zIndex: 40,
    background: 'white',
    padding: '32px 24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    gap: '24px',
  };

  const mobileLinkStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    textAlign: 'left',
    fontSize: '1.125rem',
    fontWeight: 500,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    color: '#1e293b',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s',
  };

  const mobileBottomStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    paddingTop: '24px',
    borderTop: '1px solid #e2e8f0',
  };

  const mobileGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
  };

  const mobileSupportBtnStyle: React.CSSProperties = {
    padding: '14px',
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: 500,
    color: '#334155',
    background: '#f1f5f9',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    textDecoration: 'none',
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
  };

  return (
    <>
      <header style={headerStyle}>
        <div style={containerStyle}>
          {/* Logo */}
          <a href="#" style={logoContainerStyle} onClick={(e) => { e.preventDefault(); onScrollTo('hero'); }}>
            <div style={logoImageContainerStyle}>
              <img 
                src="/logo.png" 
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
                {link.label}
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
              <span style={navNumberStyle}>05</span>
              Docs
              <ArrowUpRight size={12} style={{ color: '#64748b' }} />
            </a>
          </nav>

          {/* Desktop CTA */}
          <div style={desktopCtaStyle}>
            <a 
              href="https://t.me/ghostwire_bot" 
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
              <MessageCircle size={14} style={{ color: '#8b5cf6' }} />
              Support
            </a>
            <a
              href="https://t.me/ghostwire_bot"
              target="_blank"
              rel="noreferrer"
              style={startBtnStyle}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
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
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={mobileDrawerStyle}
          >
            <div>
              {/* Mobile Logo */}
              <div style={mobileLogoContainerStyle}>
                <img 
                  src="/logo.png" 
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
                >
                  <span style={navNumberStyle}>05</span>
                  Docs
                  <ArrowUpRight size={16} style={{ color: '#64748b' }} />
                </a>
              </div>
            </div>

            {/* Mobile Bottom Actions */}
            <div style={mobileBottomStyle}>
              <div style={mobileGridStyle}>
                <a
                  href="https://t.me/ghostwire_bot"
                  target="_blank"
                  rel="noreferrer"
                  style={mobileSupportBtnStyle}
                >
                  Telegram Support
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  style={mobileSupportBtnStyle}
                >
                  X (Twitter)
                </a>
              </div>
              <a
                href="https://t.me/ghostwire_bot"
                target="_blank"
                rel="noreferrer"
                style={mobileLaunchBtnStyle}
              >
                Launch Bot Interface
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}