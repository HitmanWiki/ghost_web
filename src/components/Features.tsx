import { motion } from 'motion/react';
import { Wallet, Radar, Zap, LineChart, TrendingUp, Send, Share2, Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';
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
      badge: 'Self-Custodial Always',
      isLarge: true,
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(79, 70, 229, 0.05))',
      iconColor: '#450cca'
    },
    {
      id: 'channel_monitoring',
      icon: Radar,
      title: 'Channel Monitoring',
      description: 'Continuous 24/7 active scanning of designated public or private Telegram channels for Solana contract addresses.',
      badge: '24/7 Autopilot',
      iconColor: '#0891b2'
    },
    {
      id: 'instant_swaps',
      icon: Zap,
      title: 'Instant Buy/Sell',
      description: 'Harness the power of Jupiter Aggregators to discover and execute the most capital-efficient swap routes automatically. Execution finishes within milliseconds.',
      badge: 'Best Rates',
      iconColor: '#d97706'
    },
    {
      id: 'portfolio_tracking',
      icon: LineChart,
      title: 'Portfolio Tracking',
      description: 'Real-time calculation of your performance metrics (P&L, cost basis, current valuations) aggregate by active wallet, contract address, or specific source channels.',
      badge: 'Dynamic Analytics',
      isLarge: true,
      gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(20, 184, 166, 0.05))',
      iconColor: '#0d9488'
    },
    {
      id: 'auto_sell',
      icon: TrendingUp,
      title: 'Auto-Sell Target Profit',
      description: 'Lock in your profit. Put your take profit goals on autopilot. The sniper executes immediate out-clicks the moment your target return is locked.',
      badge: 'Auto Take-Profit',
      iconColor: '#059669'
    },
    {
      id: 'transfers',
      icon: Send,
      title: 'Smart Transfers',
      description: 'Sweep or transfer native SOL and SPL tokens between your derived wallets or securely bridge them to physical ledger addresses with ease.',
      badge: 'Zero Slippage',
      iconColor: '#db2777'
    },
    {
      id: 'referral_program',
      icon: Share2,
      title: 'Referral Rewards',
      description: 'Earn 20% lifetime shares of all transaction commissions paid by your recruits. Direct payouts land on your derived balance instant and peer-to-peer.',
      badge: 'Earn 20%',
      iconColor: '#9333ea'
    },
    {
      id: 'private_channels',
      icon: Lock,
      title: 'Private Channels Support',
      description: 'Snipes private alpha groups too. Direct QR code authorization/OTP logins empower your bot instance to read and trigger from private alpha signals safely.',
      badge: 'Alpha Priority',
      iconColor: '#e11d48'
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
      background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #faf5ff 100%)',
      overflow: 'hidden'
    }} id="features">
      {/* Background glows */}
      <div style={{ position: 'absolute', top: '20%', right: '40px', width: '384px', height: '384px', background: 'rgba(139, 92, 246, 0.05)', borderRadius: '50%', filter: 'blur(130px)', pointerEvents: 'none', display: isMobile ? 'none' : 'block' }} />
      <div style={{ position: 'absolute', bottom: '20%', left: '40px', width: '384px', height: '384px', background: 'rgba(6, 182, 212, 0.05)', borderRadius: '50%', filter: 'blur(130px)', pointerEvents: 'none', display: isMobile ? 'none' : 'block' }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 clamp(16px, 5vw, 24px)',
        width: '100%'
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
              display: 'inline-block',
              padding: '4px 12px',
              fontSize: '12px',
              fontFamily: 'monospace',
              fontWeight: 500,
              borderRadius: '9999px',
              background: 'rgba(139, 92, 246, 0.1)',
              color: '#8b5cf6',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '12px'
            }}>Edge Engine</span>
            <h2 style={{
              fontSize: 'clamp(28px, 6vw, 36px)',
              fontWeight: 900,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '8px'
            }}>The ultimate trading edge for Solana on-chain</h2>
            <p style={{
              color: '#475569',
              marginTop: '8px',
              fontSize: 'clamp(14px, 4vw, 16px)'
            }}>Discover why experienced on-chain traders deploy GHOSTwire bot clusters to scale token trading, signal actions, and portfolio monitoring.</p>
          </div>
          <div style={{
            padding: '12px',
            background: 'rgba(255, 255, 255, 0.6)',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'monospace',
            fontSize: '12px'
          }}>
            <ShieldCheck size={16} style={{ color: '#059669' }} />
            <span>Audited Derived Wallets Security</span>
          </div>
        </div>

        {/* Features Grid - Responsive */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            if (item.isLarge && !isMobile) {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  style={{
                    gridColumn: 'span 2',
                    padding: 'clamp(20px, 4vw, 24px)',
                    borderRadius: '24px',
                    background: item.gradient || 'linear-gradient(135deg, rgba(139,92,246,0.05), rgba(79,70,229,0.02))',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '290px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{ position: 'absolute', top: '-48px', right: '-48px', width: '192px', height: '192px', background: 'rgba(255,255,255,0.5)', borderRadius: '50%', filter: 'blur(64px)' }} />
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', position: 'relative', zIndex: 10 }}>
                    <div style={{
                      padding: '12px',
                      background: 'rgba(255, 255, 255, 0.5)',
                      borderRadius: '16px',
                      border: '1px solid #e2e8f0',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComponent size={24} style={{ color: item.iconColor }} />
                    </div>
                    {item.badge && (
                      <span style={{
                        background: 'rgba(255,255,255,0.6)',
                        backdropFilter: 'blur(4px)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        fontSize: '10px',
                        fontFamily: 'monospace',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: '#1e293b'
                      }}>{item.badge}</span>
                    )}
                  </div>

                  <div style={{ position: 'relative', zIndex: 10 }}>
                    <h3 style={{
                      fontSize: 'clamp(20px, 4vw, 24px)',
                      fontWeight: 'bold',
                      color: '#0f172a',
                      marginBottom: '8px',
                      marginTop: '16px'
                    }}>{item.title}</h3>
                    <p style={{
                      fontSize: 'clamp(12px, 3vw, 14px)',
                      color: '#475569',
                      lineHeight: 1.625
                    }}>{item.description}</p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginTop: '16px'
                    }}>
                      <CheckCircle2 size={18} style={{ color: '#64748b' }} />
                      <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#64748b' }}>Fully compatible with SPL standards</span>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                style={{
                  padding: 'clamp(20px, 4vw, 24px)',
                  borderRadius: '24px',
                  background: 'rgba(255, 255, 255, 0.4)',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 'clamp(250px, 40vh, 290px)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div style={{
                    padding: '12px',
                    background: 'rgba(255, 255, 255, 0.5)',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComponent size={22} style={{ color: item.iconColor }} />
                  </div>
                  {item.badge && (
                    <span style={{
                      background: 'rgba(255,255,255,0.8)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      fontSize: '10px',
                      fontFamily: 'monospace',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: '#1e293b'
                    }}>{item.badge}</span>
                  )}
                </div>

                <div>
                  <h3 style={{
                    fontSize: 'clamp(16px, 4vw, 18px)',
                    fontWeight: 'bold',
                    color: '#0f172a',
                    marginBottom: '6px',
                    marginTop: '16px'
                  }}>{item.title}</h3>
                  <p style={{
                    fontSize: 'clamp(11px, 3vw, 12px)',
                    color: '#475569',
                    lineHeight: 1.5
                  }}>{item.description}</p>
                </div>
                
                <div style={{ position: 'absolute', bottom: '-64px', right: '-64px', width: '128px', height: '128px', background: 'rgba(139,92,246,0.05)', borderRadius: '50%', filter: 'blur(64px)' }} />
              </motion.div>
            );
          })}
        </div>

        {/* Showcase Section - Responsive Grid */}
        <div style={{ marginTop: 'clamp(64px, 12vw, 96px)' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 6vw, 48px)' }}>
            <span style={{
              display: 'inline-block',
              padding: '4px 12px',
              fontSize: '12px',
              fontFamily: 'monospace',
              fontWeight: 500,
              borderRadius: '9999px',
              background: 'rgba(139, 92, 246, 0.1)',
              color: '#8b5cf6',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>Visual Experience</span>
            <h2 style={{
              fontSize: 'clamp(24px, 6vw, 30px)',
              fontWeight: 'bold',
              color: '#0f172a',
              marginTop: '12px'
            }}>See GHOSTwire in Action</h2>
            <p style={{
              color: '#475569',
              marginTop: '8px',
              maxWidth: '672px',
              margin: '8px auto 0',
              fontSize: 'clamp(13px, 4vw, 14px)',
              padding: '0 16px'
            }}>Experience how GHOSTwire transforms your Telegram channels into an automated trading powerhouse</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px'
          }}>
            {showcaseImages.map((image, idx) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#f1f5f9'
                }}>
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      transition: 'transform 0.5s'
                    }}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div style={{ padding: '16px' }}>
                  <h3 style={{
                    fontSize: 'clamp(13px, 4vw, 14px)',
                    fontWeight: 600,
                    color: '#0f172a',
                    marginBottom: '4px'
                  }}>{image.title}</h3>
                  <p style={{
                    fontSize: 'clamp(11px, 3vw, 12px)',
                    color: '#475569',
                    lineHeight: 1.5
                  }}>{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}