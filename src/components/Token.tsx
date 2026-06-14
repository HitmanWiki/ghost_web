import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Coins, TrendingUp, Users, ArrowUpRight, Copy, Check, Sparkles, Zap, Crown, MessageCircle, ExternalLink, Lock, Ticket, Gift, Star } from 'lucide-react';

export default function Token() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <motion.section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      id="token"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #faf5ff 100%)'
      }}
    >
      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute top-20 -left-40 w-80 h-80 bg-ghost-purple/8 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ y: bgY }}
      />
      <motion.div 
        className="absolute bottom-20 -right-40 w-80 h-80 bg-ghost-cyan/8 rounded-full blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ y: bgY }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-ghost-purple/10 text-ghost-purple border border-ghost-purple/20 uppercase tracking-widest inline-block mb-4"
          >
            <Sparkles className="w-3 h-3 inline mr-1" /> Ecosystem Token
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
          >
            $GHOST Token
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto"
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {tokenStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-5 text-center border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <Icon className="w-6 h-6 text-ghost-purple mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
                {stat.sub && <div className="text-[10px] text-slate-400 mt-1">{stat.sub}</div>}
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
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="w-full sm:w-auto">
              <p className="text-xs text-slate-500 font-mono mb-1">Token Contract Address</p>
              <div className="flex items-center gap-2">
                <code className="text-sm font-mono text-slate-700 bg-slate-100 px-3 py-2 rounded-lg break-all">
                  {tokenAddress.slice(0, 20)}...{tokenAddress.slice(-16)}
                </code>
                <button 
                  onClick={copyToClipboard}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-all shrink-0"
                >
                  {copiedAddress ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-slate-500" />}
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
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {links.map((link, idx) => (
            <a 
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between p-4 rounded-xl bg-gradient-to-r ${link.color} text-white hover:opacity-90 transition-all group`}
            >
              <span className="font-semibold text-sm">{link.name}</span>
              <link.icon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          ))}
        </motion.div>

        {/* Token Info & Community */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Token Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-ghost-purple/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-ghost-purple" />
              </div>
              <h3 className="font-bold text-slate-900">About $GHOST</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-ghost-purple mt-0.5">◆</span>
                <span>Fair launched on pump.fun — no presale, no team allocation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ghost-purple mt-0.5">◆</span>
                <span>Zero taxes on buys and sells — trade freely</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ghost-purple mt-0.5">◆</span>
                <span>Liquidity locked — safe and secure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ghost-purple mt-0.5">◆</span>
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
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-ghost-cyan/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-ghost-cyan" />
              </div>
              <h3 className="font-bold text-slate-900">Community</h3>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Join the fastest growing Solana sniper community. Get real-time updates, alpha calls, and connect with thousands of traders.
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://t.me/ghostwire_community" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#26A5E4] hover:bg-[#1e8dc0] text-white text-sm font-medium transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Telegram
              </a>
              <a 
                href="https://x.com/ghostwire_sol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-black hover:bg-gray-800 text-white text-sm font-medium transition-all"
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
          className="text-center text-[10px] text-slate-400 mt-4"
        >
          $GHOST is a community-driven token with no promises of returns. Always do your own research.
        </motion.p>

      </div>
    </motion.section>
  );
}