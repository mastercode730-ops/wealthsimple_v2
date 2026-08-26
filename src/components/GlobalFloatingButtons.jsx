import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GlobalFloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hi there! 👋 Welcome to Wealthsimple. How can I help you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  useEffect(() => {
    const handleOpenChat = (event) => {
      setIsOpen(true);
      const detail = event?.detail;
      if (detail?.message) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            sender: 'bot',
            text: detail.message,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      }
    };
    window.addEventListener('open-support-chat', handleOpenChat);
    window.addEventListener('open-chat', handleOpenChat);
    return () => {
      window.removeEventListener('open-support-chat', handleOpenChat);
      window.removeEventListener('open-chat', handleOpenChat);
    };
  }, []);

  const quickQuestions = [
    "What are your fees?",
    "How do I open an account?",
    "Is my money safe?",
    "Transfer an account",
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "Thanks for reaching out! Our team is available 24/7. Is there anything specific about Cash, Managed Investing, or Trading you'd like to learn more about?";
      const qLower = query.toLowerCase();

      if (qLower.includes('fee') || qLower.includes('cost')) {
        botResponse = "Wealthsimple offers 0% commission stock and ETF trading! Managed portfolios have low management fees starting at just 0.4%-0.5%.";
      } else if (qLower.includes('open') || qLower.includes('start') || qLower.includes('account')) {
        botResponse = "Opening an account takes less than 5 minutes! Click 'Get started' on the hero section to choose between Cash, TFSA, RRSP, or Personal accounts.";
      } else if (qLower.includes('safe') || qLower.includes('secure') || qLower.includes('cdic')) {
        botResponse = "Your security is our top priority. Accounts are CDIC-insured up to $500,000 through our partner banks, and we use bank-level 256-bit encryption.";
      } else if (qLower.includes('transfer')) {
        botResponse = "We cover transfer fees for accounts over $5,000! You can easily initiate an account transfer directly from the app or desktop dashboard.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: botResponse,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 w-[350px] sm:w-[380px] h-[500px] bg-white rounded-3xl shadow-md border border-neutral-200/80 flex flex-col overflow-hidden text-neutral-800 font-sans"
          >
            {/* Chat Header */}
            <div className="bg-[#111111] text-fintech-textDark px-5 py-4 flex items-center justify-between shadow-md">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-[#f6eddd] flex items-center justify-center font-bold text-black text-sm">
                    WS
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#111111]" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm leading-tight text-fintech-textDark">Wealthsimple Support</h3>
                  <p className="text-xs text-neutral-400">Virtual Assistant • Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-fintech-textDark hover:bg-neutral-800 transition-colors"
                aria-label="Close Chat"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-neutral-50/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[84%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-xs ${msg.sender === 'user'
                        ? 'bg-[#111111] text-fintech-textDark rounded-br-none'
                        : 'bg-white border border-neutral-200/80 text-neutral-800 rounded-bl-none'
                      }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-neutral-400 mt-1 px-1">{msg.time}</span>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center space-x-1 bg-white border border-neutral-200/80 px-3.5 py-2.5 rounded-2xl rounded-bl-none w-max">
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                </div>
              )}

              {/* Quick Prompt Chips */}
              {messages.length === 1 && !isTyping && (
                <div className="pt-2 space-y-1.5">
                  <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider px-1">Suggested topics:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {quickQuestions.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(q)}
                        className="text-xs bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-700 px-3 py-1.5 rounded-full transition-colors text-left cursor-pointer"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white border-t border-neutral-100 flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-neutral-100 hover:bg-neutral-100/80 focus:bg-white border border-transparent focus:border-neutral-300 rounded-full px-4 py-2 text-sm outline-none transition-all placeholder:text-neutral-400"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-9 h-9 rounded-full bg-[#111111] disabled:bg-neutral-300 text-fintech-textDark flex items-center justify-center transition-all cursor-pointer disabled:cursor-not-allowed shrink-0"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#111111] text-fintech-textDark flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer border border-neutral-800"
        aria-label="Toggle Chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </motion.svg>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default GlobalFloatingButtons;
