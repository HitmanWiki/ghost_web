import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';

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
      answer: 'Go to 🔗 Referral → Copy your unique link: `https://t.me/ghostwire_bot?start=ref_USERID`. Share it with friends. When they join and trade, you earn 20% of all trading fees they pay — forever!'
    },
    {
      question: 'How do I import my GHOSTwire wallet into Phantom?',
      answer: 'Go to 💼 Wallets → Select your wallet → 🔑 Export Private Key. Copy the base58 private key. Open Phantom → Add Wallet → Import Private Key → Paste. Your wallet is now in Phantom!'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const sectionStyle: React.CSSProperties = {
    padding: '6rem 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #faf5ff 100%)',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '896px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 10,
  };

  const orbStyle: React.CSSProperties = {
    position: 'absolute',
    width: '320px',
    height: '320px',
    borderRadius: '50%',
    filter: 'blur(100px)',
    pointerEvents: 'none',
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    maxWidth: '672px',
    margin: '0 auto 64px',
  };

  const badgeStyle: React.CSSProperties = {
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
    marginBottom: '12px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.875rem, 5vw, 2.25rem)',
    fontWeight: 900,
    color: '#0f172a',
    letterSpacing: '-0.02em',
    marginBottom: '8px',
  };

  const subtitleStyle: React.CSSProperties = {
    color: '#475569',
    fontSize: '1rem',
    marginTop: '8px',
  };

  const accordionContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const accordionItemStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(4px)',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'all 0.3s',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  };

  const accordionButtonStyle: React.CSSProperties = {
    width: '100%',
    padding: '20px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    textAlign: 'left',
    fontWeight: 600,
    color: '#0f172a',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  const questionContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  };

  const iconStyle: React.CSSProperties = {
    width: '20px',
    height: '20px',
    color: '#8b5cf6',
    flexShrink: 0,
  };

  const questionTextStyle: React.CSSProperties = {
    fontSize: 'clamp(0.875rem, 4vw, 1rem)',
    paddingRight: '16px',
    lineHeight: 1.4,
  };

  const chevronStyle: React.CSSProperties = {
    padding: '6px',
    background: '#f1f5f9',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    color: '#64748b',
    flexShrink: 0,
    transition: 'all 0.2s',
  };

  const answerContainerStyle: React.CSSProperties = {
    overflow: 'hidden',
  };

  const answerStyle: React.CSSProperties = {
    padding: '4px 24px 24px 24px',
    fontSize: 'clamp(0.75rem, 3vw, 0.875rem)',
    color: '#475569',
    lineHeight: 1.625,
    borderTop: '1px solid #f1f5f9',
    background: 'rgba(248, 250, 252, 0.5)',
    fontFamily: 'system-ui, sans-serif',
  };

  const ctaStyle: React.CSSProperties = {
    marginTop: '48px',
    padding: '24px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.05))',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    backdropFilter: 'blur(4px)',
  };

  const ctaTextContainerStyle: React.CSSProperties = {
    flex: 1,
  };

  const ctaTitleStyle: React.CSSProperties = {
    color: '#0f172a',
    fontWeight: 'bold',
    fontSize: 'clamp(0.875rem, 4vw, 1rem)',
    marginBottom: '4px',
  };

  const ctaDescStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#64748b',
  };

  const ctaButtonStyle: React.CSSProperties = {
    padding: '12px 20px',
    whiteSpace: 'nowrap',
    background: '#8b5cf6',
    color: 'white',
    fontWeight: 600,
    fontSize: '12px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    textDecoration: 'none',
    transition: 'all 0.2s',
    boxShadow: '0 4px 12px rgba(139, 92, 246, 0.2)',
  };

  return (
    <motion.section ref={sectionRef} style={sectionStyle} id="faq">
      {/* Animated Gradient Orbs */}
      <motion.div
        style={{
          ...orbStyle,
          top: '80px',
          left: '-160px',
          background: 'rgba(139, 92, 246, 0.1)',
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          ...orbStyle,
          bottom: '80px',
          right: '-160px',
          background: 'rgba(6, 182, 212, 0.08)',
        }}
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          ...orbStyle,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '384px',
          height: '384px',
          background: 'rgba(236, 72, 153, 0.05)',
        }}
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(#c4b5fd 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        opacity: 0.2,
        pointerEvents: 'none',
      }} />

      <div style={containerStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={badgeStyle}
          >
            Q&A Core
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={titleStyle}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={subtitleStyle}
          >
            Get answers to the most common queries about GHOSTwire.
          </motion.p>
        </div>

        {/* Accordions */}
        <div style={accordionContainerStyle}>
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={accordionItemStyle}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  style={accordionButtonStyle}
                >
                  <div style={questionContainerStyle}>
                    <HelpCircle style={iconStyle} />
                    <span style={questionTextStyle}>{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={chevronStyle}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={answerContainerStyle}
                >
                  <div style={answerStyle}>
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
          style={ctaStyle}
        >
          <div style={ctaTextContainerStyle}>
            <h4 style={ctaTitleStyle}>Still have questions?</h4>
            <p style={ctaDescStyle}>Contact our support bot or join our Telegram community.</p>
          </div>
          <a
            href="https://t.me/ghostwire_bot"
            target="_blank"
            rel="noreferrer"
            style={ctaButtonStyle}
          >
            Contact Support Bot
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}