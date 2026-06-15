import { motion } from 'motion/react';
import { ArrowUpRight, Zap, Target, Lock, TrendingUp, ChevronRight, Copy, Check, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const [copiedText, setCopiedText] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const stats = [
    { label: 'Uptime', value: '24/7 Monitor', desc: 'Continuous active crawling', icon: Zap, color: '#06b6d4' },
    { label: 'Wallets', value: 'Up to 5', desc: 'Derived per account', icon: Target, color: '#8b5cf6' },
    { label: 'Ref Revenue', value: '20% Shares', desc: 'Trading fee commission', icon: TrendingUp, color: '#ec4899' },
    { label: 'Trading Fee', value: '0.05%', desc: 'Ultra-competitive pricing', icon: Lock, color: '#10b981' },
  ];

  const fullText = "Tokens instantly.";

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.substring(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 80);
    return () => clearInterval(typingInterval);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('t.me/ghowr_bot');
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  // Desktop widget style
  const desktopWidgetStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: isTablet ? '340px' : '390px',
    height: 'auto',
    minHeight: '580px',
    background: 'linear-gradient(135deg, #180C36, #0A041B)',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    borderRadius: '24px',
    padding: isTablet ? '20px' : '24px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  };

  // Mobile widget style (simplified)
  const mobileWidgetStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
    background: 'linear-gradient(135deg, #180C36, #0A041B)',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    borderRadius: '20px',
    padding: '20px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
  };

  // Desktop Widget Component
  const DesktopWidget = () => (
    <div style={desktopWidgetStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="/logo.jpg" 
              alt="GHOSTwire Logo" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.innerHTML = '<span style="color: white; font-size: 16px;">👻</span>';
                }
              }}
            />
          </div>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: '14px', letterSpacing: '1px', color: 'white' }}>GHOSTWIRE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#06b6d4' }} />
          <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#06b6d4' }}>SYSTEM: LIVE</span>
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '14px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '10px', textTransform: 'uppercase', fontFamily: 'monospace', color: '#9ca3af' }}>🚨 Automated Feed</span>
          <span style={{ fontSize: '9px', fontFamily: 'monospace', color: '#a78bfa', background: 'rgba(139,92,246,0.1)', borderRadius: '4px', padding: '2px 6px' }}>Alpha Group</span>
        </div>
        <p style={{ fontSize: '12px', color: '#e5e7eb', fontWeight: 600, marginBottom: '4px' }}>Contract Detected: GNL7M...</p>
        <p style={{ fontSize: '11px', color: '#9ca3af' }}>Processed through Jupiter aggregator route in 0.12s</p>
      </div>

      <div style={{ background: '#0F0824', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '16px', padding: '16px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '9px', textTransform: 'uppercase', fontFamily: 'monospace', color: '#9ca3af' }}>UNISOL / SOL</span>
            <h4 style={{ fontSize: '18px', fontFamily: 'monospace', fontWeight: 'bold', color: 'white' }}>$0.0418</h4>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '9px', display: 'block', textTransform: 'uppercase', fontFamily: 'monospace', color: '#9ca3af' }}>Live Profit</span>
            <span style={{ fontSize: '12px', fontFamily: 'monospace', fontWeight: 'bold', color: '#10b981' }}>+50.7%</span>
          </div>
        </div>
        <svg style={{ width: '100%', height: '64px' }} viewBox="0 0 100 30">
          <path d="M 0 25 Q 15 28 30 18 T 60 10 T 90 2 T 100 0" stroke="#8b5cf6" strokeWidth="2" fill="none" />
          <circle cx="90" cy="2" r="2.5" fill="#06b6d4" />
        </svg>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '16px' }}>
          <div style={{ padding: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textAlign: 'center' }}>
            <span style={{ color: '#9ca3af', display: 'block', fontSize: '10px' }}>BUY</span>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '10px' }}>0.10 SOL</span>
          </div>
          <div style={{ padding: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textAlign: 'center' }}>
            <span style={{ color: '#9ca3af', display: 'block', fontSize: '10px' }}>SELL Target</span>
            <span style={{ color: '#8b5cf6', fontWeight: 'bold', fontSize: '10px' }}>0.15 SOL (+50%)</span>
          </div>
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '14px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '10px', textTransform: 'uppercase', fontFamily: 'monospace', color: '#9ca3af' }}>Self Custody Wallet</span>
          <span style={{ fontSize: '10px', fontFamily: 'monospace', fontWeight: 'bold', color: '#a78bfa' }}>Wallet #1</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#d1d5db' }}>GnL9mQz...3kS4p</span>
          <span style={{ fontSize: '12px', fontFamily: 'monospace', fontWeight: 'bold', color: 'white' }}>1.55 SOL</span>
        </div>
      </div>

      <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', padding: '12px', fontFamily: 'monospace', fontSize: '9px', color: '#a78bfa' }}>
        <p>&gt; scanning telegram signals...</p>
        <p style={{ color: '#06b6d4' }}>&gt; match: CA `GNL7MQSzzkYQ75mXU4mNz...`</p>
        <p style={{ color: '#10b981' }}>&gt; Jupiter Swap executed (+50% TP Set)</p>
      </div>
    </div>
  );

  // Mobile Widget Component (simplified)
  const MobileWidget = () => (
    <div style={mobileWidgetStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="/logo.jpg" 
              alt="GHOSTwire Logo" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.innerHTML = '<span style="color: white; font-size: 16px;">👻</span>';
                }
              }}
            />
          </div>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: '16px', letterSpacing: '1px', color: 'white' }}>GHOSTWIRE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
          <span style={{ fontSize: '9px', fontFamily: 'monospace', color: '#10b981' }}>ACTIVE</span>
        </div>
      </div>

      <div style={{ background: '#0F0824', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '14px', padding: '14px', marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div>
            <span style={{ fontSize: '9px', textTransform: 'uppercase', fontFamily: 'monospace', color: '#9ca3af' }}>LUCY / SOL</span>
            <h4 style={{ fontSize: '16px', fontFamily: 'monospace', fontWeight: 'bold', color: 'white' }}>$0.0418</h4>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '8px', display: 'block', textTransform: 'uppercase', fontFamily: 'monospace', color: '#9ca3af' }}>P&L</span>
            <span style={{ fontSize: '11px', fontFamily: 'monospace', fontWeight: 'bold', color: '#10b981' }}>+50.7%</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <div style={{ padding: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', textAlign: 'center' }}>
            <span style={{ color: '#9ca3af', display: 'block', fontSize: '9px' }}>BUY</span>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '10px' }}>0.01 SOL</span>
          </div>
          <div style={{ padding: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', textAlign: 'center' }}>
            <span style={{ color: '#9ca3af', display: 'block', fontSize: '9px' }}>TARGET</span>
            <span style={{ color: '#8b5cf6', fontWeight: 'bold', fontSize: '10px' }}>0.015 SOL</span>
          </div>
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '12px', marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', fontFamily: 'monospace', color: '#9ca3af' }}>Wallet</span>
          <span style={{ fontSize: '9px', fontFamily: 'monospace', fontWeight: 'bold', color: '#a78bfa' }}>W1</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#d1d5db' }}>74BoTq...MFSL</span>
          <span style={{ fontSize: '10px', fontFamily: 'monospace', fontWeight: 'bold', color: 'white' }}>1.55 SOL</span>
        </div>
      </div>

      <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)', padding: '10px', fontFamily: 'monospace', fontSize: '8px', color: '#a78bfa' }}>
        <p>&gt; scanning signals...</p>
        <p style={{ color: '#06b6d4' }}>&gt; contract detected</p>
        <p style={{ color: '#10b981' }}>&gt; auto-buy executed</p>
      </div>
    </div>
  );

  return (
    <section style={{
      position: 'relative',
      paddingTop: isMobile ? 'clamp(80px, 15vw, 128px)' : 'clamp(96px, 10vw, 128px)',
      paddingBottom: isMobile ? 'clamp(40px, 8vw, 64px)' : 'clamp(48px, 6vw, 64px)',
      minHeight: isMobile ? 'auto' : '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #faf5ff 100%)',
      overflow: 'hidden'
    }} id="hero">
      {/* Background glows - hidden on mobile for performance */}
      {!isMobile && (
        <>
          <div style={{ position: 'absolute', top: '-10%', left: '10%', width: '500px', height: '500px', background: 'rgba(139, 92, 246, 0.05)', borderRadius: '50%', filter: 'blur(140px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '40%', right: '-10%', width: '600px', height: '600px', background: 'rgba(139, 92, 246, 0.03)', borderRadius: '50%', filter: 'blur(160px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '0%', left: '20%', width: '450px', height: '450px', background: 'rgba(6, 182, 212, 0.05)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />
        </>
      )}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        backgroundImage: 'radial-gradient(#c4b5fd 1px, transparent 1px)', 
        backgroundSize: isMobile ? '12px 12px' : '16px 16px', 
        opacity: 0.15, 
        pointerEvents: 'none' 
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: isMobile ? '0 16px' : '0 24px',
        position: 'relative',
        zIndex: 10,
        width: '100%'
      }}>
        {/* Main Grid */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 'clamp(32px, 8vw, 48px)' : '48px',
          alignItems: 'center',
          marginBottom: isMobile ? 'clamp(40px, 10vw, 64px)' : '64px'
        }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? 'clamp(16px, 5vw, 24px)' : '24px',
              flex: 1,
              width: '100%'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(139, 92, 246, 0.1)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '9999px',
                padding: isMobile ? '4px 12px 4px 10px' : '6px 16px 6px 14px',
                cursor: 'pointer',
                alignSelf: 'flex-start'
              }}
              onClick={() => onScrollTo('demo')}
            >
              <Zap size={isMobile ? 12 : 14} style={{ color: '#8b5cf6' }} />
              <span style={{
                fontSize: isMobile ? '9px' : '11px',
                fontFamily: 'monospace',
                color: '#334155'
              }}>
                {isMobile ? 'GHOSTwire auto-sniper live' : 'GHOSTwire auto-sniper live on Solana mainnet'}
              </span>
              <ChevronRight size={isMobile ? 10 : 12} style={{ color: '#8b5cf6' }} />
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                fontSize: isMobile ? 'clamp(32px, 8vw, 44px)' : 'clamp(44px, 5vw, 56px)',
                fontWeight: 800,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                lineHeight: 1.1,
                color: '#0f172a',
                letterSpacing: '-0.02em'
              }}>
                Auto-Snipe Solana{' '}
                <span style={{ display: 'inline-block' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #8b5cf6, #ec4899, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 900
                  }}>{displayText}</span>
                  {!isTypingComplete && <span style={{
                    display: 'inline-block',
                    width: '3px',
                    height: isMobile ? 'clamp(32px, 6vw, 44px)' : '48px',
                    background: '#8b5cf6',
                    marginLeft: '4px',
                    animation: 'pulse 1s step-end infinite'
                  }} />}
                </span>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  fontSize: isMobile ? 'clamp(14px, 4vw, 16px)' : '18px',
                  color: '#475569',
                  lineHeight: 1.625,
                  maxWidth: '550px'
                }}
              >
                The fastest Telegram sniper bot for Solana. Auto-detect signals from private & public channels, execute instant trades via Jupiter API, and track your portfolio P&L dynamically.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '12px' : '16px',
                marginTop: '8px',
                width: '100%'
              }}
            >
              <a href="https://t.me/ghowr_bot" target="_blank" rel="noreferrer" style={{
                padding: isMobile ? 'clamp(12px, 4vw, 14px) clamp(16px, 5vw, 24px)' : '12px 24px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                color: 'white',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                flex: isMobile ? 1 : 'auto'
              }}>
                <span>{isMobile ? 'Start Trading' : 'Start Trading on Telegram'}</span>
                <ArrowUpRight size={16} />
              </a>
              <button onClick={() => onScrollTo('demo')} style={{
                padding: isMobile ? 'clamp(12px, 4vw, 14px) clamp(16px, 5vw, 24px)' : '12px 24px',
                borderRadius: '12px',
                background: '#f1f5f9',
                border: '1px solid #e2e8f0',
                color: '#334155',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                flex: isMobile ? 1 : 'auto'
              }}>
                <span>{isMobile ? 'Watch Demo' : 'Watch Demo Run'}</span>
                <Terminal size={16} style={{ color: '#06b6d4' }} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                background: 'white',
                borderRadius: '16px',
                padding: isMobile ? '12px 16px' : '16px',
                width: '100%',
                maxWidth: isMobile ? '100%' : '400px',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                border: '1px solid #e2e8f0',
                flexWrap: isMobile ? 'wrap' : 'nowrap'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flex: 1
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  background: '#f1f5f9',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'monospace',
                  fontSize: '10px',
                  color: '#64748b'
                }}>$</div>
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    fontFamily: 'monospace',
                    color: '#64748b'
                  }}>Quick Summon</p>
                  <p style={{
                    fontSize: isMobile ? '11px' : '12px',
                    fontFamily: 'monospace',
                    color: '#8b5cf6',
                    wordBreak: 'break-all'
                  }}>t.me/ghowr_bot</p>
                </div>
              </div>
              <button onClick={handleCopyCode} style={{
                padding: '8px 12px',
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontFamily: 'monospace',
                color: '#8b5cf6',
                whiteSpace: 'nowrap'
              }}>
                {copiedText ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                {copiedText ? 'Copied' : 'Copy'}
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Widget */}
          <motion.div
            initial={{ opacity: 0, x: 200, rotate: 5, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100, damping: 15 }}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              flex: 1,
              width: '100%'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                position: 'absolute',
                inset: '-16px',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))',
                borderRadius: '24px',
                filter: 'blur(32px)',
                zIndex: -1,
                display: !isMobile ? 'block' : 'none'
              }}
            />
            {isMobile ? <MobileWidget /> : <DesktopWidget />}
          </motion.div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            border: '1px solid #e2e8f0',
            background: 'white',
            backdropFilter: 'blur(4px)',
            borderRadius: '24px',
            padding: isMobile ? 'clamp(20px, 5vw, 32px)' : '32px',
            maxWidth: '1152px',
            margin: isMobile ? 'clamp(32px, 8vw, 64px) auto 0' : '64px auto 0',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            overflowX: 'auto'
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(4, minmax(180px, 1fr))' : 'repeat(4, 1fr)',
            gap: isMobile ? 'clamp(12px, 3vw, 24px)' : '24px',
            minWidth: isMobile ? '560px' : 'auto'
          }}>
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                  style={{ position: 'relative' }}
                >
                  {idx > 0 && !isMobile && (
                    <div style={{ position: 'absolute', left: '-12px', top: '50%', transform: 'translateY(-50%)', width: '1px', height: '40px', background: '#e2e8f0' }} />
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Icon size={isMobile ? 14 : 16} style={{ color: stat.color }} />
                    <span style={{ 
                      fontSize: isMobile ? '10px' : '12px', 
                      fontFamily: 'monospace', 
                      fontWeight: 500, 
                      color: '#64748b', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.05em' 
                    }}>{stat.label}</span>
                  </div>
                  <span style={{ 
                    fontSize: isMobile ? 'clamp(18px, 5vw, 20px)' : '24px', 
                    fontFamily: "'Plus Jakarta Sans', sans-serif", 
                    fontWeight: 'bold', 
                    color: '#0f172a', 
                    display: 'block', 
                    marginTop: '4px' 
                  }}>{stat.value}</span>
                  <span style={{ 
                    fontSize: isMobile ? 'clamp(8px, 3vw, 9px)' : '10px', 
                    fontFamily: 'monospace', 
                    color: '#94a3b8' 
                  }}>{stat.desc}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}