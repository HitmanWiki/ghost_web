import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, HelpCircle, ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';

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
      answer: 'Go to 🔗 Referral → Copy your unique link: `https://t.me/@ghowr_bot?start=ref_USERID`. Share it with friends. When they join and trade, you earn 20% of all trading fees they pay — forever!'
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
    padding: 'clamp(60px, 10vw, 96px) 0',
    position: 'relative',
    overflow: 'hidden',
    background: 'radial-gradient(ellipse at 20% 30%, #1a0a2e 0%, #0A041B 40%, #060012 100%)',
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
    marginBottom: '16px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(36px, 5vw, 48px)',
    fontWeight: 900,
    fontFamily: "'Inter', sans-serif",
    color: '#ffffff',
    letterSpacing: '-0.03em',
    marginBottom: '12px',
    lineHeight: 1.1,
  };

  const titleGradientStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #c084fc, #8b5cf6, #7c3aed)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const subtitleStyle: React.CSSProperties = {
    color: '#c4b5fd',
    fontSize: 'clamp(16px, 2.5vw, 18px)',
    marginTop: '8px',
    lineHeight: 1.7,
    fontWeight: 400,
  };

  const accordionContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const accordionItemStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(139, 92, 246, 0.08)',
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
  };

  const accordionButtonStyle: React.CSSProperties = {
    width: '100%',
    padding: 'clamp(18px, 2vw, 24px) clamp(20px, 2.5vw, 28px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    textAlign: 'left',
    fontWeight: 700,
    fontFamily: "'Inter', sans-serif",
    color: '#ffffff',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: 'clamp(16px, 1.5vw, 19px)',
    lineHeight: 1.4,
  };

  const questionContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    flex: 1,
  };

  const iconStyle: React.CSSProperties = {
    width: '24px',
    height: '24px',
    color: '#a78bfa',
    flexShrink: 0,
  };

  const questionTextStyle: React.CSSProperties = {
    fontSize: 'clamp(16px, 1.5vw, 19px)',
    paddingRight: '16px',
    lineHeight: 1.4,
    fontWeight: 700,
    fontFamily: "'Inter', sans-serif",
    color: '#ffffff',
  };

  const chevronStyle: React.CSSProperties = {
    padding: '10px',
    background: 'rgba(139, 92, 246, 0.08)',
    border: '1px solid rgba(139, 92, 246, 0.1)',
    borderRadius: '10px',
    color: '#a78bfa',
    flexShrink: 0,
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const answerContainerStyle: React.CSSProperties = {
    overflow: 'hidden',
  };

  const answerStyle: React.CSSProperties = {
    padding: 'clamp(4px, 1vw, 8px) clamp(20px, 2.5vw, 28px) clamp(20px, 2.5vw, 28px) clamp(20px, 2.5vw, 28px)',
    fontSize: 'clamp(15px, 1.3vw, 17px)',
    color: '#c4b5fd',
    lineHeight: 1.8,
    borderTop: '1px solid rgba(139, 92, 246, 0.06)',
    background: 'rgba(139, 92, 246, 0.02)',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
  };

  const ctaStyle: React.CSSProperties = {
    marginTop: '48px',
    padding: 'clamp(20px, 2.5vw, 28px)',
    borderRadius: '16px',
    background: 'rgba(139, 92, 246, 0.06)',
    border: '1px solid rgba(139, 92, 246, 0.1)',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    backdropFilter: 'blur(8px)',
  };

  const ctaTextContainerStyle: React.CSSProperties = {
    flex: 1,
  };

  const ctaTitleStyle: React.CSSProperties = {
    color: '#ffffff',
    fontWeight: 700,
    fontSize: 'clamp(17px, 1.5vw, 20px)',
    fontFamily: "'Inter', sans-serif",
    marginBottom: '4px',
  };

  const ctaDescStyle: React.CSSProperties = {
    fontSize: 'clamp(14px, 1vw, 15px)',
    color: '#c4b5fd',
    fontWeight: 400,
    fontFamily: "'Inter', sans-serif",
  };

  const ctaButtonStyle: React.CSSProperties = {
    padding: 'clamp(14px, 1.5vw, 18px) clamp(24px, 2.5vw, 32px)',
    whiteSpace: 'nowrap',
    background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    color: 'white',
    fontWeight: 700,
    fontSize: 'clamp(14px, 1.2vw, 16px)',
    fontFamily: "'Inter', sans-serif",
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
  };

  return (
    <motion.section ref={sectionRef} style={sectionStyle} id="faq">
      {/* Animated Gradient Orbs */}
      <motion.div
        style={{
          ...orbStyle,
          top: '80px',
          left: '-160px',
          background: 'rgba(139, 92, 246, 0.05)',
          y: bgY,
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          ...orbStyle,
          bottom: '80px',
          right: '-160px',
          background: 'rgba(6, 182, 212, 0.04)',
          y: bgY,
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
          background: 'rgba(236, 72, 153, 0.03)',
        }}
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(139, 92, 246, 0.06) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        opacity: 0.25,
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
            <Sparkles size={14} style={{ color: '#a78bfa' }} />
            Q&A Core
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={titleStyle}
          >
            Frequently Asked{' '}
            <span style={titleGradientStyle}>Questions</span>
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
                transition={{ delay: index * 0.05 }}
                style={{
                  ...accordionItemStyle,
                  borderColor: isOpen ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.08)',
                  boxShadow: isOpen ? '0 4px 30px rgba(139, 92, 246, 0.05)' : '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
                }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  style={accordionButtonStyle}
                  onMouseEnter={(e) => {
                    if (!isOpen) {
                      e.currentTarget.style.background = 'rgba(139, 92, 246, 0.02)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isOpen) {
                      e.currentTarget.style.background = 'none';
                    }
                  }}
                >
                  <div style={questionContainerStyle}>
                    <HelpCircle style={iconStyle} />
                    <span style={questionTextStyle}>{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{
                      ...chevronStyle,
                      background: isOpen ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.08)',
                      borderColor: isOpen ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.1)',
                    }}
                  >
                    <ChevronDown size={20} />
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
            href="https://t.me/ghost_wirebot"
            target="_blank"
            rel="noreferrer"
            style={ctaButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(139, 92, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 92, 246, 0.3)';
            }}
          >
            <MessageCircle size={18} />
            Contact Support Bot
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>

      <style>
        {`
          @keyframes floatGlow {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(30px, -20px) scale(1.1); }
          }
        `}
      </style>
    </motion.section>
  );
}