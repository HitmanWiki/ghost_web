import { motion } from 'motion/react';
import { Wallet, Radar, Zap, LineChart, TrendingUp, Send, Share2, Lock, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Features() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    {
      id: 'derived_wallets',
      icon: Wallet,
      title: 'Derived Wallets',
      description: 'GHOSTwire provisions on-chain Solana wallets derived cryptographically from your Telegram ID instantly. No private keys stored on any servers — absolute security meets supreme execution.',
      badge: 'Self-Custodial',
      isLarge: true,
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(79, 70, 229, 0.06))',
      hoverGradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(79, 70, 229, 0.1))',
      iconColor: '#a78bfa',
      borderColor: 'rgba(139, 92, 246, 0.2)',
      showSPL: true
    },
    {
      id: 'channel_monitoring',
      icon: Radar,
      title: 'Channel Monitoring',
      description: 'Continuous 24/7 active scanning of designated public or private Telegram channels for Solana contract addresses.',
      badge: '24/7 Autopilot',
      isLarge: false,
      gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(8, 145, 178, 0.04))',
      hoverGradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(8, 145, 178, 0.08))',
      iconColor: '#67e8f9',
      borderColor: 'rgba(6, 182, 212, 0.15)',
      showSPL: false
    },
    {
      id: 'portfolio_tracking',
      icon: LineChart,
      title: 'Portfolio Tracking',
      description: 'Real-time calculation of your performance metrics (P&L, cost basis, current valuations) aggregate by active wallet, contract address, or specific source channels.',
      badge: 'Dynamic Analytics',
      isLarge: false,
      gradient: 'linear-gradient(135deg, rgba(52, 211, 153, 0.08), rgba(16, 185, 129, 0.04))',
      hoverGradient: 'linear-gradient(135deg, rgba(52, 211, 153, 0.15), rgba(16, 185, 129, 0.08))',
      iconColor: '#34d399',
      borderColor: 'rgba(52, 211, 153, 0.15)',
      showSPL: true
    },
    {
      id: 'instant_swaps',
      icon: Zap,
      title: 'Instant Buy/Sell',
      description: 'Harness the power of Jupiter Aggregators to discover and execute the most capital-efficient swap routes automatically. Execution finishes within milliseconds.',
      badge: 'Best Rates',
      isLarge: false,
      gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(217, 119, 6, 0.04))',
      hoverGradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(217, 119, 6, 0.08))',
      iconColor: '#fcd34d',
      borderColor: 'rgba(245, 158, 11, 0.15)',
      showSPL: false
    },
    {
      id: 'auto_sell',
      icon: TrendingUp,
      title: 'Auto-Sell Target Profit',
      description: 'Lock in your profit. Put your take profit goals on autopilot. The sniper executes immediate out-clicks the moment your target return is locked.',
      badge: 'Auto Take-Profit',
      isLarge: false,
      gradient: 'linear-gradient(135deg, rgba(52, 211, 153, 0.08), rgba(5, 150, 105, 0.04))',
      hoverGradient: 'linear-gradient(135deg, rgba(52, 211, 153, 0.15), rgba(5, 150, 105, 0.08))',
      iconColor: '#34d399',
      borderColor: 'rgba(52, 211, 153, 0.15)',
      showSPL: false
    },
    {
      id: 'private_channels',
      icon: Lock,
      title: 'Private Channels Support',
      description: 'Snipes private alpha groups too. Direct QR code authorization/OTP logins empower your bot instance to read and trigger from private alpha signals safely.',
      badge: 'Alpha Priority',
      isLarge: false,
      gradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.08), rgba(190, 18, 60, 0.04))',
      hoverGradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.15), rgba(190, 18, 60, 0.08))',
      iconColor: '#fb7185',
      borderColor: 'rgba(244, 63, 94, 0.15)',
      showSPL: false
    },
    {
      id: 'transfers',
      icon: Send,
      title: 'Smart Transfers',
      description: 'Sweep or transfer native SOL and SPL tokens between your derived wallets or securely bridge them to physical ledger addresses with ease.',
      badge: 'Zero Slippage',
      isLarge: false,
      gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.08), rgba(190, 24, 93, 0.04))',
      hoverGradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(190, 24, 93, 0.08))',
      iconColor: '#f472b6',
      borderColor: 'rgba(236, 72, 153, 0.15)',
      showSPL: false
    },
    {
      id: 'referral_program',
      icon: Share2,
      title: 'Referral Rewards',
      description: 'Earn 20% lifetime shares of all transaction commissions paid by your recruits. Direct payouts land on your derived balance instant and peer-to-peer.',
      badge: 'Earn 20%',
      isLarge: false,
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(126, 34, 206, 0.04))',
      hoverGradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(126, 34, 206, 0.08))',
      iconColor: '#a78bfa',
      borderColor: 'rgba(139, 92, 246, 0.15)',
      showSPL: false
    }
  ];

  const showcaseImages = [
    {
      id: 1,
      src: "/GHOST-Artboard-2 (1).png",
      alt: "GHOSTwire turns every private Telegram channel into an automated trading feed",
      title: "Private Channel Integration",
      description: "GHOSTwire turns every private Telegram channel into an automated trading feed."
    },
    {
      id: 2,
      src: "/GHOST-Artboard-2-copy (1).png",
      alt: "Snipe private groups, alpha groups, whale groups, research groups, launch groups",
      title: "Multi-Group Sniping",
      description: "Snipe private groups, alpha groups, whale groups, research groups, and launch groups."
    },
    {
      id: 3,
      src: "/GHOST-Artboard-2-copy-2 (1).png",
      alt: "Message in → Contract detected → Buy executed → Profit managed → Fully automated",
      title: "End-to-End Automation",
      description: "Message in → Contract detected → Buy executed → Profit managed → Fully automated."
    },
    {
      id: 4,
      src: "/GHOST-Artboard-2-copy-3 (1).png",
      alt: "Self custodial always — your funds, your wallets",
      title: "Self-Custodial Always",
      description: "Your funds, your wallets. GHOSTwire only executes trades — never holds your assets."
    }
  ];

  return (
    <section style={{
      padding: 'clamp(48px, 10vw, 96px) 0',
      position: 'relative',
      background: 'radial-gradient(ellipse at 20% 30%, #1a0a2e 0%, #0A041B 40%, #060012 100%)',
      overflow: 'hidden'
    }} id="features">
      {/* Animated background glows */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-5%',
        width: '50%',
        height: '70%',
        background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.06), transparent 70%)',
        pointerEvents: 'none',
        animation: 'floatGlow 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-5%',
        width: '40%',
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
        opacity: 0.3,
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 clamp(16px, 5vw, 24px)',
        width: '100%',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 'clamp(40px, 8vw, 64px)',
          gap: '24px',
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          <div style={{
            maxWidth: '576px',
            textAlign: 'left',
            width: '100%'
          }}>
            <span style={{
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
            }}>
              <Sparkles size={14} style={{ color: '#a78bfa' }} />
              Edge Engine
            </span>
            <h2 style={{
              fontSize: 'clamp(30px, 6vw, 38px)',
              fontWeight: 800,
              fontFamily: "'Inter', sans-serif",
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '12px',
              lineHeight: 1.1
            }}>
              The ultimate trading edge for{' '}
              <span style={{
                background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Solana on-chain</span>
            </h2>
            <p style={{
              color: '#c4b5fd',
              marginTop: '8px',
              fontSize: 'clamp(14px, 4vw, 16px)',
              lineHeight: 1.7,
              fontWeight: 400,
            }}>
              Discover why experienced on-chain traders deploy GHOSTwire bot clusters to scale token trading, signal actions, and portfolio monitoring.
            </p>
          </div>
          <div style={{
            padding: '12px 18px',
            background: 'rgba(139, 92, 246, 0.08)',
            border: '1px solid rgba(139, 92, 246, 0.15)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '12px',
            color: '#c4b5fd',
            backdropFilter: 'blur(8px)',
          }}>
            <ShieldCheck size={18} style={{ color: '#34d399' }} />
            <span>Audited Derived Wallets Security</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* ROW 1: Derived Wallets (span 2) + Channel Monitoring */}
        {/* ============================================================ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '24px'
        }}>
          {/* Derived Wallets - spans 2 columns */}
          {features.filter(f => f.id === 'derived_wallets').map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  gridColumn: isMobile ? '1' : 'span 2',
                  padding: 'clamp(20px, 4vw, 28px)',
                  borderRadius: '20px',
                  background: item.gradient,
                  border: `1px solid ${item.borderColor}`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 'clamp(250px, 35vh, 290px)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = item.hoverGradient;
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(139, 92, 246, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = item.gradient;
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = item.borderColor;
                  }
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-60px',
                  right: '-60px',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08), transparent 70%)',
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }} />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', position: 'relative', zIndex: 10 }}>
                  <div style={{
                    padding: '14px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    borderRadius: '16px',
                    border: '1px solid rgba(139, 92, 246, 0.15)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComponent size={26} style={{ color: item.iconColor }} />
                  </div>
                  {item.badge && (
                    <span style={{
                      background: 'rgba(139, 92, 246, 0.12)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      padding: '6px 18px',
                      borderRadius: '9999px',
                      fontSize: 'clamp(11px, 1vw, 13px)',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: item.iconColor,
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                    }}>{item.badge}</span>
                  )}
                </div>

                <div style={{ position: 'relative', zIndex: 10 }}>
                  <h3 style={{
                    fontSize: 'clamp(18px, 2.5vw, 22px)',
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                    color: '#ffffff',
                    marginBottom: '8px',
                    marginTop: '4px'
                  }}>{item.title}</h3>
                  <p style={{
                    fontSize: 'clamp(12px, 1.2vw, 14px)',
                    color: '#c4b5fd',
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}>{item.description}</p>
                  {item.showSPL && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginTop: '16px'
                    }}>
                      <CheckCircle2 size={18} style={{ color: item.iconColor }} />
                      <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#9ca3af' }}>Fully compatible with SPL standards</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* Channel Monitoring - col 3 */}
          {features.filter(f => f.id === 'channel_monitoring').map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  padding: 'clamp(20px, 2.5vw, 24px)',
                  borderRadius: '20px',
                  background: item.gradient,
                  border: `1px solid ${item.borderColor}`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 'clamp(240px, 30vh, 270px)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = item.hoverGradient;
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(139, 92, 246, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.25)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = item.gradient;
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = item.borderColor;
                  }
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '140px',
                  height: '140px',
                  background: `radial-gradient(circle, ${item.iconColor}08, transparent 70%)`,
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{
                    padding: '12px',
                    background: 'rgba(139, 92, 246, 0.08)',
                    borderRadius: '14px',
                    border: '1px solid rgba(139, 92, 246, 0.1)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComponent size={22} style={{ color: item.iconColor }} />
                  </div>
                  {item.badge && (
                    <span style={{
                      background: 'rgba(139, 92, 246, 0.12)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      padding: '5px 16px',
                      borderRadius: '9999px',
                      fontSize: 'clamp(10px, 0.9vw, 12px)',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: item.iconColor,
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                    }}>{item.badge}</span>
                  )}
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: 'clamp(15px, 1.8vw, 17px)',
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                    color: '#ffffff',
                    marginBottom: '6px',
                    marginTop: '4px'
                  }}>{item.title}</h3>
                  <p style={{
                    fontSize: 'clamp(11px, 1vw, 12px)',
                    color: '#c4b5fd',
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}>{item.description}</p>
                </div>
                
                <div style={{ 
                  position: 'absolute', 
                  bottom: '-64px', 
                  right: '-64px', 
                  width: '128px', 
                  height: '128px', 
                  background: `radial-gradient(circle, ${item.iconColor}10, transparent)`,
                  borderRadius: '50%', 
                  filter: 'blur(64px)',
                  pointerEvents: 'none'
                }} />
              </motion.div>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* ROW 2: Portfolio Tracking + Instant Buy/Sell + Auto-Sell */}
        {/* ============================================================ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '24px'
        }}>
          {['portfolio_tracking', 'instant_swaps', 'auto_sell'].map((id, idx) => {
            const item = features.find(f => f.id === id);
            if (!item) return null;
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.05 }}
                style={{
                  padding: 'clamp(20px, 2.5vw, 24px)',
                  borderRadius: '20px',
                  background: item.gradient,
                  border: `1px solid ${item.borderColor}`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 'clamp(240px, 30vh, 270px)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = item.hoverGradient;
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(139, 92, 246, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.25)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = item.gradient;
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = item.borderColor;
                  }
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '140px',
                  height: '140px',
                  background: `radial-gradient(circle, ${item.iconColor}08, transparent 70%)`,
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{
                    padding: '12px',
                    background: 'rgba(139, 92, 246, 0.08)',
                    borderRadius: '14px',
                    border: '1px solid rgba(139, 92, 246, 0.1)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComponent size={22} style={{ color: item.iconColor }} />
                  </div>
                  {item.badge && (
                    <span style={{
                      background: 'rgba(139, 92, 246, 0.12)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      padding: '5px 16px',
                      borderRadius: '9999px',
                      fontSize: 'clamp(10px, 0.9vw, 12px)',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: item.iconColor,
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                    }}>{item.badge}</span>
                  )}
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: 'clamp(15px, 1.8vw, 17px)',
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                    color: '#ffffff',
                    marginBottom: '6px',
                    marginTop: '4px'
                  }}>{item.title}</h3>
                  <p style={{
                    fontSize: 'clamp(11px, 1vw, 12px)',
                    color: '#c4b5fd',
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}>{item.description}</p>
                  {item.showSPL && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginTop: '12px'
                    }}>
                      <CheckCircle2 size={16} style={{ color: item.iconColor }} />
                      <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#9ca3af' }}>SPL compatible</span>
                    </div>
                  )}
                </div>
                
                <div style={{ 
                  position: 'absolute', 
                  bottom: '-64px', 
                  right: '-64px', 
                  width: '128px', 
                  height: '128px', 
                  background: `radial-gradient(circle, ${item.iconColor}10, transparent)`,
                  borderRadius: '50%', 
                  filter: 'blur(64px)',
                  pointerEvents: 'none'
                }} />
              </motion.div>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* ROW 3: Private Channels + Smart Transfers + Referral Rewards */}
        {/* ============================================================ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '24px'
        }}>
          {['private_channels', 'transfers', 'referral_program'].map((id, idx) => {
            const item = features.find(f => f.id === id);
            if (!item) return null;
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.05 }}
                style={{
                  padding: 'clamp(20px, 2.5vw, 24px)',
                  borderRadius: '20px',
                  background: item.gradient,
                  border: `1px solid ${item.borderColor}`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 'clamp(240px, 30vh, 270px)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = item.hoverGradient;
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(139, 92, 246, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.25)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = item.gradient;
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = item.borderColor;
                  }
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '140px',
                  height: '140px',
                  background: `radial-gradient(circle, ${item.iconColor}08, transparent 70%)`,
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{
                    padding: '12px',
                    background: 'rgba(139, 92, 246, 0.08)',
                    borderRadius: '14px',
                    border: '1px solid rgba(139, 92, 246, 0.1)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComponent size={22} style={{ color: item.iconColor }} />
                  </div>
                  {item.badge && (
                    <span style={{
                      background: 'rgba(139, 92, 246, 0.12)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      padding: '5px 16px',
                      borderRadius: '9999px',
                      fontSize: 'clamp(10px, 0.9vw, 12px)',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: item.iconColor,
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                    }}>{item.badge}</span>
                  )}
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: 'clamp(15px, 1.8vw, 17px)',
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                    color: '#ffffff',
                    marginBottom: '6px',
                    marginTop: '4px'
                  }}>{item.title}</h3>
                  <p style={{
                    fontSize: 'clamp(11px, 1vw, 12px)',
                    color: '#c4b5fd',
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}>{item.description}</p>
                </div>
                
                <div style={{ 
                  position: 'absolute', 
                  bottom: '-64px', 
                  right: '-64px', 
                  width: '128px', 
                  height: '128px', 
                  background: `radial-gradient(circle, ${item.iconColor}10, transparent)`,
                  borderRadius: '50%', 
                  filter: 'blur(64px)',
                  pointerEvents: 'none'
                }} />
              </motion.div>
            );
          })}
        </div>

        {/* Showcase Section */}
        <div style={{ marginTop: 'clamp(64px, 12vw, 96px)' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 6vw, 48px)' }}>
            <span style={{
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
              letterSpacing: '0.05em'
            }}>
              <Sparkles size={14} style={{ color: '#a78bfa' }} />
              Visual Experience
            </span>
            <h2 style={{
              fontSize: 'clamp(26px, 6vw, 32px)',
              fontWeight: 800,
              fontFamily: "'Inter', sans-serif",
              color: '#ffffff',
              marginTop: '16px',
              letterSpacing: '-0.02em'
            }}>
              See GHOSTwire in <span style={{
                background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Action</span>
            </h2>
            <p style={{
              color: '#c4b5fd',
              marginTop: '8px',
              maxWidth: '672px',
              margin: '8px auto 0',
              fontSize: 'clamp(13px, 4vw, 14px)',
              padding: '0 16px',
              fontWeight: 400,
              lineHeight: 1.7,
            }}>
              Experience how GHOSTwire transforms your Telegram channels into an automated trading powerhouse
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {showcaseImages.map((image, idx) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '16px',
                  border: '1px solid rgba(139, 92, 246, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(0, 0, 0, 0.4)';
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.25)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.1)';
                  }
                }}
              >
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'rgba(139, 92, 246, 0.05)',
                }}>
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = 'scale(1)';
                      }
                    }}
                  />
                </div>
                <div style={{ padding: 'clamp(18px, 2vw, 24px)' }}>
                  <h3 style={{
                    fontSize: 'clamp(17px, 2.5vw, 20px)',
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                    color: '#ffffff',
                    marginBottom: '8px',
                    letterSpacing: '-0.01em',
                  }}>{image.title}</h3>
                  <p style={{
                    fontSize: 'clamp(14px, 1.5vw, 16px)',
                    color: '#c4b5fd',
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}>{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes floatGlow {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(30px, -20px) scale(1.1); }
          }
        `}
      </style>
    </section>
  );
}