import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Coins, TrendingUp, Users, ArrowUpRight, Copy, Check, Sparkles, Zap, Crown, MessageCircle, Lock, Rocket, Shield } from 'lucide-react';

export default function Token() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const tokenAddress = "8ESs6WnDYgV9eodF8JpyNrrdQuuvNZrBK9tctnfypump";
  const pumpFunLink = "https://pump.fun/coin/8ESs6WnDYgV9eodF8JpyNrrdQuuvNZrBK9tctnfypump";
  const dexscreenerLink = "https://dexscreener.com/solana/fw7ekbbdjgv68w43e7eisnreesff1sqfwmwgk31dbkji";
  const dexToolsLink = "https://www.dextools.io/app/solana/pair-explorer/8ESs6WnDYgV9eodF8JpyNrrdQuuvNZrBK9tctnfypump";

  const tokenStats = [
    { label: 'Total Supply', value: '1,000,000,000', icon: Coins, color: '#a78bfa' },
    { label: 'Tax', value: '0/0', icon: TrendingUp, sub: 'Buy/Sell', color: '#34d399' },
    { label: 'Liquidity', value: '100%', icon: Lock, sub: 'Burnt', color: '#67e8f9' },
    { label: 'Mint', value: 'Renounced', icon: Crown, sub: 'Authority', color: '#fcd34d' },
  ];

  const links = [
    { 
      name: 'pump.fun', 
      url: pumpFunLink, 
      icon: Rocket,
      gradient: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
      description: 'View on pump.fun'
    },
    { 
      name: 'DexScreener', 
      url: dexscreenerLink, 
      icon: TrendingUp,
      gradient: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
      description: 'Live charts & data'
    },
    { 
      name: 'DEXTools', 
      url: dexToolsLink, 
      icon: Shield,
      gradient: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
      description: 'Analytics & security'
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <motion.section 
      ref={sectionRef}
      style={{
        padding: 'clamp(60px, 10vw, 96px) 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 20% 30%, #1a0a2e 0%, #0A041B 40%, #060012 100%)',
      }}
      id="token"
    >
      {/* Animated Gradient Orbs */}
      <motion.div 
        style={{
          position: 'absolute',
          top: '80px',
          left: '-160px',
          width: '320px',
          height: '320px',
          background: 'rgba(139, 92, 246, 0.05)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          y: bgY
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        style={{
          position: 'absolute',
          bottom: '80px',
          right: '-160px',
          width: '320px',
          height: '320px',
          background: 'rgba(139, 92, 246, 0.04)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          y: bgY
        }}
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(139, 92, 246, 0.06) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        opacity: 0.25,
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1152px',
        margin: '0 auto',
        padding: '0 24px',
        position: 'relative',
        zIndex: 10
      }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 14px 4px 10px',
              fontSize: '12px',
              fontFamily: 'monospace',
              fontWeight: 500,
              borderRadius: '9999px',
              background: 'rgba(139, 92, 246, 0.12)',
              color: '#a78bfa',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '16px'
            }}
          >
            <Sparkles size={14} style={{ color: '#a78bfa' }} />
            Ecosystem Token
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: 'clamp(40px, 6vw, 56px)',
              fontWeight: 900,
              fontFamily: "'Inter', sans-serif",
              color: '#ffffff',
              letterSpacing: '-0.03em',
              marginBottom: '16px',
              lineHeight: 1.1,
            }}
          >
            <span style={{
              background: 'linear-gradient(135deg, #c084fc, #8b5cf6, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              $GHOST
            </span>{' '}
            Token
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              color: '#c4b5fd',
              maxWidth: '672px',
              margin: '0 auto',
              fontSize: 'clamp(16px, 2.5vw, 18px)',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            The official token of the GHOSTwire ecosystem. Fair launched on pump.fun with zero taxes.
          </motion.p>
        </div>

        {/* Token Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginBottom: '48px'
          }}
        >
          {tokenStats.map((stat, idx) => {
            const Icon = stat.icon;
            const isTotalSupply = stat.label === 'Total Supply';
            return (
              <motion.div 
                key={idx} 
                whileHover={{ y: -4, scale: 1.02 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  textAlign: 'center',
                  border: '1px solid rgba(139, 92, 246, 0.1)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '160px',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `rgba(139, 92, 246, 0.08)`,
                    border: '1px solid rgba(139, 92, 246, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Icon size={24} style={{ color: stat.color }} />
                  </div>
                </div>
                <div style={{ 
                  fontSize: isTotalSupply ? 'clamp(22px, 2.5vw, 28px)' : 'clamp(28px, 4vw, 36px)', 
                  fontWeight: 800, 
                  fontFamily: "'Inter', sans-serif",
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  whiteSpace: isTotalSupply ? 'nowrap' : 'normal',
                  wordBreak: isTotalSupply ? 'keep-all' : 'break-word',
                }}>
                  {stat.value}
                </div>
                <div style={{ 
                  fontSize: 'clamp(13px, 1.5vw, 15px)', 
                  color: '#c4b5fd',
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  marginTop: '4px',
                }}>
                  {stat.label}
                </div>
                {stat.sub && (
                  <div style={{ 
                    fontSize: 'clamp(11px, 1vw, 12px)', 
                    color: '#6b7280',
                    fontWeight: 400,
                    fontFamily: 'monospace',
                    marginTop: '2px',
                    letterSpacing: '0.05em',
                  }}>
                    {stat.sub}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Token Address */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '16px',
            padding: '24px 28px',
            border: '1px solid rgba(139, 92, 246, 0.08)',
            backdropFilter: 'blur(8px)',
            marginBottom: '32px',
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}>
            <div style={{ width: '100%' }}>
              <p style={{ 
                fontSize: 'clamp(11px, 1vw, 12px)', 
                color: '#9ca3af', 
                fontFamily: 'monospace',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '8px',
              }}>
                📋 Token Contract Address
              </p>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                flexWrap: 'wrap',
              }}>
                <code style={{
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  fontFamily: 'monospace',
                  fontWeight: 600,
                  color: '#e5e7eb',
                  background: 'rgba(139, 92, 246, 0.06)',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  wordBreak: 'break-all',
                  flex: 1,
                  border: '1px solid rgba(139, 92, 246, 0.06)',
                }}>
                  {tokenAddress.slice(0, 20)}...{tokenAddress.slice(-16)}
                </code>
                <button 
                  onClick={copyToClipboard}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '10px',
                    background: 'rgba(139, 92, 246, 0.08)',
                    border: '1px solid rgba(139, 92, 246, 0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: 'clamp(12px, 1vw, 13px)',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    color: '#a78bfa',
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(139, 92, 246, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.1)';
                  }}
                >
                  {copiedAddress ? (
                    <>
                      <Check size={16} style={{ color: '#34d399' }} />
                      <span style={{ color: '#34d399' }}>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dex Links - Clean Purple Gradients */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{ 
            textAlign: 'center', 
            color: '#9ca3af', 
            fontSize: 'clamp(12px, 1vw, 14px)',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '16px',
            fontWeight: 600,
          }}>
            📊 View on DEX Platforms
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            {links.map((link, idx) => (
              <motion.a 
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.02 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px 24px',
                  borderRadius: '14px',
                  background: link.gradient,
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(103, 25, 255, 0.3)',
                  textAlign: 'center',
                  minHeight: '90px',
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  marginBottom: '4px',
                }}>
                  <link.icon size={22} />
                  <span style={{ 
                    fontWeight: 700, 
                    fontSize: 'clamp(16px, 1.2vw, 18px)',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '-0.01em',
                  }}>
                    {link.name}
                  </span>
                </div>
                {link.description && (
                  <span style={{ 
                    fontSize: 'clamp(11px, 0.8vw, 12px)', 
                    opacity: 0.8,
                    fontWeight: 400,
                  }}>
                    {link.description}
                  </span>
                )}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Token Info & Community */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '32px'
        }}>
          {/* Token Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(139, 92, 246, 0.08)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(139, 92, 246, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(139, 92, 246, 0.1)',
              }}>
                <Zap size={22} style={{ color: '#a78bfa' }} />
              </div>
              <h3 style={{ 
                fontWeight: 700, 
                color: '#ffffff',
                fontSize: 'clamp(18px, 2vw, 20px)',
                fontFamily: "'Inter', sans-serif",
              }}>
                About $GHOST
              </h3>
            </div>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '14px' 
            }}>
              <li style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '12px', 
                fontSize: 'clamp(14px, 1.2vw, 15px)', 
                color: '#c4b5fd',
                fontWeight: 400,
                lineHeight: 1.6,
              }}>
                <span style={{ 
                  color: '#a78bfa', 
                  marginTop: '2px',
                  fontSize: '18px',
                  fontWeight: 700,
                }}>◆</span>
                <span>Fair launched on pump.fun — no presale, no team allocation</span>
              </li>
              <li style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '12px', 
                fontSize: 'clamp(14px, 1.2vw, 15px)', 
                color: '#c4b5fd',
                fontWeight: 400,
                lineHeight: 1.6,
              }}>
                <span style={{ 
                  color: '#34d399', 
                  marginTop: '2px',
                  fontSize: '18px',
                  fontWeight: 700,
                }}>◆</span>
                <span>Zero taxes on buys and sells — trade freely</span>
              </li>
              <li style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '12px', 
                fontSize: 'clamp(14px, 1.2vw, 15px)', 
                color: '#c4b5fd',
                fontWeight: 400,
                lineHeight: 1.6,
              }}>
                <span style={{ 
                  color: '#67e8f9', 
                  marginTop: '2px',
                  fontSize: '18px',
                  fontWeight: 700,
                }}>◆</span>
                <span>Liquidity Burnt — safe and secure</span>
              </li>
              <li style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '12px', 
                fontSize: 'clamp(14px, 1.2vw, 15px)', 
                color: '#c4b5fd',
                fontWeight: 400,
                lineHeight: 1.6,
              }}>
                <span style={{ 
                  color: '#fcd34d', 
                  marginTop: '2px',
                  fontSize: '18px',
                  fontWeight: 700,
                }}>◆</span>
                <span>Mint authority renounced — no more tokens can be created</span>
              </li>
            </ul>
          </motion.div>

          {/* Community Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(139, 92, 246, 0.08)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(6, 182, 212, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(6, 182, 212, 0.1)',
              }}>
                <Users size={22} style={{ color: '#67e8f9' }} />
              </div>
              <h3 style={{ 
                fontWeight: 700, 
                color: '#ffffff',
                fontSize: 'clamp(18px, 2vw, 20px)',
                fontFamily: "'Inter', sans-serif",
              }}>
                Community
              </h3>
            </div>
            <p style={{ 
              fontSize: 'clamp(14px, 1.2vw, 15px)', 
              color: '#c4b5fd',
              lineHeight: 1.7,
              fontWeight: 400,
              marginBottom: '16px',
            }}>
              Join the fastest growing Solana sniper community. Get real-time updates, alpha calls, and connect with thousands of traders.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <motion.a 
                href="https://t.me/ghost_wirebot" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '14px 20px',
                  borderRadius: '12px',
                  background: '#26A5E4',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: 'clamp(14px, 1vw, 15px)',
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(38, 165, 228, 0.3)',
                }}
              >
                <MessageCircle size={18} />
                Telegram
              </motion.a>
              <motion.a 
                href="https://x.com/GhostWire_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '14px 20px',
                  borderRadius: '12px',
                  background: '#000000',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: 'clamp(14px, 1vw, 15px)',
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                }}
              >
                <span style={{ fontSize: '18px' }}>𝕏</span>
                Twitter 
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        
      </div>

      <style>
        {`
          @keyframes floatGlow {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(30px, -20px) scale(1.1); }
          }
        `}
      </style>
    </motion.section>
  );
}