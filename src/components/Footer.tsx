import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Copy, Check, MessageSquare, Terminal } from 'lucide-react';

export default function Footer() {
  const [copiedCode, setCopiedCode] = useState(false);

  const quickStartSteps = [
    'Open Telegram and search for @ghostwire_bot',
    'Send command /start to create your secure wallet',
    'Copy your custom derived on-chain SOL address',
    'Deposit SOL to your balance (minimum 0.05 recommended)',
    'Type `/add @channelName` or copy invite pins',
    'Bot is ready! Sitting back to watch snipes'
  ];

  const handleCopyCode = () => {
    const rawTerminal = `1. Open Telegram t.me/ghostwire_bot\n2. Send /start\n3. Copy your wallet address\n4. Fund with SOL\n5. Add channel via /add\n6. Start sniping!`;
    navigator.clipboard.writeText(rawTerminal);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const footerStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.8)',
    paddingTop: '80px',
    paddingBottom: '32px',
    borderTop: '1px solid #e2e8f0',
    position: 'relative',
    overflow: 'hidden',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 10,
  };

  const mainGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '48px',
    alignItems: 'start',
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: '64px',
  };

  const joinColStyle: React.CSSProperties = {
    gridColumn: 'span 5',
    textAlign: 'left',
  };

  const joinTitleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
    fontWeight: 900,
    color: '#0f172a',
    lineHeight: 1.2,
    marginBottom: '24px',
  };

  const gradientTextStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const joinDescStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#475569',
    lineHeight: 1.625,
    marginBottom: '24px',
  };

  const joinButtonStyle: React.CSSProperties = {
    padding: '16px 24px',
    borderRadius: '12px',
    background: '#8b5cf6',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    transition: 'all 0.2s',
  };

  const terminalColStyle: React.CSSProperties = {
    gridColumn: 'span 7',
    width: '100%',
  };

  const terminalStyle: React.CSSProperties = {
    background: '#f1f5f9',
    border: '1px solid #cbd5e1',
    borderRadius: '16px',
    padding: '24px',
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
    paddingBottom: '14px',
    marginBottom: '16px',
  };

  const terminalHeaderLeftStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const terminalTitleStyle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: 600,
    color: '#334155',
  };

  const copyButtonStyle: React.CSSProperties = {
    padding: '6px 8px',
    background: '#e2e8f0',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    fontSize: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  };

  const terminalContentStyle: React.CSSProperties = {
    fontSize: '11px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    color: '#334155',
  };

  const terminalLineStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
  };

  const stepNumberStyle: React.CSSProperties = {
    color: '#8b5cf6',
    flexShrink: 0,
  };

  const stepTextStyle: React.CSSProperties = {
    color: '#475569',
    lineHeight: 1.4,
  };

  const footerNavGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '40px',
    padding: '48px 0',
    textAlign: 'left',
  };

  const brandColStyle: React.CSSProperties = {
    gridColumn: 'span 5',
  };

  const logoContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
    marginBottom: '16px',
  };

  const logoSymbolStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  };

  const logoTextStyle: React.CSSProperties = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 900,
    fontSize: '1.25rem',
    letterSpacing: '0.05em',
    color: '#0f172a',
  };

  const brandDescStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#64748b',
    maxWidth: '320px',
    lineHeight: 1.5,
  };

  const linksColStyle: React.CSSProperties = {
    gridColumn: 'span 3',
  };

  const linksTitleStyle: React.CSSProperties = {
    fontSize: '12px',
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
    gap: '10px',
  };

  const linkStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#64748b',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    transition: 'color 0.2s',
  };

  const contactColStyle: React.CSSProperties = {
    gridColumn: 'span 4',
  };

  const contactDescStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#64748b',
    lineHeight: 1.5,
    marginBottom: '8px',
  };

  const emailStyle: React.CSSProperties = {
    fontSize: '12px',
    fontFamily: 'monospace',
    color: '#8b5cf6',
    textDecoration: 'underline',
  };

  const copyrightStyle: React.CSSProperties = {
    borderTop: '1px solid #e2e8f0',
    paddingTop: '32px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
    fontSize: '12px',
    color: '#64748b',
  };

  const policyLinksStyle: React.CSSProperties = {
    display: 'flex',
    gap: '24px',
  };

  return (
    <footer style={footerStyle} id="quickstart">
      {/* Glow Effects */}
      <div style={{ position: 'absolute', bottom: '-10%', right: '10%', width: '384px', height: '384px', background: 'rgba(139, 92, 246, 0.05)', borderRadius: '50%', filter: 'blur(110px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40px', left: '10%', width: '320px', height: '320px', background: 'rgba(6, 182, 212, 0.05)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div style={containerStyle}>
        {/* Main Banner */}
        <div style={mainGridStyle}>
          {/* Join Call */}
          <div style={joinColStyle}>
            <h2 style={joinTitleStyle}>
              Join the trading <br />
              <span style={gradientTextStyle}>community on Telegram</span>
            </h2>
            <p style={joinDescStyle}>
              Connect with fellow Solana snipers. Stay updated with token updates, claim priority referral pins, and ask our developer squad questions relative to on-chain automation.
            </p>
            <a
              href="https://t.me/ghostwire_bot"
              target="_blank"
              rel="noreferrer"
              style={joinButtonStyle}
            >
              <MessageSquare size={16} />
              <span>Join official Telegram Channel</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Terminal */}
          <div style={terminalColStyle}>
            <div style={terminalStyle}>
              <div style={terminalHeaderStyle}>
                <div style={terminalHeaderLeftStyle}>
                  <Terminal size={18} style={{ color: '#8b5cf6' }} />
                  <span style={terminalTitleStyle}>GHOSTwire Quick Onboarding Terminal</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  style={copyButtonStyle}
                >
                  {copiedCode ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                  {copiedCode ? 'Copied' : 'Copy Codes'}
                </button>
              </div>

              <div style={terminalContentStyle}>
                <p style={{ color: '#8b5cf6' }}>// Quick start Solana sniping (Under 5 minutes)</p>
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
                <span style={{ fontSize: '20px' }}>👻</span>
              </div>
              <span style={logoTextStyle}>GHOST<span style={{ color: '#8b5cf6' }}>wire</span></span>
            </a>
            <p style={brandDescStyle}>
              Leading decentralized blockchain sniper utilities for Solana trades. Speed is our metric, self-custody is our core. Auto-sniping and profit goals.
            </p>
          </div>

          {/* Links */}
          <div style={linksColStyle}>
            <h4 style={linksTitleStyle}>Protocol links</h4>
            <div style={linksContainerStyle}>
              <a href="https://t.me/ghostwire_bot" target="_blank" rel="noreferrer" style={linkStyle}>
                Launch Telegram Bot <ArrowUpRight size={12} />
              </a>
              <a href="https://scrap-docs.vercel.app/" target="_blank" rel="noreferrer" style={linkStyle}>
                Technical Documentation <ArrowUpRight size={12} />
              </a>
              <a href="https://t.me/ghostwire_bot" target="_blank" rel="noreferrer" style={linkStyle}>
                Helpdesk & Troubleshooting <ArrowUpRight size={12} />
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
              <a href="mailto:support@ghostwire.win" style={emailStyle}>support@ghostwire.win</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={copyrightStyle}>
          <span>© 2026 GHOSTwire Solana Sniper Bot. All rights reserved.</span>
          <div style={policyLinksStyle}>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Terms of Operations</a>
          </div>
        </div>
      </div>
    </footer>
  );
}