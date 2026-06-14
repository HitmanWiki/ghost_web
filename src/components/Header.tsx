import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

 const navLinks = [
  { num: '01', label: 'Home', action: 'hero' },
  { num: '02', label: 'Features', action: 'features' },
  { num: '03', label: '$GHOST', action: 'token' },
  { num: '04', label: 'How It Works', action: 'demo' },
  { num: '05', label: 'FAQ', action: 'faq' }
];

  const handleLinkClick = (action: string) => {
    setIsOpen(false);
    onScrollTo(action);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-ghost-purple/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo with image */}
          <a href="#" className="flex items-center gap-3 group cursor-pointer" onClick={(e) => { e.preventDefault(); onScrollTo('hero'); }}>
            {/* Logo Image */}
            <div className="w-9 h-9 rounded-full overflow-hidden bg-gradient-to-br from-ghost-purple to-ghost-cyan flex items-center justify-center shadow-lg shadow-ghost-purple/25 group-hover:scale-105 transition-all duration-300">
              <img 
                src="/logo.png" 
                alt="GHOSTwire Logo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-white text-lg">👻</span>';
                }}
              />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white uppercase">
              GHOST<span className="text-ghost-purple">wire</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.action)}
                className="text-xs font-mono text-slate-600 dark:text-gray-400 hover:text-ghost-purple dark:hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span className="text-[10px] text-ghost-purple font-bold">{link.num}</span>
                {link.label}
              </button>
            ))}
            <a
              href="https://scrap-docs.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-slate-600 dark:text-gray-400 hover:text-ghost-purple dark:hover:text-white transition-all flex items-center gap-1.5"
            >
              <span className="text-[10px] text-ghost-purple font-bold">05</span>
              Docs
              <ArrowUpRight className="w-3 h-3 text-slate-500 dark:text-gray-500" />
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://t.me/ghowr_bot" 
              target="_blank" 
              rel="noreferrer" 
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-white/10 text-xs font-mono font-medium flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-ghost-purple" />
              Support
            </a>
            
            <a
              href="https://t.me/ghowr_bot"
              target="_blank"
              rel="noreferrer"
              className="px-4.5 py-2.5 rounded-xl bg-ghost-purple text-white text-xs font-semibold hover:bg-ghost-purple/80 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all cursor-pointer flex items-center gap-2 font-display"
            >
              <span>Start Sniping</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-ghost-purple/50 transition-all text-slate-700 dark:text-gray-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[69px] z-40 bg-white dark:bg-slate-900 bg-opacity-95 backdrop-blur-xl px-6 py-8 flex flex-col justify-between md:hidden"
          >
            <div className="space-y-6">
              {/* Mobile menu logo */}
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-white/5">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-ghost-purple to-ghost-cyan flex items-center justify-center">
                  <img 
                    src="/logo.png" 
                    alt="GHOSTwire Logo" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<span class="text-white text-sm">👻</span>';
                    }}
                  />
                </div>
                <span className="font-display font-bold text-lg text-slate-900 dark:text-white uppercase">
                  GHOST<span className="text-ghost-purple">wire</span>
                </span>
              </div>
              
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.action)}
                    className="flex items-center gap-4 text-left text-lg font-display font-medium text-slate-800 dark:text-gray-300 hover:text-ghost-purple dark:hover:text-white transition-all cursor-pointer"
                  >
                    <span className="font-mono text-xs text-ghost-purple">{link.num}</span>
                    {link.label}
                  </button>
                ))}
                <a
                  href="https://scrap-docs.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-left text-lg font-display font-medium text-slate-800 dark:text-gray-300 hover:text-ghost-purple dark:hover:text-white transition-all"
                >
                  <span className="font-mono text-xs text-ghost-purple">05</span>
                  Docs
                  <ArrowUpRight className="w-4 h-4 text-slate-500 dark:text-gray-500" />
                </a>
              </div>
            </div>

            <div className="space-y-4 border-t border-slate-200 dark:border-white/5 pt-6">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://t.me/ghowr_bot"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 text-center text-xs font-medium text-slate-700 dark:text-gray-300 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/15"
                >
                  Telegram Support
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 text-center text-xs font-medium text-slate-700 dark:text-gray-300 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/15"
                >
                  X (Twitter)
                </a>
              </div>
              <a
                href="https://t.me/ghowr_bot"
                target="_blank"
                rel="noreferrer"
                className="w-full p-4 block text-center bg-ghost-purple hover:bg-ghost-purple/80 text-white font-semibold font-display rounded-xl shadow-lg transition-all"
              >
                Launch Bot Interface
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}