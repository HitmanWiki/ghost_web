import { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const faqs: FAQItem[] = [
    {
      question: 'How do I get my derived wallet address?',
      answer: 'Simply send `/start` to the bot. Your W1 wallet is created automatically. Click "Wallet" from the main menu or type `/wallet` to see your full Solana address. The wallet is derived from your Telegram ID — no private keys are stored anywhere.'
    },
    {
      question: 'How do I add a Telegram channel for auto-sniping?',
      answer: 'Click 📋 Channels → ➕ Add Channel. Choose 🌐 Public (no auth needed) or 🔒 Private (requires TG Auth). Enter the channel username (e.g., @crypto_signals) or numeric ID for private channels (-100XXXXXXXXXXXXX). Then select your wallet, set buy amount, slippage, and take profit. Monitoring starts immediately!'
    },
    {
      question: 'What is auto-sell and how do I set it up?',
      answer: 'Auto-sell automatically sells your position when profit reaches your target percentage. Go to ⚙️ Settings → 🎯 Take Profit % to set your target (e.g., 50%). Enable 🤖 Auto-Sell. The bot monitors every 10 seconds and sells instantly when target is hit. You can also set auto-sell per channel when adding it.'
    },
    {
      question: 'How do I earn from referrals?',
      answer: 'Go to 🔗 Referral → Copy your unique link: `https://t.me/ghowr_bot?start=ref_USERID`. Share it with friends. When they join and trade, you earn 20% of all trading fees they pay — forever!'
    },
    {
      question: 'How do I import my GHOSTwire wallet into Phantom?',
      answer: 'Go to 💼 Wallets → Select your wallet → 🔑 Export Private Key. Copy the base58 private key. Open Phantom → Add Wallet → Import Private Key → Paste. Your wallet is now in Phantom!'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      id="faq"
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
        className="absolute bottom-20 -right-40 w-80 h-80 bg-ghost-cyan/8 rounded-full blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ y: bgY }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-ghost-pink/5 rounded-full blur-[120px]"
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#c4b5fd_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Intro header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-ghost-purple/10 text-ghost-purple border border-ghost-purple/20 uppercase tracking-widest inline-block mb-3"
          >
            Q&A Core
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 mt-2"
          >
            Get answers to the most common queries about GHOSTwire.
          </motion.p>
        </div>

        {/* Accordions list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-ghost-purple/30 shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-semibold text-slate-900 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-ghost-purple shrink-0 group-hover:text-ghost-cyan transition-colors" />
                    <span className="text-sm sm:text-base pr-4 leading-snug">{faq.question}</span>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-1.5 bg-slate-100 border border-slate-200 rounded-lg text-slate-500 shrink-0 group-hover:text-ghost-purple"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 font-sans">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Support CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-ghost-purple/10 to-ghost-cyan/5 border border-ghost-purple/20 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 backdrop-blur-sm"
        >
          <div>
            <h4 className="text-slate-900 font-bold text-sm sm:text-base">Still have questions?</h4>
            <p className="text-xs text-slate-500 mt-1">Contact our support bot or join our Telegram community.</p>
          </div>
          <a
            href="https://t.me/ghowr_bot"
            target="_blank"
            rel="noreferrer"
            className="p-3 px-5 whitespace-nowrap bg-ghost-purple hover:bg-ghost-purple/80 text-white font-semibold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-md shadow-ghost-purple/20 font-display"
          >
            Contact Support Bot
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
}