import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Copy, Check, MessageSquare, Terminal, Sparkles, Github, Twitter, Send, Shield, BookOpen } from 'lucide-react';

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
    'Bot is ready! Sit back and watch the snipes roll in'
  ];

  const handleCopyCode = () => {
    const rawTerminal = `1. Open Telegram t.me/ghowr_bot\n2. Send /start\n3. Copy your wallet address\n4. Fund with SOL\n5. Add channel via /add\n6. Start sniping!`;
    navigator.clipboard.writeText(rawTerminal);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const footerStyle: React.CSSProperties = {
    background: 'radial-gradient(ellipse at 20% 30%, #1a0a2e 0%, #0A041B 40%, #060012 100%)',
    paddingTop: isMobile ? 'clamp(48px, 10vw, 80px)' : 'clamp(60px, 8vw, 80px)',
    paddingBottom: isMobile ? 'clamp(24px, 5vw, 32px)' : 'clamp(28px, 4vw, 32px)',
    borderTop: '1px solid rgba(139, 92, 246, 0.08)',
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
    borderBottom: '1px solid rgba(139, 92, 246, 0.06)',
    paddingBottom: isMobile ? 'clamp(40px, 8vw, 64px)' : '64px',
  };

  const joinColStyle: React.CSSProperties = {
    flex: isMobile ? 1 : 5,
    textAlign: 'left',
    width: '100%',
  };

  const joinTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? 'clamp(28px, 6vw, 34px)' : 'clamp(32px, 4vw, 40px)',
    fontWeight: 900,
    fontFamily: "'Inter', sans-serif",
    color: '#ffffff',
    lineHeight: 1.2,
    marginBottom: isMobile ? '16px' : '24px',
    letterSpacing: '-0.02em',
  };

  const gradientTextStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #c084fc, #8b5cf6, #7c3aed)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const joinDescStyle: React.CSSProperties = {
    fontSize: isMobile ? 'clamp(15px, 4vw, 17px)' : 'clamp(16px, 1.2vw, 18px)',
    color: '#c4b5fd',
    lineHeight: 1.7,
    marginBottom: isMobile ? '20px' : '24px',
    fontWeight: 400,
    fontFamily: "'Inter', sans-serif",
  };

  const joinButtonStyle: React.CSSProperties = {
    padding: isMobile ? 'clamp(14px, 4vw, 16px) clamp(20px, 5vw, 28px)' : 'clamp(16px, 1.5vw, 18px) clamp(28px, 3vw, 36px)',
    borderRadius: '14px',
    background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    color: 'white',
    fontSize: isMobile ? 'clamp(14px, 3.5vw, 16px)' : 'clamp(16px, 1.2vw, 18px)',
    fontWeight: 700,
    fontFamily: "'Inter', sans-serif",
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    width: isMobile ? '100%' : 'auto',
    justifyContent: 'center',
    boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
  };

  const terminalColStyle: React.CSSProperties = {
    flex: isMobile ? 1 : 7,
    width: '100%',
  };

  const terminalStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(139, 92, 246, 0.08)',
    borderRadius: '16px',
    padding: isMobile ? 'clamp(16px, 5vw, 20px)' : '24px',
    boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'left',
    fontFamily: 'monospace',
    backdropFilter: 'blur(8px)',
  };

  const terminalHeaderStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgba(139, 92, 246, 0.06)',
    paddingBottom: isMobile ? '12px' : '14px',
    marginBottom: isMobile ? '12px' : '16px',
    flexWrap: isMobile ? 'wrap' : 'nowrap',
    gap: isMobile ? '12px' : '0',
  };

  const terminalHeaderLeftStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const terminalTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? 'clamp(11px, 2.5vw, 13px)' : 'clamp(13px, 1vw, 14px)',
    fontWeight: 600,
    fontFamily: "'Inter', sans-serif",
    color: '#e5e7eb',
  };

  const copyButtonStyle: React.CSSProperties = {
    padding: isMobile ? '8px 14px' : '8px 16px',
    background: 'rgba(139, 92, 246, 0.08)',
    border: '1px solid rgba(139, 92, 246, 0.1)',
    borderRadius: '10px',
    fontSize: isMobile ? 'clamp(11px, 2vw, 12px)' : 'clamp(12px, 0.8vw, 13px)',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: '#a78bfa',
  };

  const terminalContentStyle: React.CSSProperties = {
    fontSize: isMobile ? 'clamp(12px, 2.5vw, 14px)' : 'clamp(13px, 1vw, 14px)',
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '8px' : '10px',
    color: '#c4b5fd',
    fontFamily: "'Inter', sans-serif",
  };

  const terminalLineStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    flexWrap: 'wrap',
  };

  const stepNumberStyle: React.CSSProperties = {
    color: '#a78bfa',
    flexShrink: 0,
    fontWeight: 700,
    fontFamily: 'monospace',
  };

  const stepTextStyle: React.CSSProperties = {
    color: '#c4b5fd',
    lineHeight: 1.6,
    flex: 1,
    fontWeight: 400,
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
    gap: '14px',
    textDecoration: 'none',
    marginBottom: '16px',
  };

  const logoSymbolStyle: React.CSSProperties = {
    width: isMobile ? '44px' : '48px',
    height: isMobile ? '44px' : '48px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)',
    overflow: 'hidden',
    flexShrink: 0,
  };

  const logoImageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const logoTextStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 900,
    fontSize: isMobile ? 'clamp(20px, 4vw, 24px)' : 'clamp(24px, 2vw, 28px)',
    letterSpacing: '-0.02em',
    color: '#ffffff',
  };

  const logoAccentStyle: React.CSSProperties = {
    color: '#8b5cf6',
  };

  const brandDescStyle: React.CSSProperties = {
    fontSize: isMobile ? 'clamp(13px, 3vw, 14px)' : 'clamp(14px, 1vw, 15px)',
    color: '#c4b5fd',
    maxWidth: isMobile ? '100%' : '340px',
    lineHeight: 1.7,
    fontWeight: 400,
    fontFamily: "'Inter', sans-serif",
  };

  const linksColStyle: React.CSSProperties = {
    gridColumn: isMobile ? 'auto' : 'span 3',
    width: '100%',
  };

  const linksTitleStyle: React.CSSProperties = {
    fontSize: isMobile ? 'clamp(12px, 2.5vw, 14px)' : 'clamp(13px, 0.9vw, 14px)',
    fontFamily: 'monospace',
    fontWeight: 700,
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '16px',
  };

  const linksContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '14px' : '12px',
  };

  const linkStyle: React.CSSProperties = {
    fontSize: isMobile ? 'clamp(14px, 3vw, 15px)' : 'clamp(15px, 1vw, 16px)',
    color: '#c4b5fd',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    padding: isMobile ? '6px 0' : '0',
    fontWeight: 500,
    fontFamily: "'Inter', sans-serif",
  };

  const contactColStyle: React.CSSProperties = {
    gridColumn: isMobile ? 'auto' : 'span 4',
    width: '100%',
  };

  const contactDescStyle: React.CSSProperties = {
    fontSize: isMobile ? 'clamp(14px, 3vw, 15px)' : 'clamp(15px, 1vw, 16px)',
    color: '#c4b5fd',
    lineHeight: 1.7,
    marginBottom: '12px',
    fontWeight: 400,
    fontFamily: "'Inter', sans-serif",
  };

  const emailStyle: React.CSSProperties = {
    fontSize: isMobile ? 'clamp(14px, 3vw, 15px)' : 'clamp(15px, 1vw, 16px)',
    fontFamily: 'monospace',
    color: '#a78bfa',
    textDecoration: 'underline',
    wordBreak: 'break-all',
    fontWeight: 600,
    transition: 'all 0.3s ease',
  };

  const copyrightStyle: React.CSSProperties = {
    borderTop: '1px solid rgba(139, 92, 246, 0.06)',
    paddingTop: isMobile ? 'clamp(24px, 6vw, 32px)' : '32px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: isMobile ? '12px' : '16px',
    fontSize: isMobile ? 'clamp(12px, 2.5vw, 13px)' : 'clamp(13px, 0.8vw, 14px)',
    color: '#6b7280',
    textAlign: isMobile ? 'center' : 'left',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
  };

  const policyLinksStyle: React.CSSProperties = {
    display: 'flex',
    gap: isMobile ? '20px' : '28px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const policyLinkStyle: React.CSSProperties = {
    color: '#6b7280',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    fontWeight: 500,
    fontSize: isMobile ? 'clamp(12px, 2.5vw, 13px)' : 'clamp(13px, 0.8vw, 14px)',
    fontFamily: "'Inter', sans-serif",
  };

  return (
    <footer style={footerStyle} id="quickstart">
      {/* Glow Effects */}
      {!isMobile && (
        <>
          <div style={{
            position: 'absolute',
            bottom: '-10%',
            right: '10%',
            width: '384px',
            height: '384px',
            background: 'rgba(139, 92, 246, 0.04)',
            borderRadius: '50%',
            filter: 'blur(110px)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '10%',
            width: '320px',
            height: '320px',
            background: 'rgba(6, 182, 212, 0.03)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            pointerEvents: 'none',
          }} />
        </>
      )}

      {/* Grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(139, 92, 246, 0.04) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        opacity: 0.3,
        pointerEvents: 'none',
      }} />

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
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(139, 92, 246, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 92, 246, 0.3)';
                }
              }}
            >
              <MessageSquare size={isMobile ? 18 : 20} />
              <span>{isMobile ? 'Join Telegram' : 'Join official Telegram Channel'}</span>
              <ArrowUpRight size={isMobile ? 18 : 20} />
            </a>
          </div>

          {/* Terminal */}
          <div style={terminalColStyle}>
            <div style={terminalStyle}>
              <div style={terminalHeaderStyle}>
                <div style={terminalHeaderLeftStyle}>
                  <Terminal size={isMobile ? 18 : 20} style={{ color: '#a78bfa' }} />
                  <span style={terminalTitleStyle}>
                    {isMobile ? 'GHOSTwire Quick Start' : 'GHOSTwire Quick Onboarding Terminal'}
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  style={copyButtonStyle}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.background = 'rgba(139, 92, 246, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.1)';
                    }
                  }}
                >
                  {copiedCode ? <Check size={16} style={{ color: '#34d399' }} /> : <Copy size={16} />}
                  {copiedCode ? 'Copied!' : (isMobile ? 'Copy' : 'Copy Codes')}
                </button>
              </div>

              <div style={terminalContentStyle}>
                <p style={{ color: '#a78bfa', fontWeight: 600, fontSize: isMobile ? 'clamp(12px, 2.5vw, 14px)' : 'clamp(13px, 1vw, 14px)' }}>
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
                  src="/logo.png" 
                  alt="GHOSTwire Logo" 
                  style={logoImageStyle}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerHTML = '<span style="font-size: 24px; color: white;">👻</span>';
                    }
                  }}
                />
              </div>
              <span style={logoTextStyle}>
                GHOST<span style={logoAccentStyle}>wire</span>
              </span>
            </a>
            <p style={brandDescStyle}>
              Leading decentralized blockchain sniper utilities for Solana trades. Speed is our metric, self-custody is our core. Auto-sniping and profit goals.
            </p>
          </div>

          {/* Links */}
          <div style={linksColStyle}>
            <h4 style={linksTitleStyle}>Protocol Links</h4>
            <div style={linksContainerStyle}>
              <a 
                href="https://t.me/ghowr_bot" 
                target="_blank" 
                rel="noreferrer" 
                style={linkStyle}
                onMouseEnter={(e) => {
                  if (!isMobile) e.currentTarget.style.color = '#a78bfa';
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) e.currentTarget.style.color = '#c4b5fd';
                }}
              >
                Launch Telegram Bot <ArrowUpRight size={isMobile ? 16 : 18} />
              </a>
              <a 
                href="https://docs.ghostwirebot.tech/" 
                target="_blank" 
                rel="noreferrer" 
                style={linkStyle}
                onMouseEnter={(e) => {
                  if (!isMobile) e.currentTarget.style.color = '#a78bfa';
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) e.currentTarget.style.color = '#c4b5fd';
                }}
              >
                Technical Documentation <ArrowUpRight size={isMobile ? 16 : 18} />
              </a>
              <a 
                href="https://t.me/ghowr_bot" 
                target="_blank" 
                rel="noreferrer" 
                style={linkStyle}
                onMouseEnter={(e) => {
                  if (!isMobile) e.currentTarget.style.color = '#a78bfa';
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) e.currentTarget.style.color = '#c4b5fd';
                }}
              >
                Helpdesk & Troubleshooting <ArrowUpRight size={isMobile ? 16 : 18} />
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
                  if (!isMobile) e.currentTarget.style.color = '#8b5cf6';
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) e.currentTarget.style.color = '#a78bfa';
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
              style={policyLinkStyle}
              onMouseEnter={(e) => {
                if (!isMobile) e.currentTarget.style.color = '#a78bfa';
              }}
              onMouseLeave={(e) => {
                if (!isMobile) e.currentTarget.style.color = '#6b7280';
              }}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              style={policyLinkStyle}
              onMouseEnter={(e) => {
                if (!isMobile) e.currentTarget.style.color = '#a78bfa';
              }}
              onMouseLeave={(e) => {
                if (!isMobile) e.currentTarget.style.color = '#6b7280';
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