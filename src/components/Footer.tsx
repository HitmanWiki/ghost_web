import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Copy, Check, MessageSquare, Terminal } from 'lucide-react';

export default function Footer() {
  const [copiedCode, setCopiedCode] = useState(false);
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

  const quickStartSteps = [
    'Open Telegram and search for @ghostwire_bot',
    'Send command /start to create your secure wallet',
    'Copy your custom derived on-chain SOL address',
    'Deposit SOL to your balance (minimum 0.05 recommended)',
    'Type `/add @channelName` or copy invite pins',
    'Bot is ready! Sitting back to watch snipes'
  ];

  const handleCopyCode = () => {
    const rawTerminal = `1. Open Telegram t.me/ghowr_bot\n2. Send /start\n3. Copy your wallet address\n4. Fund with SOL\n5. Add channel via /add\n6. Start sniping!`;
    navigator.clipboard.writeText(rawTerminal);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const footerStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.95)',
    paddingTop: isMobile ? 'clamp(48px, 10vw, 80px)' : 'clamp(60px, 8vw, 80px)',
    paddingBottom: isMobile ? 'clamp(24px, 5vw, 32px)' : 'clamp(28px, 4vw, 32px)',
    borderTop: '1px solid #e2e8f0',
    position: 'relative',
    overflow: 'hidden',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: isMobile ? '0 16px' : '0 24px',
    position: 'relative',
    zIndex: 10,
  };

  const mainGridStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? 'clamp(32px, 8vw, 48px)' : '48px',
    alignItems: 'flex-start',
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: isMobile ? 'clamp(40px, 8vw, 64px)' : '64px',
  };

  const joinColStyle: React.CSSProperties = {
    flex: isMobile ? 1 : 5,
    textAlign: 'left',
    width: '100%',
  };

  const joinTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? 'clamp(24px, 6vw, 30px)' : 'clamp(30px, 4vw, 36px)',
    fontWeight: 900,
    color: '#0f172a',
    lineHeight: 1.2,
    marginBottom: isMobile ? '16px' : '24px',
  };

  const gradientTextStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const joinDescStyle: React.CSSProperties = {
    fontSize: isMobile ? 'clamp(13px, 4vw, 14px)' : '14px',
    color: '#475569',
    lineHeight: 1.625,
    marginBottom: isMobile ? '20px' : '24px',
  };

  const joinButtonStyle: React.CSSProperties = {
    padding: isMobile ? 'clamp(12px, 4vw, 14px) clamp(16px, 5vw, 20px)' : '16px 24px',
    borderRadius: '12px',
    background: '#8b5cf6',
    color: 'white',
    fontSize: isMobile ? 'clamp(12px, 3.5vw, 13px)' : '14px',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    transition: 'all 0.2s',
    width: isMobile ? '100%' : 'auto',
    justifyContent: 'center',
  };

  const terminalColStyle: React.CSSProperties = {
    flex: isMobile ? 1 : 7,
    width: '100%',
  };

  const terminalStyle: React.CSSProperties = {
    background: '#f1f5f9',
    border: '1px solid #cbd5e1',
    borderRadius: '16px',
    padding: isMobile ? 'clamp(16px, 5vw, 20px)' : '24px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'left',
    fontFamily: 'monospace',
  };

  const terminalHeaderStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #cbd5e1',
    paddingBottom: isMobile ? '10px' : '14px',
    marginBottom: isMobile ? '12px' : '16px',
    flexWrap: isMobile ? 'wrap' : 'nowrap',
    gap: isMobile ? '12px' : '0',
  };

  const terminalHeaderLeftStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const terminalTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '10px' : '12px',
    fontWeight: 600,
    color: '#334155',
  };

  const copyButtonStyle: React.CSSProperties = {
    padding: isMobile ? '6px 12px' : '6px 8px',
    background: '#e2e8f0',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    fontSize: isMobile ? '11px' : '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  };

  const terminalContentStyle: React.CSSProperties = {
    fontSize: isMobile ? 'clamp(10px, 3vw, 11px)' : '11px',
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '8px' : '10px',
    color: '#334155',
  };

  const terminalLineStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    flexWrap: 'wrap',
  };

  const stepNumberStyle: React.CSSProperties = {
    color: '#8b5cf6',
    flexShrink: 0,
  };

  const stepTextStyle: React.CSSProperties = {
    color: '#475569',
    lineHeight: 1.4,
    flex: 1,
  };

  const footerNavGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(12, 1fr)' : 'repeat(12, 1fr)',
    gap: isMobile ? 'clamp(32px, 8vw, 40px)' : '40px',
    padding: isMobile ? 'clamp(32px, 8vw, 40px) 0' : '48px 0',
    textAlign: 'left',
  };

  const brandColStyle: React.CSSProperties = {
    gridColumn: isMobile ? 'auto' : 'span 5',
    width: '100%',
  };

  const logoContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
    marginBottom: '16px',
  };

  const logoSymbolStyle: React.CSSProperties = {
    width: isMobile ? '36px' : '40px',
    height: isMobile ? '36px' : '40px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  };

  const logoImageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const logoTextStyle: React.CSSProperties = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 900,
    fontSize: isMobile ? '1.125rem' : '1.25rem',
    letterSpacing: '0.05em',
    color: '#0f172a',
  };

  const brandDescStyle: React.CSSProperties = {
    fontSize: isMobile ? '11px' : '12px',
    color: '#64748b',
    maxWidth: isMobile ? '100%' : '320px',
    lineHeight: 1.5,
  };

  const linksColStyle: React.CSSProperties = {
    gridColumn: isMobile ? 'auto' : 'span 3',
    width: '100%',
  };

  const linksTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? '11px' : '12px',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '12px',
  };

  const linksContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '12px' : '10px',
  };

  const linkStyle: React.CSSProperties = {
    fontSize: isMobile ? 'clamp(11px, 3.5vw, 12px)' : '12px',
    color: '#64748b',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'color 0.2s',
    padding: isMobile ? '4px 0' : '0',
  };

  const contactColStyle: React.CSSProperties = {
    gridColumn: isMobile ? 'auto' : 'span 4',
    width: '100%',
  };

  const contactDescStyle: React.CSSProperties = {
    fontSize: isMobile ? 'clamp(11px, 3.5vw, 12px)' : '12px',
    color: '#64748b',
    lineHeight: 1.5,
    marginBottom: '8px',
  };

  const emailStyle: React.CSSProperties = {
    fontSize: isMobile ? 'clamp(11px, 3.5vw, 12px)' : '12px',
    fontFamily: 'monospace',
    color: '#8b5cf6',
    textDecoration: 'underline',
    wordBreak: 'break-all',
  };

  const copyrightStyle: React.CSSProperties = {
    borderTop: '1px solid #e2e8f0',
    paddingTop: isMobile ? 'clamp(24px, 6vw, 32px)' : '32px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: isMobile ? '12px' : '16px',
    fontSize: isMobile ? 'clamp(10px, 3vw, 11px)' : '12px',
    color: '#64748b',
    textAlign: isMobile ? 'center' : 'left',
  };

  const policyLinksStyle: React.CSSProperties = {
    display: 'flex',
    gap: isMobile ? '16px' : '24px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  return (
    <footer style={footerStyle} id="quickstart">
      {/* Glow Effects - hidden on mobile */}
      {!isMobile && (
        <>
          <div style={{ position: 'absolute', bottom: '-10%', right: '10%', width: '384px', height: '384px', background: 'rgba(139, 92, 246, 0.05)', borderRadius: '50%', filter: 'blur(110px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '40px', left: '10%', width: '320px', height: '320px', background: 'rgba(6, 182, 212, 0.05)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />
        </>
      )}

      <div style={containerStyle}>
        {/* Main Banner */}
        <div style={mainGridStyle}>
          {/* Join Call */}
          <div style={joinColStyle}>
            <h2 style={joinTitleStyle}>
              {isMobile ? 'Join the trading community on Telegram' : (
                <>
                  Join the trading <br />
                  <span style={gradientTextStyle}>community on Telegram</span>
                </>
              )}
            </h2>
            <p style={joinDescStyle}>
              Connect with fellow Solana snipers. Stay updated with token updates, claim priority referral pins, and ask our developer squad questions relative to on-chain automation.
            </p>
            <a
              href="https://t.me/ghowr_bot"
              target="_blank"
              rel="noreferrer"
              style={joinButtonStyle}
              onMouseEnter={(e) => {
                if (!isMobile) e.currentTarget.style.background = '#7c3aed';
              }}
              onMouseLeave={(e) => {
                if (!isMobile) e.currentTarget.style.background = '#8b5cf6';
              }}
            >
              <MessageSquare size={isMobile ? 14 : 16} />
              <span>{isMobile ? 'Join Telegram' : 'Join official Telegram Channel'}</span>
              <ArrowUpRight size={isMobile ? 14 : 16} />
            </a>
          </div>

          {/* Terminal */}
          <div style={terminalColStyle}>
            <div style={terminalStyle}>
              <div style={terminalHeaderStyle}>
                <div style={terminalHeaderLeftStyle}>
                  <Terminal size={isMobile ? 14 : 18} style={{ color: '#8b5cf6' }} />
                  <span style={terminalTitleStyle}>
                    {isMobile ? 'GHOSTwire Quick Start' : 'GHOSTwire Quick Onboarding Terminal'}
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  style={copyButtonStyle}
                  onMouseEnter={(e) => {
                    if (!isMobile) e.currentTarget.style.background = '#cbd5e1';
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) e.currentTarget.style.background = '#e2e8f0';
                  }}
                >
                  {copiedCode ? <Check size={12} style={{ color: '#10b981' }} /> : <Copy size={12} />}
                  {copiedCode ? 'Copied' : (isMobile ? 'Copy' : 'Copy Codes')}
                </button>
              </div>

              <div style={terminalContentStyle}>
                <p style={{ color: '#8b5cf6' }}>
                  {isMobile ? '// Quick start (Under 5 min)' : '// Quick start Solana sniping (Under 5 minutes)'}
                </p>
                {quickStartSteps.map((step, sIdx) => (
                  <div key={sIdx} style={terminalLineStyle}>
                    <span style={stepNumberStyle}>{sIdx + 1}.</span>
                    <span style={stepTextStyle}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div style={footerNavGridStyle}>
          {/* Brand */}
          <div style={brandColStyle}>
            <a href="#" style={logoContainerStyle}>
              <div style={logoSymbolStyle}>
                <img 
                  src="/logo.jpg" 
                  alt="GHOSTwire Logo" 
                  style={logoImageStyle}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerHTML = '<span style="font-size: 20px;">👻</span>';
                    }
                  }}
                />
              </div>
              <span style={logoTextStyle}>
                GHOST<span style={{ color: '#8b5cf6' }}>wire</span>
              </span>
            </a>
            <p style={brandDescStyle}>
              Leading decentralized blockchain sniper utilities for Solana trades. Speed is our metric, self-custody is our core. Auto-sniping and profit goals.
            </p>
          </div>

          {/* Links */}
          <div style={linksColStyle}>
            <h4 style={linksTitleStyle}>Protocol links</h4>
            <div style={linksContainerStyle}>
              <a 
                href="https://t.me/ghowr_bot" 
                target="_blank" 
                rel="noreferrer" 
                style={linkStyle}
                onMouseEnter={(e) => {
                  if (!isMobile) e.currentTarget.style.color = '#8b5cf6';
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) e.currentTarget.style.color = '#64748b';
                }}
              >
                Launch Telegram Bot <ArrowUpRight size={isMobile ? 10 : 12} />
              </a>
              <a 
                href="https://scrap-docs.vercel.app/" 
                target="_blank" 
                rel="noreferrer" 
                style={linkStyle}
                onMouseEnter={(e) => {
                  if (!isMobile) e.currentTarget.style.color = '#8b5cf6';
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) e.currentTarget.style.color = '#64748b';
                }}
              >
                Technical Documentation <ArrowUpRight size={isMobile ? 10 : 12} />
              </a>
              <a 
                href="https://t.me/ghowr_bot" 
                target="_blank" 
                rel="noreferrer" 
                style={linkStyle}
                onMouseEnter={(e) => {
                  if (!isMobile) e.currentTarget.style.color = '#8b5cf6';
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) e.currentTarget.style.color = '#64748b';
                }}
              >
                Helpdesk & Troubleshooting <ArrowUpRight size={isMobile ? 10 : 12} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div style={contactColStyle}>
            <h4 style={linksTitleStyle}>Contacts & Mail</h4>
            <p style={contactDescStyle}>
              For security vulnerability audits or licensing questions, contact our developer division:
            </p>
            <div>
              <a 
                href="mailto:support@ghostwire.tech" 
                style={emailStyle}
                onMouseEnter={(e) => {
                  if (!isMobile) e.currentTarget.style.color = '#7c3aed';
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) e.currentTarget.style.color = '#8b5cf6';
                }}
              >
                support@ghostwire.tech
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={copyrightStyle}>
          <span>© 2026 GHOSTwire Solana Sniper Bot. All rights reserved.</span>
          <div style={policyLinksStyle}>
            <a 
              href="#" 
              style={{ color: '#64748b', textDecoration: 'none' }}
              onMouseEnter={(e) => {
                if (!isMobile) e.currentTarget.style.color = '#8b5cf6';
              }}
              onMouseLeave={(e) => {
                if (!isMobile) e.currentTarget.style.color = '#64748b';
              }}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              style={{ color: '#64748b', textDecoration: 'none' }}
              onMouseEnter={(e) => {
                if (!isMobile) e.currentTarget.style.color = '#8b5cf6';
              }}
              onMouseLeave={(e) => {
                if (!isMobile) e.currentTarget.style.color = '#64748b';
              }}
            >
              Terms of Operations
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}