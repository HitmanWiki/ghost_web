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

  const stats = [
    { label: 'Uptime', value: '24/7 Monitor', desc: 'Continuous active crawling', icon: Zap, color: 'text-ghost-cyan' },
    { label: 'Wallets', value: 'Up to 5', desc: 'Derived per account', icon: Target, color: 'text-ghost-purple' },
    { label: 'Ref Revenue', value: '20% Shares', desc: 'Trading fee commission', icon: TrendingUp, color: 'text-ghost-pink' },
    { label: 'Trading Fee', value: '0.05%', desc: 'Ultra-competitive pricing', icon: Lock, color: 'text-ghost-green' },
  ];

  // Typewriter text content
  const fullText = "Tokens instantly.";

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

  return (
    <section className="relative pt-32 pb-16 overflow-hidden min-h-screen flex flex-col justify-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900" id="hero">
      
      {/* Background glows */}
      <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-ghost-purple/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-ghost-purple/3 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[0%] left-[20%] w-[450px] h-[450px] bg-ghost-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#c4b5fd_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Main Hero grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Hero Texts - Fade in from left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col text-left space-y-6"
          >
            {/* Tag / Pill Alert */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-ghost-purple/10 backdrop-blur border border-ghost-purple/30 rounded-full p-1.5 pl-3.5 pr-4 self-start cursor-pointer group"
              onClick={() => onScrollTo('demo')}
            >
              <Zap className="w-3.5 h-3.5 text-ghost-purple animate-pulse" />
              <span className="text-[11px] font-mono text-slate-700 dark:text-gray-200 mt-[0.5px]">
                GHOSTwire auto-sniper live on Solana mainnet
              </span>
              <ChevronRight className="w-3 h-3 text-ghost-purple opacity-60 group-hover:translate-x-0.5 transition-all" />
            </motion.div>

            {/* Typewriter Heading */}
            <div className="space-y-4">
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.1] text-slate-900 dark:text-white tracking-tight">
                Auto-Snipe Solana{' '}
                <span className="inline-block">
                  <span className="bg-gradient-to-r from-ghost-purple via-ghost-pink to-ghost-cyan bg-clip-text text-transparent drop-shadow-sm font-black">
                    {displayText}
                  </span>
                  {!isTypingComplete && (
                    <span className="inline-block w-[3px] h-8 md:h-12 bg-ghost-purple ml-1 animate-pulse" />
                  )}
                </span>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-2xl font-sans"
              >
                The fastest Telegram sniper bot for Solana. Auto-detect signals from private & public channels, execute instant trades via Jupiter API, and track your portfolio P&L dynamically.
              </motion.p>
            </div>

            {/* CTA Button controls */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="https://t.me/ghowr_bot"
                target="_blank"
                rel="noreferrer"
                className="p-4 px-6 rounded-xl bg-ghost-purple text-white text-sm font-semibold hover:bg-ghost-purple/80 transition-all font-display hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] shadow flex items-center justify-center gap-2"
              >
                <span>Start Trading on Telegram</span>
                <ArrowUpRight className="w-4.5 h-4.5" />
              </a>

              <button
                onClick={() => onScrollTo('demo')}
                className="p-4 px-6 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-gray-200 hover:text-slate-900 dark:hover:text-white transition-all font-display border border-slate-200 dark:border-white/10 hover:border-ghost-purple/40 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Watch Demo Run</span>
                <Terminal className="w-4.5 h-4.5 text-ghost-cyan" />
              </button>
            </motion.div>

            {/* Quickstart prompt bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden sm:flex bg-white/60 dark:bg-ghost-card/40 border border-slate-200 dark:border-white/5 rounded-2xl p-4 items-center justify-between max-w-md gap-4 backdrop-blur-sm self-start shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-slate-100 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10 flex items-center justify-center font-mono text-[10px] text-slate-500 dark:text-gray-400">
                  $
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-gray-500">Quick Summon</p>
                  <p className="text-xs font-mono text-ghost-purple dark:text-ghost-neon">t.me/ghowr_bot</p>
                </div>
              </div>
              <button 
                onClick={handleCopyCode}
                className="p-2 bg-ghost-purple/10 hover:bg-ghost-purple/20 border border-ghost-purple/20 hover:border-ghost-purple/40 text-ghost-purple dark:text-ghost-neon hover:text-ghost-purple dark:hover:text-white rounded-xl transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer"
              >
                {copiedText ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedText ? 'Copied' : 'Copy'}
              </button>
            </motion.div>

          </motion.div>

          {/* Right Hero Graphic - Slide in from right with scale + rotation */}
          <motion.div 
            initial={{ opacity: 0, x: 200, rotate: 5, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center"
          >
            {/* Glow behind the card that appears with it */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -inset-4 bg-gradient-to-r from-ghost-purple/20 to-ghost-cyan/20 rounded-3xl blur-2xl -z-10"
            />
            
            {/* Floating particles that appear around the card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.6, y: [0, -10, 0] }}
              transition={{ duration: 0.5, delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
              className="absolute -top-6 -right-6 w-3 h-3 bg-ghost-purple rounded-full"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.4, y: [0, 10, 0] }}
              transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatDelay: 4 }}
              className="absolute -bottom-4 -left-4 w-2 h-2 bg-ghost-cyan rounded-full"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute top-1/2 -right-8 w-1.5 h-1.5 bg-ghost-pink rounded-full"
            />

            {/* Main Glassmorphic Dashboard Widget */}
            <motion.div 
              className="w-full max-w-[390px] h-[580px] bg-gradient-to-b from-[#180C36] to-[#0A041B] border border-ghost-purple/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden"
            >
              {/* Inner content reveal animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-ghost-purple flex items-center justify-center text-xs">👻</div>
                    <span className="font-display font-black text-sm tracking-widest text-white">GHOSTWIRE</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-ghost-cyan animate-pulse" />
                    <span className="text-[10px] font-mono text-ghost-cyan uppercase">SYSTEM: LIVE</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="space-y-4"
              >
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-mono text-gray-400">🚨 Automated Feed</span>
                    <span className="text-[9px] font-mono text-ghost-neon p-0.5 bg-ghost-purple/10 rounded px-1.5">Alpha Group</span>
                  </div>
                  <p className="text-xs text-gray-200 font-semibold mb-1">Contract Detected: GNL7M...</p>
                  <p className="text-[11px] text-gray-400">Processed through Jupiter aggregator route in 0.12s</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0F0824] border border-ghost-purple/20 relative">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-[9px] uppercase font-mono text-gray-400">UNISOL / SOL</span>
                      <h4 className="text-lg font-mono font-bold text-white">$0.0418</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] block uppercase font-mono text-gray-400">Live Profit</span>
                      <span className="text-xs font-mono font-bold text-[#10B981]">+50.7%</span>
                    </div>
                  </div>

                  <svg className="w-full h-16 stroke-ghost-purple stroke-2 fill-none overflow-visible" viewBox="0 0 100 30">
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M 0 25 Q 15 28 30 18 T 60 10 T 90 2 T 100 0" />
                    <path d="M 0 25 Q 15 28 30 18 T 60 10 T 90 2 T 100 0 L 100 30 L 0 30 Z" fill="url(#gradient)" className="stroke-none" />
                    <circle cx="90" cy="2" r="2.5" className="fill-ghost-cyan" />
                  </svg>

                  <div className="grid grid-cols-2 gap-2 mt-4 text-center">
                    <div className="p-2 rounded-xl bg-white/5 font-mono text-[10px]">
                      <span className="text-gray-400 block pb-0.5">BUY</span>
                      <span className="text-white font-bold">0.10 SOL</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/5 font-mono text-[10px]">
                      <span className="text-gray-400 block pb-0.5">SELL Target</span>
                      <span className="text-ghost-purple font-bold">0.15 SOL (+50%)</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gray-400 uppercase">Self Custody Wallet</span>
                    <span className="text-[10px] font-mono font-semibold text-ghost-neon">Wallet #1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-300">GnL9mQz...3kS4p</span>
                    <span className="text-xs font-mono font-bold text-white">1.55 SOL</span>
                  </div>
                </div>

                <div className="p-3 bg-black/40 rounded-xl border border-white/5 font-mono text-[9px] text-[#A78BFA]/90 space-y-1">
                  <p className="flex justify-between">
                    <span>&gt; scanning telegram signals...</span>
                    <span className="text-gray-500">21:10:44</span>
                  </p>
                  <p className="text-cyan-400 flex justify-between">
                    <span>&gt; match: CA `GNL7MQSzzkYQ75mXU4mNz...`</span>
                    <span className="text-gray-500">21:10:45</span>
                  </p>
                  <p className="text-green-500 flex justify-between">
                    <span>&gt; Jupiter Swap executed (+50% TP Set)</span>
                    <span className="text-gray-500">21:10:46</span>
                  </p>
                </div>
              </motion.div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-ghost-purple/10 rounded-full blur-[60px] pointer-events-none" />
            </motion.div>
          </motion.div>

        </div>

        {/* Horizontal metrics banner - Fade up */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border border-slate-200 dark:border-ghost-purple/20 bg-white/60 dark:bg-ghost-card/30 backdrop-blur rounded-3xl p-6 md:p-8 mt-16 max-w-6xl mx-auto shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                  className="flex flex-col text-left space-y-1 relative group"
                >
                  {idx > 0 && (
                    <div className="hidden md:block absolute left-[-12px] top-1/2 -translate-y-1/2 w-[1px] h-10 bg-slate-200 dark:bg-ghost-purple/20" />
                  )}

                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${stat.color} shrink-0`} />
                    <span className="text-xs font-mono font-medium text-slate-500 dark:text-gray-400 uppercase tracking-widest leading-none">
                      {stat.label}
                    </span>
                  </div>
                  
                  <span className="text-xl sm:text-2xl font-display font-semibold text-slate-900 dark:text-white">
                    {stat.value}
                  </span>
                  
                  <span className="text-[10px] text-slate-400 dark:text-gray-500 font-mono">
                    {stat.desc}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}