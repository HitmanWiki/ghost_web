import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Bot, Send, ArrowRight, Check, Sparkles, Copy, RefreshCw, Wallet, Radar, Zap, ChevronRight, Terminal, Clock, TrendingUp, Award } from 'lucide-react';

interface SimulatedMessage {
  id: string;
  sender: 'user' | 'ghostwire' | 'channel';
  senderName: string;
  avatar: string;
  text: string;
  time: string;
  txHash?: string;
  amount?: string;
  isProfit?: boolean;
}

const SIMULATION_STEPS: SimulatedMessage[] = [
  {
    id: '1',
    sender: 'user',
    senderName: 'You',
    avatar: '👤',
    text: '/start',
    time: '14:32:01'
  },
  {
    id: '2',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '/logo.jpg',
    text: `GHOSTwire Bot - Solana Sniper Bot

Auto-snipe tokens from Telegram channels, track your portfolio, and automate your trading strategy.

User: AlphaTrader

Wallet: 74BoTq...MFSL
Balance: 0.0000 SOL
Positions: 0
Channels: 0
Auto-Sell: OFF
Auto-Buy: ON
Referrals: 0
Referral Earnings: 0.0000 SOL

Derived Wallet — No keys stored.

Select an option below:`,
    time: '14:32:02'
  },
  {
    id: '3',
    sender: 'user',
    senderName: 'You',
    avatar: '👤',
    text: '💼 Wallet',
    time: '14:32:15'
  },
  {
    id: '4',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '/logo.jpg',
    text: `💼 WALLET

Address:
74BoTqMbXNeaeF63wLzkKmRyn5S1NxKTdZsJznGAnMFSL

Balance: 0.0000 SOL

🔐 Derived from Telegram ID
⚠️ Fund to start sniping!`,
    time: '14:32:16'
  },
  {
    id: '5',
    sender: 'user',
    senderName: 'You',
    avatar: '👤',
    text: '📋 Channels',
    time: '14:32:30'
  },
  {
    id: '6',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '/logo.jpg',
    text: `📋 Your Channels

No channels configured.

➕ Add Channel
❌ Remove

« Back`,
    time: '14:32:31'
  },
  {
    id: '7',
    sender: 'user',
    senderName: 'You',
    avatar: '👤',
    text: '➕ Add Channel',
    time: '14:32:35'
  },
  {
    id: '8',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '/logo.jpg',
    text: `➕ Add Channel

🌐 Public — Anyone can view
🔒 Private — Requires TG Auth

🌐 Public
🔒 Private

« Back`,
    time: '14:32:36'
  },
  {
    id: '9',
    sender: 'user',
    senderName: 'You',
    avatar: '👤',
    text: '🌐 Public',
    time: '14:32:40'
  },
  {
    id: '10',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '/logo.jpg',
    text: `📋 Add Channel

Send channel username (@name):
Type cancel to abort.

« Back`,
    time: '14:32:41'
  },
  {
    id: '11',
    sender: 'user',
    senderName: 'You',
    avatar: '👤',
    text: '@crypto_signals',
    time: '14:32:48'
  },
  {
    id: '12',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '/logo.jpg',
    text: `📋 Channel: @crypto_signals

💼 Select Wallet for this Channel:

💼 W1 (74BoTq...)
💼 W2 (Not created)

« Cancel`,
    time: '14:32:49'
  },
  {
    id: '13',
    sender: 'user',
    senderName: 'You',
    avatar: '👤',
    text: '💼 W1',
    time: '14:32:53'
  },
  {
    id: '14',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '/logo.jpg',
    text: `📋 Channel: @crypto_signals
💼 Wallet: W1

💵 Buy Amount (SOL)

Enter amount or skip for default: 0.01 SOL

« Back`,
    time: '14:32:54'
  },
  {
    id: '15',
    sender: 'user',
    senderName: 'You',
    avatar: '👤',
    text: 'skip',
    time: '14:32:58'
  },
  {
    id: '16',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '/logo.jpg',
    text: `📊 Slippage %

Enter % (e.g., 10) or skip for default:

« Back`,
    time: '14:32:59'
  },
  {
    id: '17',
    sender: 'user',
    senderName: 'You',
    avatar: '👤',
    text: '10',
    time: '14:33:03'
  },
  {
    id: '18',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '/logo.jpg',
    text: `🎯 Take Profit %

Auto-sell when profit reaches this %
(or skip for default: 50%, 0 to disable):

« Back`,
    time: '14:33:04'
  },
  {
    id: '19',
    sender: 'user',
    senderName: 'You',
    avatar: '👤',
    text: '50',
    time: '14:33:08'
  },
  {
    id: '20',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '/logo.jpg',
    text: `✅ Channel Added! (🌐 Public)

📋 @crypto_signals
💼 Wallet: W1

💰 Buy: 0.01 SOL
📊 Slippage: 10.0%
🎯 Take Profit: 50%
🤖 Auto-Sell: ✅ ON

📡 Monitoring started!`,
    time: '14:33:09'
  },
  {
    id: '21',
    sender: 'channel',
    senderName: '@crypto_signals',
    avatar: '📡',
    text: `🚀 NEW GEM ALERT! 🚀

Contract: GNL7MQSzzksbfuquHTJuiDPVXvXpfxBfHfu1mQGhpump

Good luck!`,
    time: '14:35:22'
  },
  {
    id: '22',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '/logo.jpg',
    text: `🔥 Sniping token!

GNL7MQSz...pump
Amount: 0.01 SOL
💰 Fee: 0.1%

⏳ Executing buy...`,
    time: '14:35:22'
  },
  {
    id: '23',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '/logo.jpg',
    text: `🟢 BUY EXECUTED!

Token: LUCY
Amount: 12,096.07
Spent: 0.010000 SOL
💰 Fee: 0.000005 SOL (0.1%)
TX: 4TEoNH4n9ae73gz6DFWB...
MC: $67,384`,
    time: '14:35:24',
    txHash: '4TEoNH4n9ae73gz6DFWB...'
  },
  {
    id: '24',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '/logo.jpg',
    text: `📊 Portfolio Overview

• LUCY — 12,096.07

💰 SOL: 0.0099 SOL
💎 Total: $0.01`,
    time: '14:35:25'
  },
  {
    id: '25',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '/logo.jpg',
    text: `📈 LUCY status update:
⚡ Active P&L: +24.5% ($42k -> $53k Mcap)`,
    time: '14:36:50',
    isProfit: true
  },
  {
    id: '26',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '/logo.jpg',
    text: `🎯 Auto-Sell Triggered!

Token: LUCY
Profit: +52.3% (target: 50%)
Amount: 12,096.07
SOL Received: 0.015995 SOL
💰 Fee: 0.000008 SOL (0.1%)
TX: 8xKp7YqVzRcT2NmLw...`,
    time: '14:38:15',
    txHash: '8xKp7YqVzRcT2NmLw...'
  },
  {
    id: '27',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '/logo.jpg',
    text: `✅ Auto-sell executed! Profit locked.`,
    time: '14:38:16',
    isProfit: true
  }
];

export default function InteractiveFlow() {
  const [messages, setMessages] = useState<SimulatedMessage[]>([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [copied, setCopied] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax effect for background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  useEffect(() => {
    setMessages([SIMULATION_STEPS[0]]);
    setStepIndex(1);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || stepIndex >= SIMULATION_STEPS.length) return;

    let delay = 1500;
    if (stepIndex === 2 || stepIndex === 4 || stepIndex === 6 || stepIndex === 8 || stepIndex === 10 || stepIndex === 12 || stepIndex === 14 || stepIndex === 16 || stepIndex === 18) {
      delay = 800;
    } else if (stepIndex === 20) {
      delay = 2000;
    } else if (stepIndex === 21) {
      delay = 3000;
    } else if (stepIndex === 22 || stepIndex === 23) {
      delay = 1500;
    } else if (stepIndex === 25) {
      delay = 4000;
    } else if (stepIndex === 26) {
      delay = 2000;
    }

    const timer = setTimeout(() => {
      setMessages((prev) => [...prev, SIMULATION_STEPS[stepIndex]]);
      setStepIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [stepIndex, isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    if (stepIndex < SIMULATION_STEPS.length) {
      setMessages((prev) => [...prev, SIMULATION_STEPS[stepIndex]]);
      setStepIndex((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setMessages([SIMULATION_STEPS[0]]);
    setStepIndex(1);
    setIsAutoPlaying(true);
  };

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section 
      ref={sectionRef}
      style={{
        padding: 'clamp(48px, 8vw, 80px) 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 20% 30%, #1a0a2e 0%, #0A041B 40%, #060012 100%)',
      }}
      id="demo"
    >
      {/* Animated background glows */}
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
          background: 'rgba(6, 182, 212, 0.04)',
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
        backgroundSize: '24px 24px',
        opacity: 0.3,
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          maxWidth: '672px',
          margin: '0 auto 48px auto'
        }}>
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
            Live Simulator
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: 'clamp(28px, 5vw, 36px)',
              fontWeight: 800,
              fontFamily: "'Inter', sans-serif",
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '16px'
            }}
          >
            See GHOSTwire in{' '}
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Action</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ 
              color: '#c4b5fd',
              fontSize: 'clamp(14px, 3vw, 16px)',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Watch how GHOSTwire detects signals, executes trades, and auto-sells for profit.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'stretch'
        }}>
          
          {/* Left Side - Info Panel */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '24px',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h3 style={{
                  fontSize: 'clamp(20px, 4vw, 24px)',
                  fontWeight: 700,
                  fontFamily: "'Inter', sans-serif",
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                }}>
                  <motion.div
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles size={24} style={{ color: '#a78bfa' }} />
                  </motion.div>
                  Complete Trading Flow
                </h3>
                <p style={{ 
                  color: '#c4b5fd', 
                  lineHeight: 1.7,
                  fontSize: 'clamp(13px, 2.5vw, 14px)',
                  fontWeight: 400,
                }}>
                  This simulation shows the entire GHOSTwire experience — from starting the bot, adding a channel, detecting a signal, executing a buy, tracking P&L, and auto-selling at profit target.
                </p>
              </div>

              {/* Feature Icons */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
              }}>
                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  style={{
                    textAlign: 'center',
                    padding: '14px 12px',
                    borderRadius: '14px',
                    background: 'rgba(139, 92, 246, 0.06)',
                    border: '1px solid rgba(139, 92, 246, 0.08)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Wallet size={20} style={{ color: '#a78bfa', margin: '0 auto 6px auto' }} />
                  <p style={{ fontSize: '10px', color: '#c4b5fd', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>Derived Wallet</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  style={{
                    textAlign: 'center',
                    padding: '14px 12px',
                    borderRadius: '14px',
                    background: 'rgba(6, 182, 212, 0.06)',
                    border: '1px solid rgba(6, 182, 212, 0.08)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Radar size={20} style={{ color: '#67e8f9', margin: '0 auto 6px auto' }} />
                  <p style={{ fontSize: '10px', color: '#c4b5fd', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>24/7 Monitoring</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  style={{
                    textAlign: 'center',
                    padding: '14px 12px',
                    borderRadius: '14px',
                    background: 'rgba(52, 211, 153, 0.06)',
                    border: '1px solid rgba(52, 211, 153, 0.08)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Zap size={20} style={{ color: '#34d399', margin: '0 auto 6px auto' }} />
                  <p style={{ fontSize: '10px', color: '#c4b5fd', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>Auto-Sell</p>
                </motion.div>
              </div>

              {/* Progress indicator */}
              <div style={{ 
                background: 'rgba(139, 92, 246, 0.04)',
                border: '1px solid rgba(139, 92, 246, 0.06)',
                borderRadius: '14px',
                padding: '16px 18px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <p style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>Simulation Progress</p>
                  <p style={{ 
                    fontSize: '11px', 
                    color: '#a78bfa', 
                    fontWeight: 600, 
                    fontFamily: 'monospace',
                    background: 'rgba(139, 92, 246, 0.1)',
                    padding: '2px 10px',
                    borderRadius: '6px',
                  }}>
                    Step {stepIndex} of {SIMULATION_STEPS.length}
                  </p>
                </div>
                <div style={{
                  height: '4px',
                  background: 'rgba(139, 92, 246, 0.1)',
                  borderRadius: '9999px',
                  overflow: 'hidden'
                }}>
                  <motion.div 
                    style={{
                      height: '100%',
                      background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
                      borderRadius: '9999px',
                      boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${(stepIndex / SIMULATION_STEPS.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>

            {/* Controls */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                background: 'rgba(139, 92, 246, 0.04)',
                border: '1px solid rgba(139, 92, 246, 0.08)',
                borderRadius: '16px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backdropFilter: 'blur(8px)',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={handleReset}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: 'rgba(139, 92, 246, 0.08)',
                    border: '1px solid rgba(139, 92, 246, 0.1)',
                    color: '#c4b5fd',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
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
                  <RefreshCw size={14} />
                  <span className="desktop-only">Restart</span>
                </button>
                <button
                  onClick={handleNext}
                  disabled={stepIndex >= SIMULATION_STEPS.length}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '10px',
                    background: stepIndex >= SIMULATION_STEPS.length ? 'rgba(139, 92, 246, 0.2)' : 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                    border: 'none',
                    color: 'white',
                    cursor: stepIndex >= SIMULATION_STEPS.length ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    opacity: stepIndex >= SIMULATION_STEPS.length ? 0.4 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (stepIndex < SIMULATION_STEPS.length) {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 92, 246, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (stepIndex < SIMULATION_STEPS.length) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <span>Next</span>
                  <ArrowRight size={14} />
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: isAutoPlaying ? '#34d399' : '#6b7280',
                  animation: isAutoPlaying ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none',
                }} />
                <span style={{ fontSize: '10px', color: '#9ca3af', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                  {isAutoPlaying ? 'Auto-playing' : 'Paused'}
                </span>
              </div>
            </motion.div>

            {/* Powered by - NOW MUCH LARGER */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              paddingTop: '12px',
              paddingBottom: '4px',
              opacity: 0.7,
            }}>
              <span style={{
                fontSize: 'clamp(13px, 1.2vw, 15px)',
                fontFamily: "'Inter', sans-serif",
                color: '#9ca3af',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 700,
              }}>Powered by:</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#8b5cf6',
                  display: 'inline-block',
                }} />
                <span style={{ 
                  fontSize: 'clamp(13px, 1.2vw, 15px)', 
                  fontFamily: "'Inter', sans-serif", 
                  color: '#c4b5fd',
                  fontWeight: 600,
                }}>Jupiter API</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#a855f7',
                  display: 'inline-block',
                }} />
                <span style={{ 
                  fontSize: 'clamp(13px, 1.2vw, 15px)', 
                  fontFamily: "'Inter', sans-serif", 
                  color: '#c4b5fd',
                  fontWeight: 600,
                }}>Solana</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#ec4899',
                  display: 'inline-block',
                }} />
                <span style={{ 
                  fontSize: 'clamp(13px, 1.2vw, 15px)', 
                  fontFamily: "'Inter', sans-serif", 
                  color: '#c4b5fd',
                  fontWeight: 600,
                }}>DexScreener</span>
              </div>
            </div>
          </div>

          {/* Right Side - Chat Simulator */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                background: 'linear-gradient(145deg, #0D0520, #16082E)',
                border: '1px solid rgba(139, 92, 246, 0.15)',
                borderRadius: '16px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(139, 92, 246, 0.05)',
                height: '600px',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              {/* Header with Logo */}
              <div style={{
                background: 'rgba(10, 4, 27, 0.8)',
                borderBottom: '1px solid rgba(139, 92, 246, 0.08)',
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                  <div>
                    <h4 style={{ 
                      fontSize: '14px', 
                      fontWeight: 700, 
                      fontFamily: "'Inter', sans-serif", 
                      color: 'white',
                      letterSpacing: '-0.01em',
                    }}>GHOSTwire</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: '#34d399',
                        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                      }} />
                      <p style={{
                        fontSize: '9px',
                        color: '#8b5cf6',
                        fontFamily: 'monospace',
                        fontWeight: 500,
                      }}>Online • Derived Wallet Active</p>
                    </div>
                  </div>
                </div>
                <motion.div 
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Bot size={18} style={{ color: '#6b7280' }} />
                </motion.div>
              </div>

              {/* Chat Messages - Auto-scrolling */}
              <div 
                ref={chatContainerRef}
                style={{
                  flex: 1,
                  overflowY: 'auto',
                  padding: '16px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div style={{ flex: 1 }} />
                
                {messages.map((msg, idx) => {
                  const isUser = msg.sender === 'user';
                  const isChannel = msg.sender === 'channel';
                  const isProfit = msg.isProfit || false;
                  
                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        display: 'flex',
                        gap: '10px',
                        maxWidth: isUser ? '80%' : '90%',
                        marginLeft: isUser ? 'auto' : 0,
                        flexDirection: isUser ? 'row-reverse' : 'row',
                      }}
                    >
                      {!isUser && (
                        <div style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          fontSize: '12px',
                          background: isChannel ? 'rgba(6, 182, 212, 0.15)' : 'rgba(139, 92, 246, 0.15)',
                          border: isChannel ? '1px solid rgba(6, 182, 212, 0.15)' : '1px solid rgba(139, 92, 246, 0.15)',
                          overflow: 'hidden',
                        }}>
                          {msg.avatar && (msg.avatar === '/logo.jpg' || msg.avatar.endsWith('.jpg') || msg.avatar.endsWith('.png')) ? (
                            <img 
                              src={msg.avatar} 
                              alt={msg.senderName}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                              }}
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                if (e.currentTarget.parentElement) {
                                  e.currentTarget.parentElement.innerHTML = '👻';
                                }
                              }}
                            />
                          ) : (
                            <span>{msg.avatar}</span>
                          )}
                        </div>
                      )}

                      <div style={{ maxWidth: '100%' }}>
                        <p style={{
                          fontSize: '8px',
                          color: '#6b7280',
                          marginBottom: '3px',
                          textAlign: isUser ? 'right' : 'left',
                          fontFamily: 'monospace',
                          letterSpacing: '0.02em',
                        }}>
                          {msg.senderName} • {msg.time}
                        </p>

                        <div style={{
                          padding: '10px 14px',
                          borderRadius: '12px',
                          whiteSpace: 'pre-line',
                          fontSize: '12px',
                          lineHeight: '1.6',
                          fontFamily: "'Inter', sans-serif",
                          ...(isUser 
                            ? {
                                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                                color: 'white',
                                borderTopRightRadius: 0,
                                boxShadow: '0 2px 10px rgba(139, 92, 246, 0.2)',
                              }
                            : isChannel
                              ? {
                                  background: 'rgba(6, 182, 212, 0.08)',
                                  border: '1px solid rgba(6, 182, 212, 0.1)',
                                  color: '#67e8f9',
                                  borderTopLeftRadius: 0,
                                }
                              : isProfit
                                ? {
                                    background: 'rgba(52, 211, 153, 0.08)',
                                    border: '1px solid rgba(52, 211, 153, 0.15)',
                                    color: '#34d399',
                                    borderTopLeftRadius: 0,
                                  }
                                : {
                                    background: 'rgba(139, 92, 246, 0.06)',
                                    border: '1px solid rgba(139, 92, 246, 0.08)',
                                    color: '#e5e7eb',
                                    borderTopLeftRadius: 0,
                                  }
                          )
                        }}>
                          {msg.text.split('\n').map((line, lidx) => (
                            <p key={lidx} style={{
                              marginBottom: lidx === msg.text.split('\n').length - 1 ? 0 : '2px',
                              fontWeight: line.startsWith('✅') || line.startsWith('🎯') || line.startsWith('🟢') ? 600 : 400,
                            }}>{line}</p>
                          ))}

                          {msg.txHash && (
                            <div style={{ marginTop: '8px' }}>
                              <button 
                                onClick={() => copyText(msg.txHash!)}
                                style={{
                                  fontSize: '10px',
                                  color: '#8b5cf6',
                                  fontFamily: 'monospace',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '4px',
                                  background: 'rgba(0, 0, 0, 0.3)',
                                  padding: '3px 8px',
                                  borderRadius: '6px',
                                  border: 'none',
                                  cursor: 'pointer',
                                  transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#a78bfa'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#8b5cf6'}
                              >
                                {copied ? <Check size={10} style={{ color: '#34d399' }} /> : <Copy size={10} />}
                                TX: {msg.txHash.slice(0, 12)}...
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Input Bar */}
              <div style={{
                background: 'rgba(10, 4, 27, 0.8)',
                borderTop: '1px solid rgba(139, 92, 246, 0.06)',
                padding: '12px 16px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    flex: 1,
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(139, 92, 246, 0.08)',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    fontFamily: 'monospace',
                    fontSize: '11px',
                    color: '#6b7280',
                  }}>
                    {stepIndex < SIMULATION_STEPS.length && isAutoPlaying ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ color: '#8b5cf6' }}>GHOSTwire is processing</span>
                        <span style={{ animation: 'pulse 1s infinite', color: '#8b5cf6' }}>.</span>
                        <span style={{ animation: 'pulse 1s infinite 0.075s', color: '#8b5cf6' }}>.</span>
                        <span style={{ animation: 'pulse 1s infinite 0.15s', color: '#8b5cf6' }}>.</span>
                      </div>
                    ) : stepIndex >= SIMULATION_STEPS.length ? (
                      <span style={{ color: '#34d399' }}>✅ Simulation complete! Click restart to watch again.</span>
                    ) : (
                      <span style={{ color: '#6b7280' }}>⏸️ Simulation paused. Click play to continue.</span>
                    )}
                  </div>
                  <motion.div 
                    animate={{ scale: isAutoPlaying ? [1, 1.05, 1] : 1 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '10px',
                      background: 'rgba(139, 92, 246, 0.1)',
                      color: '#8b5cf6',
                      opacity: 0.5,
                      border: '1px solid rgba(139, 92, 246, 0.05)',
                    }}
                  >
                    <Send size={16} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          @media (max-width: 768px) {
            .desktop-only {
              display: none !important;
            }
          }
        `}
      </style>
    </motion.section>
  );
}