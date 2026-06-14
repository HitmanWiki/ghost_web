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
      className="py-20 relative overflow-hidden"
      id="demo"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #faf5ff 100%)'
      }}
    >
      {/* Light Gradient Orbs */}
      <motion.div 
        className="absolute top-20 -left-40 w-80 h-80 bg-ghost-purple/10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ y: bgY }}
      />
      <motion.div 
        className="absolute bottom-20 -right-40 w-80 h-80 bg-ghost-cyan/10 rounded-full blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ y: bgY }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-ghost-pink/5 rounded-full blur-[120px]"
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#c4b5fd_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-ghost-purple/10 text-ghost-purple border border-ghost-purple/20 uppercase tracking-widest inline-block mb-4"
          >
            Live Simulator
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-slate-900 mb-4"
          >
            See GHOSTwire in Action
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600"
          >
            Watch how GHOSTwire detects signals, executes trades, and auto-sells for profit.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side - Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6 text-ghost-purple" />
                </motion.div>
                Complete Trading Flow
              </h3>
              <p className="text-slate-600 leading-relaxed">
                This simulation shows the entire GHOSTwire experience — from starting the bot, adding a channel, detecting a signal, executing a buy, tracking P&L, and auto-selling at profit target.
              </p>

              {/* Feature Icons */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="text-center p-3 rounded-xl bg-white border border-slate-200 shadow-sm"
                >
                  <Wallet className="w-5 h-5 text-ghost-purple mx-auto mb-1" />
                  <p className="text-[10px] text-slate-500">Derived Wallet</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="text-center p-3 rounded-xl bg-white border border-slate-200 shadow-sm"
                >
                  <Radar className="w-5 h-5 text-ghost-cyan mx-auto mb-1" />
                  <p className="text-[10px] text-slate-500">24/7 Monitoring</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="text-center p-3 rounded-xl bg-white border border-slate-200 shadow-sm"
                >
                  <Zap className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                  <p className="text-[10px] text-slate-500">Auto-Sell</p>
                </motion.div>
              </div>

              {/* Progress indicator */}
              <div className="space-y-2 mt-4">
                <p className="text-xs text-slate-500">Simulation Progress</p>
                <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-ghost-purple to-ghost-cyan rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(stepIndex / SIMULATION_STEPS.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-[10px] text-slate-400 text-right">
                  Step {stepIndex} of {SIMULATION_STEPS.length}
                </p>
              </div>
            </div>

            {/* Controls */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-slate-200 rounded-2xl p-5 mt-8 flex items-center justify-between shadow-sm"
            >
              <div className="flex gap-2">
                <button
                  onClick={handleReset}
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-all"
                  title="Replay Simulation"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={stepIndex >= SIMULATION_STEPS.length}
                  className="p-2.5 rounded-xl bg-ghost-purple hover:bg-ghost-purple/80 text-white transition-all disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-ghost-green animate-pulse' : 'bg-slate-400'}`} />
                <span className="text-[10px] text-slate-500">
                  {isAutoPlaying ? 'Auto-playing' : 'Paused'}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Chat Simulator (keep dark for contrast) */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-b from-[#180C36] to-[#0A041B] border border-ghost-purple/30 rounded-2xl shadow-2xl h-[580px] flex flex-col overflow-hidden"
            >
              {/* Header with Logo */}
              <div className="bg-[#150D2E] border-b border-ghost-purple/20 px-5 py-3.5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-ghost-purple to-ghost-cyan flex items-center justify-center shadow-lg">
                    <img 
                      src="/logo.jpg" 
                      alt="GHOSTwire Logo" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = '<span class="text-white text-lg">👻</span>';
                        }
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">GHOSTwire</h4>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-ghost-green animate-pulse" />
                      <p className="text-[10px] text-ghost-neon/80 font-mono">Online • Derived Wallet Active</p>
                    </div>
                  </div>
                </div>
                <motion.div 
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Bot className="w-5 h-5 text-gray-400" />
                </motion.div>
              </div>

              {/* Chat Messages - Auto-scrolling */}
              <div 
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-5 space-y-4 flex flex-col"
              >
                <div className="flex-1" />
                
                {messages.map((msg, idx) => {
                  const isUser = msg.sender === 'user';
                  const isChannel = msg.sender === 'channel';
                  
                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex gap-3 max-w-[85%] ${isUser ? 'ml-auto flex-row-reverse' : ''}`}
                    >
                      {!isUser && (
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm ${
                          isChannel ? 'bg-teal-900/45 border border-teal-500/30' : 'bg-ghost-purple/20 border border-ghost-purple/30'
                        }`}>
                          {msg.avatar}
                        </div>
                      )}

                      <div>
                        <p className={`text-[10px] text-gray-500 mb-1 ${isUser ? 'text-right' : ''}`}>
                          {msg.senderName} • {msg.time}
                        </p>

                        <div className={`p-3.5 rounded-2xl whitespace-pre-line text-sm leading-relaxed ${
                          isUser 
                            ? 'bg-ghost-purple text-white rounded-tr-none' 
                            : isChannel
                              ? 'bg-teal-950/20 border border-teal-500/20 text-teal-100 rounded-tl-none'
                              : 'bg-[#1D123D] border border-ghost-purple/15 text-gray-100 rounded-tl-none'
                        }`}>
                          {msg.text.split('\n').map((line, lidx) => (
                            <p key={lidx} className="mb-0.5 last:mb-0">{line}</p>
                          ))}

                          {msg.txHash && (
                            <div className="mt-2.5">
                              <button 
                                onClick={() => copyText(msg.txHash!)}
                                className="text-xs text-ghost-cyan hover:text-cyan-300 font-mono inline-flex items-center gap-1 bg-black/30 px-2 py-1 rounded transition-all"
                              >
                                {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
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
              <div className="bg-[#150D2E] border-t border-ghost-purple/20 p-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-black/30 border border-ghost-purple/20 px-4 py-3 rounded-xl font-mono text-xs text-gray-400">
                    {stepIndex < SIMULATION_STEPS.length && isAutoPlaying ? (
                      <div className="flex items-center gap-1">
                        <span>GHOSTwire is processing</span>
                        <span className="animate-pulse">.</span>
                        <span className="animate-pulse delay-75">.</span>
                        <span className="animate-pulse delay-150">.</span>
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
                    className="p-3 rounded-xl bg-ghost-purple/20 text-ghost-neon opacity-60"
                  >
                    <Send className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Powered by */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6 opacity-60">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Powered by:</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-ghost-cyan" />
                <span className="text-[10px] font-mono text-slate-600">Jupiter API</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span className="text-[10px] font-mono text-slate-600">Solana</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <span className="text-[10px] font-mono text-slate-600">DexScreener</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}