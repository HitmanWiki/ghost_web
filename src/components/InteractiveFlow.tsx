import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Bot, Send, ArrowRight, Check, Sparkles, Copy, RefreshCw, Wallet, Radar, Zap } from 'lucide-react';

interface SimulatedMessage {
  id: string;
  sender: 'user' | 'ghostwire' | 'channel';
  senderName: string;
  avatar: string;
  text: string;
  time: string;
  txHash?: string;
  amount?: string;
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
    avatar: '👻',
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
    avatar: '👻',
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
    avatar: '👻',
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
    avatar: '👻',
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
    avatar: '👻',
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
    avatar: '👻',
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
    avatar: '👻',
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
    avatar: '👻',
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
    avatar: '👻',
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
    avatar: '👻',
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
    avatar: '👻',
    text: `🔥 Sniping token!

GNL7MQSz...pump
Amount: 0.01 SOL
💰 Fee: 0.05%

⏳ Executing buy...`,
    time: '14:35:22'
  },
  {
    id: '23',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '👻',
    text: `🟢 BUY EXECUTED!

Token: LUCY
Amount: 12,096.07
Spent: 0.010000 SOL
💰 Fee: 0.000005 SOL (0.05%)
TX: 4TEoNH4n9ae73gz6DFWB...
MC: $67,384`,
    time: '14:35:24',
    txHash: '4TEoNH4n9ae73gz6DFWB...'
  },
  {
    id: '24',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '👻',
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
    avatar: '👻',
    text: `📈 LUCY status update:
⚡ Active P&L: +24.5% ($42k -> $53k Mcap)`,
    time: '14:36:50'
  },
  {
    id: '26',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '👻',
    text: `🎯 Auto-Sell Triggered!

Token: LUCY
Profit: +52.3% (target: 50%)
Amount: 12,096.07
SOL Received: 0.015995 SOL
💰 Fee: 0.000008 SOL (0.05%)
TX: 8xKp7YqVzRcT2NmLw...`,
    time: '14:38:15',
    txHash: '8xKp7YqVzRcT2NmLw...'
  },
  {
    id: '27',
    sender: 'ghostwire',
    senderName: 'GHOSTwire',
    avatar: '👻',
    text: `✅ Auto-sell executed! Profit locked.`,
    time: '14:38:16'
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
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #faf5ff 100%)'
      }}
      id="demo"
    >
      {/* Light Gradient Orbs */}
      <motion.div 
        style={{
          position: 'absolute',
          top: '80px',
          left: '-160px',
          width: '320px',
          height: '320px',
          background: 'rgba(139, 92, 246, 0.1)',
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
          background: 'rgba(6, 182, 212, 0.1)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          y: bgY
        }}
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '384px',
          height: '384px',
          background: 'rgba(236, 72, 153, 0.05)',
          borderRadius: '50%',
          filter: 'blur(120px)'
        }}
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(196, 181, 253, 1) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: 0.2,
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '672px',
          margin: '0 auto 64px auto'
        }}>
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
            Live Simulator
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              letterSpacing: '-0.025em',
              color: '#0f172a',
              marginBottom: '16px'
            }}
          >
            See GHOSTwire in Action
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: '#475569' }}
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
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <motion.div
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles style={{ width: '24px', height: '24px', color: '#8b5cf6' }} />
                </motion.div>
                Complete Trading Flow
              </h3>
              <p style={{ color: '#475569', lineHeight: '1.625' }}>
                This simulation shows the entire GHOSTwire experience — from starting the bot, adding a channel, detecting a signal, executing a buy, tracking P&L, and auto-selling at profit target.
              </p>

              {/* Feature Icons */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                paddingTop: '16px'
              }}>
                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  style={{
                    textAlign: 'center',
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <Wallet style={{ width: '20px', height: '20px', color: '#8b5cf6', margin: '0 auto 4px auto' }} />
                  <p style={{ fontSize: '10px', color: '#64748b' }}>Derived Wallet</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  style={{
                    textAlign: 'center',
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <Radar style={{ width: '20px', height: '20px', color: '#06b6d4', margin: '0 auto 4px auto' }} />
                  <p style={{ fontSize: '10px', color: '#64748b' }}>24/7 Monitoring</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  style={{
                    textAlign: 'center',
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <Zap style={{ width: '20px', height: '20px', color: '#f59e0b', margin: '0 auto 4px auto' }} />
                  <p style={{ fontSize: '10px', color: '#64748b' }}>Auto-Sell</p>
                </motion.div>
              </div>

              {/* Progress indicator */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
                <p style={{ fontSize: '12px', color: '#64748b' }}>Simulation Progress</p>
                <div style={{
                  height: '6px',
                  background: '#e2e8f0',
                  borderRadius: '9999px',
                  overflow: 'hidden'
                }}>
                  <motion.div 
                    style={{
                      height: '100%',
                      background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                      borderRadius: '9999px'
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${(stepIndex / SIMULATION_STEPS.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p style={{
                  fontSize: '10px',
                  color: '#94a3b8',
                  textAlign: 'right'
                }}>
                  Step {stepIndex} of {SIMULATION_STEPS.length}
                </p>
              </div>
            </div>

            {/* Controls */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '20px',
                marginTop: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={handleReset}
                  style={{
                    padding: '10px',
                    borderRadius: '12px',
                    background: '#f1f5f9',
                    border: '1px solid #e2e8f0',
                    color: '#334155',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#e2e8f0'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#f1f5f9'}
                  title="Replay Simulation"
                >
                  <RefreshCw style={{ width: '16px', height: '16px' }} />
                </button>
                <button
                  onClick={handleNext}
                  disabled={stepIndex >= SIMULATION_STEPS.length}
                  style={{
                    padding: '10px',
                    borderRadius: '12px',
                    background: '#8b5cf6',
                    border: 'none',
                    color: 'white',
                    cursor: stepIndex >= SIMULATION_STEPS.length ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease',
                    opacity: stepIndex >= SIMULATION_STEPS.length ? 0.3 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (stepIndex < SIMULATION_STEPS.length) {
                      e.currentTarget.style.background = 'rgba(139, 92, 246, 0.8)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (stepIndex < SIMULATION_STEPS.length) {
                      e.currentTarget.style.background = '#8b5cf6';
                    }
                  }}
                >
                  <ArrowRight style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: isAutoPlaying ? '#22c55e' : '#94a3b8',
                  animation: isAutoPlaying ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none'
                }} />
                <span style={{ fontSize: '10px', color: '#64748b' }}>
                  {isAutoPlaying ? 'Auto-playing' : 'Paused'}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Chat Simulator */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                background: 'linear-gradient(135deg, #180C36, #0A041B)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '16px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                height: '580px',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              {/* Header with Logo */}
              <div style={{
                background: '#150D2E',
                borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
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
                          e.currentTarget.parentElement.innerHTML = '<span style="color: white; font-size: 20px;">👻</span>';
                        }
                      }}
                    />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: 'white' }}>GHOSTwire</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#22c55e',
                        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                      }} />
                      <p style={{
                        fontSize: '10px',
                        color: 'rgba(0, 255, 255, 0.8)',
                        fontFamily: 'monospace'
                      }}>Online • Derived Wallet Active</p>
                    </div>
                  </div>
                </div>
                <motion.div 
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Bot style={{ width: '20px', height: '20px', color: '#9ca3af' }} />
                </motion.div>
              </div>

              {/* Chat Messages - Auto-scrolling */}
              <div 
                ref={chatContainerRef}
                style={{
                  flex: 1,
                  overflowY: 'auto',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div style={{ flex: 1 }} />
                
                {messages.map((msg, idx) => {
                  const isUser = msg.sender === 'user';
                  const isChannel = msg.sender === 'channel';
                  
                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        display: 'flex',
                        gap: '12px',
                        maxWidth: '85%',
                        marginLeft: isUser ? 'auto' : 0,
                        flexDirection: isUser ? 'row-reverse' : 'row'
                      }}
                    >
                      {!isUser && (
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          fontSize: '14px',
                          background: isChannel ? 'rgba(17, 94, 89, 0.45)' : 'rgba(139, 92, 246, 0.2)',
                          border: isChannel ? '1px solid rgba(20, 184, 166, 0.3)' : '1px solid rgba(139, 92, 246, 0.3)'
                        }}>
                          {msg.avatar}
                        </div>
                      )}

                      <div>
                        <p style={{
                          fontSize: '10px',
                          color: '#6b7280',
                          marginBottom: '4px',
                          textAlign: isUser ? 'right' : 'left'
                        }}>
                          {msg.senderName} • {msg.time}
                        </p>

                        <div style={{
                          padding: '14px',
                          borderRadius: '16px',
                          whiteSpace: 'pre-line',
                          fontSize: '14px',
                          lineHeight: '1.625',
                          ...(isUser 
                            ? {
                                background: '#8b5cf6',
                                color: 'white',
                                borderTopRightRadius: 0
                              }
                            : isChannel
                              ? {
                                  background: 'rgba(17, 94, 89, 0.2)',
                                  border: '1px solid rgba(20, 184, 166, 0.2)',
                                  color: '#5eead4',
                                  borderTopLeftRadius: 0
                                }
                              : {
                                  background: '#1D123D',
                                  border: '1px solid rgba(139, 92, 246, 0.15)',
                                  color: '#f3f4f6',
                                  borderTopLeftRadius: 0
                                }
                          )
                        }}>
                          {msg.text.split('\n').map((line, lidx) => (
                            <p key={lidx} style={{
                              marginBottom: lidx === msg.text.split('\n').length - 1 ? 0 : '2px'
                            }}>{line}</p>
                          ))}

                          {msg.txHash && (
                            <div style={{ marginTop: '10px' }}>
                              <button 
                                onClick={() => copyText(msg.txHash!)}
                                style={{
                                  fontSize: '12px',
                                  color: '#06b6d4',
                                  fontFamily: 'monospace',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '4px',
                                  background: 'rgba(0, 0, 0, 0.3)',
                                  padding: '4px 8px',
                                  borderRadius: '8px',
                                  border: 'none',
                                  cursor: 'pointer',
                                  transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#67e8f9'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#06b6d4'}
                              >
                                {copied ? <Check style={{ width: '12px', height: '12px', color: '#4ade80' }} /> : <Copy style={{ width: '12px', height: '12px' }} />}
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
                background: '#150D2E',
                borderTop: '1px solid rgba(139, 92, 246, 0.2)',
                padding: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    flex: 1,
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    color: '#9ca3af'
                  }}>
                    {stepIndex < SIMULATION_STEPS.length && isAutoPlaying ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span>GHOSTwire is processing</span>
                        <span style={{ animation: 'pulse 1s infinite' }}>.</span>
                        <span style={{ animation: 'pulse 1s infinite 0.075s' }}>.</span>
                        <span style={{ animation: 'pulse 1s infinite 0.15s' }}>.</span>
                      </div>
                    ) : stepIndex >= SIMULATION_STEPS.length ? (
                      "Simulation complete! Click restart to watch again."
                    ) : (
                      "Simulation paused. Click play to continue."
                    )}
                  </div>
                  <motion.div 
                    animate={{ scale: isAutoPlaying ? [1, 1.1, 1] : 1 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    style={{
                      padding: '12px',
                      borderRadius: '12px',
                      background: 'rgba(139, 92, 246, 0.2)',
                      color: '#00ffff',
                      opacity: 0.6
                    }}
                  >
                    <Send style={{ width: '16px', height: '16px' }} />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Powered by */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              marginTop: '24px',
              opacity: 0.6
            }}>
              <span style={{
                fontSize: '10px',
                fontFamily: 'monospace',
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>Powered by:</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#06b6d4'
                }} />
                <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#475569' }}>Jupiter API</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#a855f7'
                }} />
                <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#475569' }}>Solana</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#ec4899'
                }} />
                <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#475569' }}>DexScreener</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Add keyframe animations */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
    </motion.section>
  );
}