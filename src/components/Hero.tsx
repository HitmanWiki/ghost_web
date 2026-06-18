import { motion } from 'motion/react';
import { ArrowUpRight, Zap, Target, Lock, TrendingUp, ChevronRight, Copy, Check, Terminal, Sparkles, Bot, LineChart, Wallet as WalletIcon, Radar } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const [copiedText, setCopiedText] = useState(false);
  const [copiedCA, setCopiedCA] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const stats = [
    { label: 'Uptime', value: '24/7', desc: 'Continuous monitoring', icon: Zap, color: '#a78bfa' },
    { label: 'Wallets', value: 'Up to 5', desc: 'Derived per account', icon: WalletIcon, color: '#818cf8' },
    { label: 'Ref Revenue', value: '20%', desc: 'Trading fee commission', icon: TrendingUp, color: '#c084fc' },
    { label: 'Trading Fee', value: '0.1%', desc: 'Ultra-competitive', icon: Lock, color: '#34d399' },
  ];

  const fullText = "Tokens instantly.";

  // CA Address for $GHOST token
  const caAddress = "8ESs6WnDYgV9eodF8JpyNrrdQuuvNZrBK9tctnfypump";

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

  const handleCopyCA = () => {
    navigator.clipboard.writeText(caAddress);
    setCopiedCA(true);
    setTimeout(() => setCopiedCA(false), 2000);
  };

  // Desktop widget style
  const desktopWidgetStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: isTablet ? '360px' : '420px',
    height: 'auto',
    background: 'linear-gradient(145deg, #0D0520, #16082E)',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    borderRadius: '20px',
    padding: isTablet ? '20px' : '24px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(139, 92, 246, 0.1)',
  };

  const mobileWidgetStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
    background: 'linear-gradient(145deg, #0D0520, #16082E)',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    borderRadius: '16px',
    padding: '16px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.4)',
  };

  // Desktop Widget Component
  const DesktopWidget = () => (
    <div style={desktopWidgetStyle}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '-30%',
        right: '-30%',
        width: '80%',
        height: '80%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05), transparent 70%)',
        pointerEvents: 'none',
      }} />
      
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottom: '1px solid rgba(139, 92, 246, 0.08)', 
        paddingBottom: '14px', 
        marginBottom: '16px', 
        position: 'relative', 
        zIndex: 1 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.2)',
            flexShrink: 0,
          }}>
            <img 
              src="/logo.jpg" 
              alt="GHOSTwire" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.innerHTML = '<span style="color: white; font-size: 18px;">👻</span>';
                }
              }}
            />
          </div>
          <div>
            <span style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontWeight: 800, 
              fontSize: '14px', 
              letterSpacing: '0.5px', 
              color: 'white',
              display: 'block',
            }}>GHOSTwire</span>
            <span style={{ 
              fontSize: '9px', 
              fontFamily: 'monospace', 
              color: '#8b5cf6',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}>
              <span style={{ 
                width: '6px', 
                height: '6px', 
                borderRadius: '50%', 
                background: '#34d399',
                display: 'inline-block',
              }} />
              Auto-Initialized
            </span>
          </div>
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '6px',
          background: 'rgba(139, 92, 246, 0.08)',
          padding: '4px 12px',
          borderRadius: '20px',
          border: '1px solid rgba(139, 92, 246, 0.1)',
        }}>
          <span style={{ 
            fontSize: '8px', 
            fontFamily: 'monospace', 
            color: '#a78bfa',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>Alpha Group</span>
        </div>
      </div>

      {/* Feed Alert */}
      <div style={{ 
        background: 'rgba(139, 92, 246, 0.04)', 
        border: '1px solid rgba(139, 92, 246, 0.08)', 
        borderRadius: '12px', 
        padding: '12px 14px', 
        marginBottom: '14px', 
        position: 'relative', 
        zIndex: 1 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', fontFamily: 'monospace', color: '#9ca3af' }}>🚀 AUTO-DETECTED FEED</span>
          <span style={{ fontSize: '8px', fontFamily: 'monospace', color: '#a78bfa', background: 'rgba(139,92,246,0.12)', borderRadius: '4px', padding: '1px 8px' }}>Alpha Group</span>
        </div>
        <p style={{ fontSize: '11px', color: '#e5e7eb', fontWeight: 600, marginBottom: '2px', fontFamily: "'Inter', sans-serif" }}>
          Contract Detected: GNL7M...
        </p>
        <p style={{ fontSize: '10px', color: '#9ca3af' }}>Processed through Jupiter aggregator route in 0.12s</p>
      </div>

      {/* Price Chart */}
      <div style={{ 
        background: 'rgba(139, 92, 246, 0.04)', 
        border: '1px solid rgba(139, 92, 246, 0.08)', 
        borderRadius: '12px', 
        padding: '14px', 
        marginBottom: '14px', 
        position: 'relative', 
        zIndex: 1 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div>
            <span style={{ fontSize: '8px', textTransform: 'uppercase', fontFamily: 'monospace', color: '#9ca3af' }}>UNISOL / SOL</span>
            <h4 style={{ fontSize: '20px', fontFamily: 'monospace', fontWeight: 700, color: 'white', marginTop: '2px' }}>$0.0418</h4>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '8px', display: 'block', textTransform: 'uppercase', fontFamily: 'monospace', color: '#9ca3af' }}>Live Profit</span>
            <span style={{ fontSize: '14px', fontFamily: 'monospace', fontWeight: 700, color: '#34d399' }}>+50.7%</span>
          </div>
        </div>
        
        {/* Chart SVG */}
        <svg style={{ width: '100%', height: '48px' }} viewBox="0 0 100 20">
          <defs>
            <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
          <path d="M 0 18 Q 15 20 30 14 T 60 8 T 90 3 T 100 0" stroke="#8b5cf6" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="90" cy="3" r="2.5" fill="#a78bfa" />
        </svg>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '8px', 
          marginTop: '12px',
          borderTop: '1px solid rgba(139, 92, 246, 0.06)',
          paddingTop: '12px',
        }}>
          <div style={{ 
            padding: '6px', 
            background: 'rgba(139, 92, 246, 0.06)', 
            borderRadius: '8px', 
            textAlign: 'center',
            border: '1px solid rgba(139, 92, 246, 0.05)',
          }}>
            <span style={{ color: '#9ca3af', display: 'block', fontSize: '8px', textTransform: 'uppercase', fontFamily: 'monospace' }}>Buy</span>
            <span style={{ color: 'white', fontWeight: 700, fontSize: '10px', fontFamily: 'monospace' }}>0.10 SOL</span>
          </div>
          <div style={{ 
            padding: '6px', 
            background: 'rgba(139, 92, 246, 0.06)', 
            borderRadius: '8px', 
            textAlign: 'center',
            border: '1px solid rgba(139, 92, 246, 0.05)',
          }}>
            <span style={{ color: '#9ca3af', display: 'block', fontSize: '8px', textTransform: 'uppercase', fontFamily: 'monospace' }}>Sell Target</span>
            <span style={{ color: '#a78bfa', fontWeight: 700, fontSize: '10px', fontFamily: 'monospace' }}>0.15 SOL (+50%)</span>
          </div>
        </div>
      </div>

      {/* Wallet */}
      <div style={{ 
        background: 'rgba(139, 92, 246, 0.04)', 
        border: '1px solid rgba(139, 92, 246, 0.08)', 
        borderRadius: '12px', 
        padding: '12px 14px', 
        marginBottom: '14px', 
        position: 'relative', 
        zIndex: 1 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
          <span style={{ fontSize: '8px', textTransform: 'uppercase', fontFamily: 'monospace', color: '#9ca3af' }}>🔐 Self Custody Wallet</span>
          <span style={{ fontSize: '9px', fontFamily: 'monospace', fontWeight: 600, color: '#a78bfa' }}>Wallet #1</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#d1d5db' }}>GnL9mQz...3kS4p</span>
          <span style={{ fontSize: '11px', fontFamily: 'monospace', fontWeight: 700, color: 'white' }}>1.55 SOL</span>
        </div>
      </div>

      {/* Terminal Log */}
      <div style={{ 
        background: 'rgba(0,0,0,0.4)', 
        borderRadius: '10px', 
        border: '1px solid rgba(139, 92, 246, 0.06)', 
        padding: '10px 12px', 
        fontFamily: 'monospace', 
        fontSize: '8px', 
        color: '#a78bfa', 
        position: 'relative', 
        zIndex: 1 
      }}>
        <p style={{ color: '#9ca3af' }}>&gt; scanning telegram signals...</p>
        <p style={{ color: '#818cf8' }}>&gt; match: CA `GNL7MQSzzkYQ75mXU4mNz...`</p>
        <p style={{ color: '#34d399' }}>&gt; Jupiter Swap executed (+50% TP Set)</p>
      </div>
    </div>
  );

  // Mobile Widget Component
  const MobileWidget = () => (
    <div style={mobileWidgetStyle}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottom: '1px solid rgba(139, 92, 246, 0.08)', 
        paddingBottom: '12px', 
        marginBottom: '12px', 
        position: 'relative', 
        zIndex: 1 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <img 
              src="/logo.jpg" 
              alt="GHOSTwire" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.innerHTML = '<span style="color: white; font-size: 14px;">👻</span>';
                }
              }}
            />
          </div>
          <div>
            <span style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontWeight: 800, 
              fontSize: '13px', 
              color: 'white',
              display: 'block',
            }}>GHOSTwire</span>
            <span style={{ 
              fontSize: '8px', 
              fontFamily: 'monospace', 
              color: '#8b5cf6',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}>
              <span style={{ 
                width: '5px', 
                height: '5px', 
                borderRadius: '50%', 
                background: '#34d399',
                display: 'inline-block',
              }} />
              Auto-Initialized
            </span>
          </div>
        </div>
        <div style={{ 
          background: 'rgba(139, 92, 246, 0.08)',
          padding: '2px 10px',
          borderRadius: '16px',
          border: '1px solid rgba(139, 92, 246, 0.08)',
        }}>
          <span style={{ fontSize: '7px', fontFamily: 'monospace', color: '#a78bfa', textTransform: 'uppercase' }}>Alpha</span>
        </div>
      </div>

      {/* Feed */}
      <div style={{ 
        background: 'rgba(139, 92, 246, 0.04)', 
        border: '1px solid rgba(139, 92, 246, 0.06)', 
        borderRadius: '10px', 
        padding: '10px', 
        marginBottom: '10px', 
        position: 'relative', 
        zIndex: 1 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
          <span style={{ fontSize: '7px', textTransform: 'uppercase', fontFamily: 'monospace', color: '#9ca3af' }}>🚀 AUTO-DETECTED FEED</span>
          <span style={{ fontSize: '7px', fontFamily: 'monospace', color: '#a78bfa', background: 'rgba(139,92,246,0.1)', borderRadius: '4px', padding: '1px 6px' }}>Alpha</span>
        </div>
        <p style={{ fontSize: '10px', color: '#e5e7eb', fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>Contract Detected: GNL7M...</p>
        <p style={{ fontSize: '8px', color: '#9ca3af' }}>Jupiter route: 0.12s</p>
      </div>

      {/* Price */}
      <div style={{ 
        background: 'rgba(139, 92, 246, 0.04)', 
        border: '1px solid rgba(139, 92, 246, 0.06)', 
        borderRadius: '10px', 
        padding: '12px', 
        marginBottom: '10px', 
        position: 'relative', 
        zIndex: 1 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div>
            <span style={{ fontSize: '7px', textTransform: 'uppercase', fontFamily: 'monospace', color: '#9ca3af' }}>UNISOL / SOL</span>
            <h4 style={{ fontSize: '16px', fontFamily: 'monospace', fontWeight: 700, color: 'white' }}>$0.0418</h4>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '7px', display: 'block', textTransform: 'uppercase', fontFamily: 'monospace', color: '#9ca3af' }}>Live Profit</span>
            <span style={{ fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, color: '#34d399' }}>+50.7%</span>
          </div>
        </div>
        <svg style={{ width: '100%', height: '32px' }} viewBox="0 0 100 14">
          <path d="M 0 12 Q 15 14 30 10 T 60 6 T 90 2 T 100 0" stroke="#8b5cf6" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <circle cx="90" cy="2" r="2" fill="#a78bfa" />
        </svg>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '6px', 
          marginTop: '8px',
          borderTop: '1px solid rgba(139, 92, 246, 0.06)',
          paddingTop: '8px',
        }}>
          <div style={{ padding: '4px', background: 'rgba(139, 92, 246, 0.06)', borderRadius: '6px', textAlign: 'center' }}>
            <span style={{ color: '#9ca3af', display: 'block', fontSize: '7px', textTransform: 'uppercase', fontFamily: 'monospace' }}>Buy</span>
            <span style={{ color: 'white', fontWeight: 700, fontSize: '9px', fontFamily: 'monospace' }}>0.10 SOL</span>
          </div>
          <div style={{ padding: '4px', background: 'rgba(139, 92, 246, 0.06)', borderRadius: '6px', textAlign: 'center' }}>
            <span style={{ color: '#9ca3af', display: 'block', fontSize: '7px', textTransform: 'uppercase', fontFamily: 'monospace' }}>Sell</span>
            <span style={{ color: '#a78bfa', fontWeight: 700, fontSize: '9px', fontFamily: 'monospace' }}>0.15 SOL</span>
          </div>
        </div>
      </div>

      {/* Wallet */}
      <div style={{ 
        background: 'rgba(139, 92, 246, 0.04)', 
        border: '1px solid rgba(139, 92, 246, 0.06)', 
        borderRadius: '10px', 
        padding: '10px', 
        marginBottom: '10px', 
        position: 'relative', 
        zIndex: 1 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
          <span style={{ fontSize: '7px', textTransform: 'uppercase', fontFamily: 'monospace', color: '#9ca3af' }}>🔐 Wallet</span>
          <span style={{ fontSize: '7px', fontFamily: 'monospace', fontWeight: 600, color: '#a78bfa' }}>#1</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '9px', fontFamily: 'monospace', color: '#d1d5db' }}>GnL9...3kS4p</span>
          <span style={{ fontSize: '9px', fontFamily: 'monospace', fontWeight: 700, color: 'white' }}>1.55 SOL</span>
        </div>
      </div>

      {/* Terminal */}
      <div style={{ 
        background: 'rgba(0,0,0,0.4)', 
        borderRadius: '8px', 
        border: '1px solid rgba(139, 92, 246, 0.06)', 
        padding: '8px 10px', 
        fontFamily: 'monospace', 
        fontSize: '7px', 
        color: '#a78bfa', 
        position: 'relative', 
        zIndex: 1 
      }}>
        <p style={{ color: '#9ca3af' }}>&gt; scanning signals...</p>
        <p style={{ color: '#818cf8' }}>&gt; CA detected</p>
        <p style={{ color: '#34d399' }}>&gt; Swap executed</p>
      </div>
    </div>
  );

  return (
    <section style={{
      position: 'relative',
      paddingTop: isMobile ? 'clamp(70px, 15vw, 110px)' : 'clamp(100px, 12vw, 140px)',
      paddingBottom: isMobile ? 'clamp(40px, 8vw, 60px)' : 'clamp(60px, 8vw, 80px)',
      minHeight: isMobile ? 'auto' : '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: 'radial-gradient(ellipse at 20% 50%, #1a0a2e 0%, #0A041B 40%, #060012 100%)',
      overflow: 'hidden'
    }} id="hero">
      {/* Animated background glows */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        left: '-10%',
        width: '60%',
        height: '80%',
        background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.06), transparent 70%)',
        pointerEvents: 'none',
        animation: 'floatGlow 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        right: '-10%',
        width: '50%',
        height: '60%',
        background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.04), transparent 70%)',
        pointerEvents: 'none',
        animation: 'floatGlow 10s ease-in-out infinite reverse',
      }} />
      
      {/* Grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(139, 92, 246, 0.08) 1px, transparent 1px)',
        backgroundSize: isMobile ? '12px 12px' : '16px 16px',
        opacity: 0.25,
        pointerEvents: 'none',
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
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(139, 92, 246, 0.15)',
                borderRadius: '9999px',
                padding: isMobile ? '5px 14px 5px 12px' : '6px 20px 6px 16px',
                cursor: 'pointer',
                alignSelf: 'flex-start',
                transition: 'all 0.3s ease',
              }}
              onClick={() => onScrollTo('demo')}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.18)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.15)';
              }}
            >
              <Sparkles size={isMobile ? 12 : 14} style={{ color: '#a78bfa' }} />
              <span style={{
                fontSize: isMobile ? 'clamp(11px, 2.5vw, 13px)' : 'clamp(13px, 1vw, 15px)',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                color: '#c4b5fd'
              }}>
                {isMobile ? 'Auto-sniper live' : 'GHOSTwire auto-sniper live on Solana mainnet'}
              </span>
              <ChevronRight size={isMobile ? 10 : 12} style={{ color: '#a78bfa' }} />
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                fontSize: isMobile ? 'clamp(36px, 10vw, 48px)' : 'clamp(48px, 6vw, 64px)',
                fontWeight: 800,
                fontFamily: "'Inter', 'Plus Jakarta Sans', sans-serif",
                lineHeight: 1.05,
                color: '#ffffff',
                letterSpacing: '-0.03em'
              }}>
                Auto-Snipe{' '}
                <span style={{ display: 'inline-block' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #c084fc, #8b5cf6, #7c3aed)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 900
                  }}>Solana {displayText}</span>
                  {!isTypingComplete && <span style={{
                    display: 'inline-block',
                    width: '3px',
                    height: isMobile ? 'clamp(36px, 6vw, 48px)' : '52px',
                    background: '#8b5cf6',
                    marginLeft: '4px',
                    animation: 'pulse 1s step-end infinite',
                    boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
                  }} />}
                </span>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  fontSize: isMobile ? 'clamp(15px, 4vw, 17px)' : 'clamp(17px, 1.3vw, 19px)',
                  color: '#c4b5fd',
                  lineHeight: 1.7,
                  maxWidth: '550px',
                  fontWeight: 400,
                }}
              >
                The fastest Telegram sniper bot for Solana. Auto-detect signals from private & public channels, execute instant trades via Jupiter API, and track your portfolio P&L dynamically.
              </motion.p>
            </div>

            {/* Start Trading & Watch Demo */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '12px' : '16px',
                marginTop: '8px',
                width: '100%',
                flexWrap: isMobile ? 'wrap' : 'nowrap',
              }}
            >
              <a href="https://t.me/ghowr_bot" target="_blank" rel="noreferrer" style={{
                padding: isMobile ? 'clamp(14px, 4vw, 16px) clamp(20px, 5vw, 28px)' : 'clamp(14px, 1.2vw, 16px) clamp(28px, 3vw, 36px)',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                color: 'white',
                fontWeight: 700,
                fontFamily: "'Inter', sans-serif",
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.35)',
                textAlign: 'center',
                flex: isMobile ? 1 : 'auto',
                transition: 'all 0.3s ease',
                fontSize: isMobile ? 'clamp(15px, 3.5vw, 17px)' : 'clamp(16px, 1.1vw, 18px)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(139, 92, 246, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 92, 246, 0.35)';
              }}>
                <span>{isMobile ? 'Start Trading' : 'Start Trading on Telegram'}</span>
                <ArrowUpRight size={isMobile ? 18 : 20} />
              </a>
              <button onClick={() => onScrollTo('demo')} style={{
                padding: isMobile ? 'clamp(14px, 4vw, 16px) clamp(20px, 5vw, 28px)' : 'clamp(14px, 1.2vw, 16px) clamp(28px, 3vw, 36px)',
                borderRadius: '12px',
                background: 'rgba(139, 92, 246, 0.08)',
                border: '1px solid rgba(139, 92, 246, 0.15)',
                color: '#c4b5fd',
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                flex: isMobile ? 1 : 'auto',
                fontSize: isMobile ? 'clamp(15px, 3.5vw, 17px)' : 'clamp(16px, 1.1vw, 18px)',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.15)';
              }}>
                <span>{isMobile ? 'Watch Demo' : 'Watch Demo Run'}</span>
                <Terminal size={isMobile ? 18 : 20} style={{ color: '#a78bfa' }} />
              </button>
            </motion.div>

            {/* CA Row - Stretched Full Width - WHITE TEXT */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '14px',
                padding: isMobile ? '12px 16px' : '14px 24px',
                border: '1px solid rgba(139, 92, 246, 0.08)',
                backdropFilter: 'blur(8px)',
                flexWrap: 'nowrap',
                width: '100%',
                maxWidth: isMobile ? '100%' : '100%',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flex: 1,
                minWidth: 0,
              }}>
                <div style={{
                  width: isMobile ? '32px' : '36px',
                  height: isMobile ? '32px' : '36px',
                  background: 'rgba(139, 92, 246, 0.08)',
                  borderRadius: '8px',
                  border: '1px solid rgba(139, 92, 246, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'monospace',
                  fontSize: isMobile ? '14px' : '16px',
                  color: '#a78bfa',
                  flexShrink: 0,
                }}>🪙</div>
                <div style={{ 
                  flex: 1, 
                  minWidth: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '6px' : '12px',
                  flexWrap: 'wrap',
                }}>
                  <span style={{
                    fontSize: isMobile ? 'clamp(12px, 2.5vw, 14px)' : 'clamp(14px, 1vw, 16px)',
                    textTransform: 'uppercase',
                    fontFamily: 'monospace',
                    color: '#c4b5fd',
                    letterSpacing: '0.08em',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                  }}>CA:</span>
                  <span style={{
                    fontSize: isMobile ? 'clamp(14px, 3vw, 17px)' : 'clamp(16px, 1.2vw, 19px)',
                    fontFamily: 'monospace',
                    color: '#ffffff',
                    fontWeight: 700,
                    wordBreak: 'break-all',
                    letterSpacing: '0.02em',
                  }}>{caAddress}</span>
                </div>
              </div>
              <button onClick={handleCopyCA} style={{
                padding: isMobile ? '8px 16px' : '10px 20px',
                background: 'rgba(139, 92, 246, 0.12)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: isMobile ? 'clamp(12px, 2.5vw, 14px)' : 'clamp(14px, 1vw, 16px)',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                color: '#a78bfa',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
              }}>
                {copiedCA ? <Check size={isMobile ? 16 : 18} style={{ color: '#34d399' }} /> : <Copy size={isMobile ? 16 : 18} />}
                {copiedCA ? 'Copied!' : 'Copy'}
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
                inset: '-20px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12), transparent 70%)',
                borderRadius: '24px',
                filter: 'blur(40px)',
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
            border: '1px solid rgba(139, 92, 246, 0.1)',
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(8px)',
            borderRadius: '20px',
            padding: isMobile ? 'clamp(24px, 5vw, 32px)' : 'clamp(32px, 3vw, 40px)',
            maxWidth: '1152px',
            margin: isMobile ? 'clamp(32px, 8vw, 64px) auto 0' : '64px auto 0',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
            overflowX: 'auto'
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(4, minmax(150px, 1fr))' : 'repeat(4, 1fr)',
            gap: isMobile ? 'clamp(16px, 3vw, 24px)' : '32px',
            minWidth: isMobile ? '480px' : 'auto'
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
                    <div style={{ position: 'absolute', left: '-16px', top: '50%', transform: 'translateY(-50%)', width: '1px', height: '50px', background: 'rgba(139, 92, 246, 0.1)' }} />
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                    <Icon size={isMobile ? 18 : 22} style={{ color: stat.color }} />
                    <span style={{ 
                      fontSize: isMobile ? 'clamp(11px, 2.5vw, 13px)' : 'clamp(13px, 0.9vw, 15px)', 
                      fontFamily: 'monospace', 
                      fontWeight: 700, 
                      color: '#9ca3af', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.08em' 
                    }}>{stat.label}</span>
                  </div>
                  <span style={{ 
                    fontSize: isMobile ? 'clamp(24px, 6vw, 32px)' : 'clamp(30px, 3vw, 38px)', 
                    fontFamily: "'Inter', sans-serif", 
                    fontWeight: 900, 
                    color: '#ffffff', 
                    display: 'block', 
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                  }}>{stat.value}</span>
                  <span style={{ 
                    fontSize: isMobile ? 'clamp(10px, 2.5vw, 12px)' : 'clamp(12px, 0.8vw, 14px)', 
                    fontFamily: "'Inter', sans-serif", 
                    color: '#6b7280',
                    fontWeight: 500,
                  }}>{stat.desc}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          @keyframes floatGlow {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(30px, -20px) scale(1.1); }
          }
        `}
      </style>
    </section>
  );
}