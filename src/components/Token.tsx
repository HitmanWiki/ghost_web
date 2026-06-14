import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Coins, TrendingUp, Users, ArrowUpRight, Copy, Check, Sparkles, Zap, Crown, MessageCircle, ExternalLink, Lock, Ticket, Gift, Star } from 'lucide-react';

export default function Token() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const tokenAddress = "GHOSTpumpXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  const pumpFunLink = "https://pump.fun/coin/GHOSTpumpXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  const dexscreenerLink = "https://dexscreener.com/solana/GHOSTpumpXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  const dexToolsLink = "https://www.dextools.io/app/en/solana/pair/GHOSTpumpXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

  const tokenStats = [
    { label: 'Total Supply', value: '1,000,000,000', icon: Coins },
    { label: 'Tax', value: '0/0', icon: TrendingUp, sub: 'Buy/Sell' },
    { label: 'Liquidity', value: '100%', icon: Lock, sub: 'Locked' },
    { label: 'Mint', value: 'Renounced', icon: Crown, sub: 'Authority' },
  ];

  const links = [
    { name: 'pump.fun', url: pumpFunLink, icon: ExternalLink, color: 'from-purple-500 to-pink-500' },
    { name: 'DexScreener', url: dexscreenerLink, icon: ExternalLink, color: 'from-amber-500 to-orange-500' },
    { name: 'DEXTools', url: dexToolsLink, icon: ExternalLink, color: 'from-blue-500 to-cyan-500' },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  // Helper function to get gradient background
  const getGradientBackground = (color) => {
    switch(color) {
      case 'from-purple-500 to-pink-500':
        return 'linear-gradient(135deg, #a855f7, #ec4899)';
      case 'from-amber-500 to-orange-500':
        return 'linear-gradient(135deg, #f59e0b, #f97316)';
      case 'from-blue-500 to-cyan-500':
        return 'linear-gradient(135deg, #3b82f6, #06b6d4)';
      default:
        return 'linear-gradient(135deg, #a855f7, #ec4899)';
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      style={{
        padding: '96px 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #faf5ff 100%)'
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
          background: 'rgba(139, 92, 246, 0.08)',
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
          background: 'rgba(6, 182, 212, 0.08)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          y: bgY
        }}
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

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
              padding: '4px 12px',
              fontSize: '10px',
              fontFamily: 'monospace',
              fontWeight: 500,
              borderRadius: '9999px',
              background: 'rgba(139, 92, 246, 0.1)',
              color: '#8b5cf6',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              display: 'inline-block',
              marginBottom: '16px'
            }}
          >
            <Sparkles style={{ width: '12px', height: '12px', display: 'inline', marginRight: '4px' }} /> Ecosystem Token
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: 900,
              color: '#0f172a',
              marginBottom: '16px'
            }}
          >
            $GHOST Token
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              color: '#475569',
              maxWidth: '672px',
              margin: '0 auto'
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '16px',
            marginBottom: '48px'
          }}
        >
          {tokenStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} style={{
                background: 'white',
                borderRadius: '16px',
                padding: '20px',
                textAlign: 'center',
                border: '1px solid #e2e8f0',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                transition: 'box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)'}
              >
                <Icon style={{ width: '24px', height: '24px', color: '#8b5cf6', margin: '0 auto 8px auto' }} />
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>{stat.value}</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>{stat.label}</div>
                {stat.sub && <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '4px' }}>{stat.sub}</div>}
              </div>
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
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            marginBottom: '32px'
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}>
            <div style={{ width: '100%' }}>
              <p style={{ fontSize: '12px', color: '#64748b', fontFamily: 'monospace', marginBottom: '4px' }}>Token Contract Address</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <code style={{
                  fontSize: '14px',
                  fontFamily: 'monospace',
                  color: '#334155',
                  background: '#f1f5f9',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  wordBreak: 'break-all',
                  flex: 1
                }}>
                  {tokenAddress.slice(0, 20)}...{tokenAddress.slice(-16)}
                </code>
                <button 
                  onClick={copyToClipboard}
                  style={{
                    padding: '8px',
                    borderRadius: '8px',
                    background: '#f1f5f9',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#e2e8f0'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#f1f5f9'}
                >
                  {copiedAddress ? <Check style={{ width: '16px', height: '16px', color: '#22c55e' }} /> : <Copy style={{ width: '16px', height: '16px', color: '#64748b' }} />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dex Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '48px'
          }}
        >
          {links.map((link, idx) => (
            <a 
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
                borderRadius: '12px',
                background: getGradientBackground(link.color),
                color: 'white',
                textDecoration: 'none',
                transition: 'opacity 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <span style={{ fontWeight: 600, fontSize: '14px' }}>{link.name}</span>
              <link.icon style={{ width: '16px', height: '16px', transition: 'transform 0.2s ease' }} 
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              />
            </a>
          ))}
        </motion.div>

        {/* Token Info & Community */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '48px'
        }}>
          {/* Token Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            style={{
              background: 'white',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'rgba(139, 92, 246, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Zap style={{ width: '20px', height: '20px', color: '#8b5cf6' }} />
              </div>
              <h3 style={{ fontWeight: 'bold', color: '#0f172a' }}>About $GHOST</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: '#475569' }}>
                <span style={{ color: '#8b5cf6', marginTop: '2px' }}>◆</span>
                <span>Fair launched on pump.fun — no presale, no team allocation</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: '#475569' }}>
                <span style={{ color: '#8b5cf6', marginTop: '2px' }}>◆</span>
                <span>Zero taxes on buys and sells — trade freely</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: '#475569' }}>
                <span style={{ color: '#8b5cf6', marginTop: '2px' }}>◆</span>
                <span>Liquidity locked — safe and secure</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: '#475569' }}>
                <span style={{ color: '#8b5cf6', marginTop: '2px' }}>◆</span>
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
              background: 'white',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'rgba(6, 182, 212, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Users style={{ width: '20px', height: '20px', color: '#06b6d4' }} />
              </div>
              <h3 style={{ fontWeight: 'bold', color: '#0f172a' }}>Community</h3>
            </div>
            <p style={{ fontSize: '14px', color: '#475569', marginBottom: '16px' }}>
              Join the fastest growing Solana sniper community. Get real-time updates, alpha calls, and connect with thousands of traders.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a 
                href="https://t.me/ghostwire_community" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '10px 16px',
                  borderRadius: '12px',
                  background: '#26A5E4',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#1e8dc0'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#26A5E4'}
              >
                <MessageCircle style={{ width: '16px', height: '16px' }} />
                Telegram
              </a>
              <a 
                href="https://x.com/ghostwire_sol" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '10px 16px',
                  borderRadius: '12px',
                  background: 'black',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#1f2937'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'black'}
              >
                <span>𝕏</span>
                Twitter (X)
              </a>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          style={{
            textAlign: 'center',
            fontSize: '10px',
            color: '#94a3b8',
            marginTop: '16px'
          }}
        >
          $GHOST is a community-driven token with no promises of returns. Always do your own research.
        </motion.p>

      </div>
    </motion.section>
  );
}