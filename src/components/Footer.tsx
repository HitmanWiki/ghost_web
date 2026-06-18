import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Copy, Check, MessageSquare, Terminal, Sparkles, Github, Twitter, Send, Shield, BookOpen, X } from 'lucide-react';

export default function Footer() {
  const [copiedCode, setCopiedCode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

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
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
  };

  // Modal Styles
  const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(8px)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const modalContentStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1a0a2e, #0A041B)',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    borderRadius: '20px',
    maxWidth: '720px',
    width: '100%',
    maxHeight: '80vh',
    overflowY: 'auto',
    padding: 'clamp(24px, 4vw, 40px)',
    position: 'relative',
    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
  };

  const modalCloseStyle: React.CSSProperties = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'rgba(139, 92, 246, 0.1)',
    border: '1px solid rgba(139, 92, 246, 0.15)',
    borderRadius: '10px',
    color: '#a78bfa',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const modalTitleStyle: React.CSSProperties = {
    fontSize: 'clamp(24px, 3vw, 32px)',
    fontWeight: 800,
    fontFamily: "'Inter', sans-serif",
    color: '#ffffff',
    marginBottom: '20px',
    letterSpacing: '-0.02em',
  };

  const modalTextStyle: React.CSSProperties = {
    fontSize: 'clamp(14px, 1.2vw, 16px)',
    color: '#c4b5fd',
    lineHeight: 1.8,
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
  };

  const modalSubTitleStyle: React.CSSProperties = {
    fontSize: 'clamp(16px, 1.5vw, 18px)',
    fontWeight: 700,
    color: '#ffffff',
    marginTop: '24px',
    marginBottom: '12px',
    fontFamily: "'Inter', sans-serif",
  };

  // Privacy Policy Content
  const PrivacyPolicyContent = () => (
    <>
      <h2 style={modalTitleStyle}>Privacy Policy</h2>
      <p style={modalTextStyle}>
        <strong>Last Updated:</strong> June 2026
      </p>
      
      <h3 style={modalSubTitleStyle}>1. Introduction</h3>
      <p style={modalTextStyle}>
        GHOSTwire ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Telegram bot and related services.
      </p>
      
      <h3 style={modalSubTitleStyle}>2. Information We Collect</h3>
      <p style={modalTextStyle}>
        <strong>Telegram User Data:</strong> We collect your Telegram ID, username, and messages sent to the bot for the purpose of providing trading services.
      </p>
      <p style={modalTextStyle}>
        <strong>Wallet Data:</strong> We generate and manage derived Solana wallets. Private keys are never stored on our servers — they are derived from your Telegram ID using cryptographic algorithms.
      </p>
      <p style={modalTextStyle}>
        <strong>Transaction Data:</strong> We record transaction history, token swaps, and trading activity for portfolio tracking and analytics.
      </p>
      
      <h3 style={modalSubTitleStyle}>3. How We Use Your Information</h3>
      <p style={modalTextStyle}>
        • To provide and maintain our trading bot services<br />
        • To execute trades and manage wallets<br />
        • To track portfolio performance and P&L<br />
        • To process referral rewards and commissions<br />
        • To improve and optimize our services
      </p>
      
      <h3 style={modalSubTitleStyle}>4. Data Security</h3>
      <p style={modalTextStyle}>
        We implement industry-standard security measures to protect your data. Your private keys are never stored on our servers — they are derived on-the-fly from your Telegram ID using secure cryptographic methods. All sensitive data is encrypted in transit and at rest.
      </p>
      
      <h3 style={modalSubTitleStyle}>5. Data Sharing</h3>
      <p style={modalTextStyle}>
        We do not sell, trade, or rent your personal information to third parties. We may share data with:
      </p>
      <p style={modalTextStyle}>
        • <strong>Jupiter API:</strong> For executing trades (no personal data shared)<br />
        • <strong>Solana blockchain:</strong> All transactions are public on-chain
      </p>
      
      <h3 style={modalSubTitleStyle}>6. Your Rights</h3>
      <p style={modalTextStyle}>
        You have the right to:<br />
        • Access your personal data<br />
        • Request deletion of your data<br />
        • Opt-out of marketing communications<br />
        • Export your transaction history
      </p>
      
      <h3 style={modalSubTitleStyle}>7. Contact Us</h3>
      <p style={modalTextStyle}>
        For privacy-related questions, contact us at: <a href="mailto:support@ghostwire.tech" style={{ color: '#a78bfa' }}>support@ghostwire.tech</a>
      </p>
    </>
  );

  // Terms of Operations Content
  const TermsContent = () => (
    <>
      <h2 style={modalTitleStyle}>Terms of Operations</h2>
      <p style={modalTextStyle}>
        <strong>Last Updated:</strong> June 2026
      </p>
      
      <h3 style={modalSubTitleStyle}>1. Acceptance of Terms</h3>
      <p style={modalTextStyle}>
        By using GHOSTwire, you agree to these Terms of Operations. If you do not agree, please do not use our services.
      </p>
      
      <h3 style={modalSubTitleStyle}>2. Description of Service</h3>
      <p style={modalTextStyle}>
        GHOSTwire is a Telegram-based bot that provides automated Solana token trading, channel monitoring, portfolio tracking, and referral services.
      </p>
      
      <h3 style={modalSubTitleStyle}>3. User Responsibilities</h3>
      <p style={modalTextStyle}>
        • You are responsible for your wallet security and private keys<br />
        • You must comply with all applicable laws and regulations<br />
        • You are responsible for any trades made using your account<br />
        • You must not use the bot for illegal activities
      </p>
      
      <h3 style={modalSubTitleStyle}>4. Risk Disclosure</h3>
      <p style={modalTextStyle}>
        Trading cryptocurrencies carries significant risk. You may lose some or all of your investment. GHOSTwire is a tool, not a financial advisor. All trades are executed at your own risk.
      </p>
      
      <h3 style={modalSubTitleStyle}>5. Fees</h3>
      <p style={modalTextStyle}>
        GHOSTwire charges a 0.1% trading fee on all executed swaps. Referral rewards earn 20% of trading fees from referred users. All fees are transparent and disclosed.
      </p>
      
      <h3 style={modalSubTitleStyle}>6. Limitation of Liability</h3>
      <p style={modalTextStyle}>
        GHOSTwire is provided "as is" without warranties. We are not liable for any losses, damages, or issues arising from the use of our services. We do not guarantee trading profits.
      </p>
      
      <h3 style={modalSubTitleStyle}>7. Termination</h3>
      <p style={modalTextStyle}>
        We reserve the right to terminate or suspend access to our services at any time, with or without notice, for any reason.
      </p>
      
      <h3 style={modalSubTitleStyle}>8. Changes to Terms</h3>
      <p style={modalTextStyle}>
        We may update these Terms at any time. Continued use of GHOSTwire constitutes acceptance of the updated Terms.
      </p>
      
      <h3 style={modalSubTitleStyle}>9. Contact</h3>
      <p style={modalTextStyle}>
        For questions about these Terms, contact: <a href="mailto:support@ghostwire.tech" style={{ color: '#a78bfa' }}>support@ghostwire.tech</a>
      </p>
    </>
  );

  // Modal Component
  const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) => {
    if (!isOpen) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={modalOverlayStyle}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          style={modalContentStyle}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            style={modalCloseStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
            }}
          >
            <X size={20} />
          </button>
          {children}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <footer style={footerStyle} id="quickstart">
      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacyPolicy && (
          <Modal isOpen={showPrivacyPolicy} onClose={() => setShowPrivacyPolicy(false)} title="Privacy Policy">
            <PrivacyPolicyContent />
          </Modal>
        )}
      </AnimatePresence>

      {/* Terms of Operations Modal */}
      <AnimatePresence>
        {showTerms && (
          <Modal isOpen={showTerms} onClose={() => setShowTerms(false)} title="Terms of Operations">
            <TermsContent />
          </Modal>
        )}
      </AnimatePresence>

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
        {/* Main Banner - keep existing content */}
        <div style={mainGridStyle}>
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
              href="https://t.me/ghost_wirebot"
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
                href="https://t.me/ghost_wirebot" 
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
              {/* NEW: GitHub Link */}
              <a 
                href="https://github.com/GHOSTwire-tech" 
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
                <Github size={isMobile ? 16 : 18} />
                GitHub <ArrowUpRight size={isMobile ? 16 : 18} />
              </a>
            </div>
          </div>

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

        {/* Copyright with Clickable Policy Links */}
        <div style={copyrightStyle}>
          <span>© 2026 GHOSTwire Solana Sniper Bot. All rights reserved.</span>
          <div style={policyLinksStyle}>
            <button 
              onClick={() => setShowPrivacyPolicy(true)}
              style={policyLinkStyle}
              onMouseEnter={(e) => {
                if (!isMobile) e.currentTarget.style.color = '#a78bfa';
              }}
              onMouseLeave={(e) => {
                if (!isMobile) e.currentTarget.style.color = '#6b7280';
              }}
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setShowTerms(true)}
              style={policyLinkStyle}
              onMouseEnter={(e) => {
                if (!isMobile) e.currentTarget.style.color = '#a78bfa';
              }}
              onMouseLeave={(e) => {
                if (!isMobile) e.currentTarget.style.color = '#6b7280';
              }}
            >
              Terms of Operations
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}