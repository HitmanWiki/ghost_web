import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Copy, Check, MessageSquare, Terminal, ChevronRight } from 'lucide-react';

export default function Footer() {
  const [copiedCode, setCopiedCode] = useState(false);

  const quickStartSteps = [
    'Open Telegram and search for @ghowr_bot',
    'Send command /start to create your secure wallet',
    'Copy your custom derived on-chain SOL address',
    'Deposit SOL to your balance (minimum 0.05 recommended)',
    'Type `/add @channelName` or copy invite pins',
    'Bot is ready! Sitting back to watch snipes'
  ];

  const handleCopyCode = () => {
    const rawTerminal = `1. Open Telegram t.me/ghowr_bot\n2. Send /start\n3. Copy your wallet address\n4. Fund with SOL\n5. Add channel via /add\n6. Start sniping!`;
    navigator.clipboard.writeText(rawTerminal);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <footer className="bg-white/80 dark:bg-ghost-dark/80 pt-20 pb-8 border-t border-slate-200 dark:border-white/5 relative overflow-hidden" id="quickstart">
      {/* Glow Effects */}
      <div className="absolute bottom-[-10%] right-[10%] w-96 h-96 bg-ghost-purple/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-10 left-[10%] w-80 h-80 bg-ghost-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Banner section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-slate-200 dark:border-white/5 pb-16">
          
          {/* Join Call block */}
          <div className="lg:col-span-5 text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
              Join the trading <br />
              <span className="bg-gradient-to-r from-ghost-purple to-ghost-cyan bg-clip-text text-transparent font-black">
                community on Telegram
              </span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed font-sans">
              Connect with fellow Solana snipers. Stay updated with token updates, claim priority referral pins, and ask our developer squad questions relative to on-chain automation.
            </p>
            
            <a
              href="https://t.me/ghowr_bot"
              target="_blank"
              rel="noreferrer"
              className="p-4 px-6 rounded-xl bg-ghost-purple text-white text-sm font-semibold hover:bg-ghost-purple/80 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all font-display inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Join official Telegram Channel</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Quickstart Terminal Console widget */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-slate-100 dark:bg-[#0f0923] border border-slate-300 dark:border-ghost-purple/20 rounded-2xl p-5 md:p-6 shadow-xl dark:shadow-2xl relative overflow-hidden text-left font-mono">
              <div className="flex items-center justify-between border-b border-slate-300 dark:border-white/5 pb-3.5 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4.5 h-4.5 text-ghost-purple dark:text-ghost-cyan" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-gray-300">GHOSTwire Quick Onboarding Terminal</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="p-1.5 px-2 bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-white/5 hover:border-ghost-purple/30 rounded-lg flex items-center gap-1.5 text-[10px] transition-all cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedCode ? 'Copied' : 'Copy Codes'}
                </button>
              </div>

              <div className="text-[11px] sm:text-xs space-y-2.5 text-slate-700 dark:text-gray-300">
                <p className="text-ghost-purple">// Quick start Solana sniping (Under 5 minutes)</p>
                {quickStartSteps.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2.5">
                    <span className="text-ghost-purple dark:text-ghost-cyan block shrink-0">{sIdx + 1}.</span>
                    <span className="text-slate-600 dark:text-gray-300 leading-normal">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer navigational routes and legal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 text-left items-start">
          
          {/* Logo Brand left - with actual logo image */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-ghost-purple to-ghost-cyan flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">
                <img 
                  src="/logo.png" 
                  alt="GHOSTwire Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-white text-xl">👻</span>';
                  }}
                />
              </div>
              <span className="font-display font-black text-xl tracking-wider text-slate-900 dark:text-white uppercase">
                GHOST<span className="text-ghost-purple">wire</span>
              </span>
            </a>
            <p className="text-xs text-slate-500 dark:text-gray-500 max-w-sm leading-relaxed">
              Leading decentralized blockchain sniper utilities for Solana trades. Speed is our metric, self-custody is our core. Auto-sniping and profit goals.
            </p>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest">Protocol links</h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-500 dark:text-gray-400">
              <a href="https://t.me/ghowr_bot" target="_blank" rel="noreferrer" className="hover:text-ghost-purple dark:hover:text-white transition-colors inline-flex items-center gap-1">
                Launch Telegram Bot <ArrowUpRight className="w-3 h-3 text-slate-400 dark:text-gray-600" />
              </a>
              <a href="https://scrap-docs.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-ghost-purple dark:hover:text-white transition-colors inline-flex items-center gap-1">
                Technical Documentation <ArrowUpRight className="w-3 h-3 text-slate-400 dark:text-gray-600" />
              </a>
              <a href="https://t.me/ghowr_bot" target="_blank" rel="noreferrer" className="hover:text-ghost-purple dark:hover:text-white transition-colors inline-flex items-center gap-1">
                Helpdesk & Troubleshooting <ArrowUpRight className="w-3 h-3 text-slate-400 dark:text-gray-600" />
              </a>
            </div>
          </div>

          {/* Socials Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest font-mono">Contacts & Mail</h4>
            <p className="text-xs text-slate-500 dark:text-gray-500 leading-normal">
              For security vulnerability audits or licensing questions, contact our developer division:
            </p>
            <div className="text-xs font-mono text-ghost-purple dark:text-ghost-neon hover:text-ghost-purple dark:hover:text-white transition-colors">
              <a href="mailto:support@ghostwire.win" className="underline">support@ghostwire.win</a>
            </div>
          </div>

        </div>

        {/* Flat copyright bar */}
        <div className="border-t border-slate-200 dark:border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <span className="text-xs text-slate-500 dark:text-gray-500 font-mono">
            © 2026 GHOSTwire Solana Sniper Bot. All rights reserved.
          </span>
          
          <div className="flex items-center justify-center md:justify-end gap-6 text-xs text-slate-500 dark:text-gray-500">
            <a href="#" onClick={(e) => { e.preventDefault(); }} className="hover:text-ghost-purple dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => { e.preventDefault(); }} className="hover:text-ghost-purple dark:hover:text-white transition-colors">Terms of Operations</a>
          </div>
        </div>

      </div>
    </footer>
  );
}