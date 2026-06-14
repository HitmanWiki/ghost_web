import { motion } from 'motion/react';
import { Wallet, Radar, Zap, LineChart, TrendingUp, Send, Share2, Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      id: 'derived_wallets',
      icon: Wallet,
      title: 'Derived Wallets',
      description: 'GHOSTwire provisions on-chain Solana wallets derived cryptographically from your Telegram ID instantly. No private keys stored on any servers — absolute security meets supreme execution.',
      badge: 'Self-Custodial Always',
      isLarge: true,
      color: 'from-ghost-purple to-indigo-600',
      iconColor: 'text-ghost-purple'
    },
    {
      id: 'channel_monitoring',
      icon: Radar,
      title: 'Channel Monitoring',
      description: 'Continuous 24/7 active scanning of designated public or private Telegram channels for Solana contract addresses.',
      badge: '24/7 Autopilot',
      iconColor: 'text-cyan-600'
    },
    {
      id: 'instant_swaps',
      icon: Zap,
      title: 'Instant Buy/Sell',
      description: 'Harness the power of Jupiter Aggregators to discover and execute the most capital-efficient swap routes automatically. Execution finishes within milliseconds.',
      badge: 'Best Rates',
      iconColor: 'text-amber-600'
    },
    {
      id: 'portfolio_tracking',
      icon: LineChart,
      title: 'Portfolio Tracking',
      description: 'Real-time calculation of your performance metrics (P&L, cost basis, current valuations) aggregate by active wallet, contract address, or specific source channels.',
      badge: 'Dynamic Analytics',
      isLarge: true,
      color: 'from-ghost-cyan to-teal-500',
      iconColor: 'text-teal-600'
    },
    {
      id: 'auto_sell',
      icon: TrendingUp,
      title: 'Auto-Sell Target Profit',
      description: 'Lock in your profit. Put your take profit goals on autopilot. The sniper executes immediate out-clicks the moment your target return is locked.',
      badge: 'Auto Take-Profit',
      iconColor: 'text-emerald-600'
    },
    {
      id: 'transfers',
      icon: Send,
      title: 'Smart Transfers',
      description: 'Sweep or transfer native SOL and SPL tokens between your derived wallets or securely bridge them to physical ledger addresses with ease.',
      badge: 'Zero Slippage',
      iconColor: 'text-pink-600'
    },
    {
      id: 'referral_program',
      icon: Share2,
      title: 'Referral Rewards',
      description: 'Earn 20% lifetime shares of all transaction commissions paid by your recruits. Direct payouts land on your derived balance instant and peer-to-peer.',
      badge: 'Earn 20%',
      iconColor: 'text-purple-600'
    },
    {
      id: 'private_channels',
      icon: Lock,
      title: 'Private Channels Support',
      description: 'Snipes private alpha groups too. Direct QR code authorization/OTP logins empower your bot instance to read and trigger from private alpha signals safely.',
      badge: 'Alpha Priority',
      iconColor: 'text-rose-600'
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
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 relative" id="features">
      {/* Background glow flares */}
      <div className="absolute top-[20%] right-10 w-96 h-96 bg-ghost-purple/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-10 w-96 h-96 bg-ghost-cyan/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <span className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-ghost-purple/10 text-ghost-purple dark:text-ghost-neon border border-ghost-purple/20 uppercase tracking-widest inline-block mb-3">
              Edge Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              The ultimate trading edge for Solana on-chain
            </h2>
            <p className="text-slate-600 dark:text-gray-400 mt-2 font-sans">
              Discover why experienced on-chain traders deploy GHOSTwire bot clusters to scale token trading, signal actions, and portfolio monitoring.
            </p>
          </div>

          <div className="flex gap-4 self-start md:self-end">
            <div className="p-3 bg-white/60 dark:bg-ghost-card/50 border border-slate-200 dark:border-white/5 rounded-2xl flex items-center gap-2 font-mono text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-ghost-green shrink-0" />
              <span className="text-slate-700 dark:text-gray-300">Audited Derived Wallets Security</span>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            if (item.isLarge) {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`col-span-1 md:col-span-2 p-6 rounded-3xl bg-gradient-to-br ${item.color} bg-opacity-5 border border-ghost-purple/20 flex flex-col justify-between h-auto min-h-[290px] relative overflow-hidden group hover:border-ghost-purple/40 transition-all`}
                >
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/50 dark:bg-white/5 rounded-full blur-2xl group-hover:bg-white/60 dark:group-hover:bg-white/10 transition-all" />

                  <div className="flex items-start justify-between relative z-10 w-full mb-6">
                    <div className="p-3 bg-white/50 dark:bg-white/10 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center justify-center">
                      <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    {item.badge && (
                      <span className="bg-white/60 dark:bg-white/15 backdrop-blur border border-slate-300 dark:border-white/15 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-white">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-white/80 leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                    
                    <div className="mt-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4.5 h-4.5 text-slate-500 dark:text-white/50" />
                      <span className="text-xs font-mono text-slate-500 dark:text-white/60">Fully compatible with SPL standards</span>
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
                className="p-6 rounded-3xl bg-white/40 dark:bg-[#120D23]/60 hover:bg-white/60 dark:hover:bg-[#120D23]/80 border border-slate-200 dark:border-white/5 hover:border-ghost-purple/30 flex flex-col justify-between h-auto min-h-[290px] transition-all group relative overflow-hidden"
              >
                <div className="flex items-start justify-between w-full mb-6 relative z-10">
                  <div className="p-3 bg-white/60 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 rounded-2xl flex items-center justify-center group-hover:bg-ghost-purple/10 group-hover:border-ghost-purple/20 transition-all">
                    <IconComponent className={`w-5.5 h-5.5 ${item.iconColor}`} />
                  </div>
                  {item.badge && (
                    <span className="bg-white/80 dark:bg-[#1b0d36] border border-slate-300 dark:border-ghost-purple/20 px-2 py-0.5 rounded-full text-[9px] font-mono text-ghost-purple dark:text-ghost-neon font-semibold tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5 leading-tight group-hover:text-ghost-purple dark:group-hover:text-ghost-neon transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-ghost-purple/5 group-hover:bg-ghost-purple/10 rounded-full blur-2xl transition-all" />
              </motion.div>
            );
          })}
        </div>

        {/* Image Showcase Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-ghost-purple/10 text-ghost-purple dark:text-ghost-neon border border-ghost-purple/20 uppercase tracking-widest inline-block mb-3">
              Visual Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">See GHOSTwire in Action</h2>
            <p className="text-slate-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
              Experience how GHOSTwire transforms your Telegram channels into an automated trading powerhouse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseImages.map((image, idx) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/50 dark:bg-gradient-to-br from-[#120D23] to-[#0a0a12] rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden hover:border-ghost-purple/40 transition-all duration-300 hover:transform hover:-translate-y-1">
                  <div className="relative overflow-hidden bg-slate-100 dark:bg-ghost-card/50">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) {
                          (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="hidden w-full h-48 bg-gradient-to-br from-ghost-purple/20 to-ghost-cyan/20 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-4xl mb-2">👻</div>
                      <p className="text-xs text-gray-400">{image.title}</p>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-ghost-purple dark:group-hover:text-ghost-neon transition-colors">
                      {image.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}