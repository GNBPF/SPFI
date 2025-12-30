import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// @ts-ignore
import conciergeQuestions from '../data/conciergeQuestions.json';

const ConciergeChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, selectedQuestion]);

  const handleQuestionClick = (id: number) => {
    setSelectedQuestion(id);
  };

  const selectedQnA = conciergeQuestions.questions.find(q => q.id === selectedQuestion);

  return (
    <>
      {/* Floating Button - Bottom Right */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="fixed bottom-4 min-[375px]:bottom-6 right-4 min-[375px]:right-6 z-50 flex items-center justify-center gap-2 h-12 min-[375px]:h-14 rounded-full bg-accent shadow-[0_0_15px_rgba(197,160,89,0.3)] overflow-hidden"
        aria-label="Open Concierge Chat"
        whileHover={{ 
          scale: 1.1
        }}
        whileTap={{ 
          scale: 0.95
        }}
        animate={{
          width: isHovered || isOpen ? '140px' : '3rem',
          paddingLeft: isHovered || isOpen ? '1rem' : '0',
          paddingRight: isHovered || isOpen ? '1rem' : '0',
          boxShadow: isOpen 
            ? "0_0_25px_rgba(197,160,89,0.5)" 
            : isHovered
            ? "0_0_30px_rgba(197,160,89,0.6)"
            : "0_0_15px_rgba(197,160,89,0.3)"
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          duration: 0.3
        }}
      >
        <motion.span 
          className="material-symbols-outlined text-primary text-xl min-[375px]:text-2xl flex-shrink-0"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          support_agent
        </motion.span>
        <motion.span 
          className="overflow-hidden whitespace-nowrap text-primary font-bold text-xs min-[375px]:text-sm"
          animate={{ 
            maxWidth: isHovered || isOpen ? '100px' : '0px',
            opacity: isHovered || isOpen ? 1 : 0,
            marginLeft: isHovered || isOpen ? '0.5rem' : '0'
          }}
          transition={{ 
            duration: 0.3, 
            ease: "easeInOut",
            opacity: { duration: 0.2 }
          }}
        >
          Concierge
        </motion.span>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 400, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 400, scale: 0.9 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.4
            }}
            className="fixed bottom-20 min-[375px]:bottom-24 right-4 min-[375px]:right-6 z-50 w-[calc(100vw-2rem)] min-[375px]:w-[90vw] max-w-md h-[60vh] min-[375px]:h-[70vh] max-h-[500px] min-[375px]:max-h-[600px] bg-white rounded-xl min-[375px]:rounded-2xl shadow-2xl border border-accent/20 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-accent text-xl">support_agent</span>
                </div>
                <div>
                  <h3 className="text-cream font-bold text-lg">Concierge</h3>
                  <p className="text-cream/80 text-xs">How can we help you?</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-cream/80 hover:text-cream transition-colors"
                aria-label="Close chat"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            {/* Chat Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
              {!selectedQuestion ? (
                <>
                  <div className="text-center mb-6">
                    <p className="text-primary/70 text-sm mb-4">Select a question to get started:</p>
                  </div>
                  <div className="space-y-3">
                    {conciergeQuestions.questions.map((item) => (
                      <motion.button
                        key={item.id}
                        onClick={() => handleQuestionClick(item.id)}
                        className="w-full text-left p-4 rounded-lg border border-primary/10 hover:border-accent/50 hover:bg-accent/5 transition-all group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-accent text-lg group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5">
                            help_outline
                          </span>
                          <p className="text-primary font-medium text-sm leading-relaxed">{item.question}</p>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {/* Back Button */}
                  <button
                    onClick={() => setSelectedQuestion(null)}
                    className="flex items-center gap-2 text-accent hover:text-primary transition-colors mb-4 text-sm font-medium"
                  >
                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                    <span>Back to Questions</span>
                  </button>

                  {/* Question */}
                  <div className="bg-primary/5 rounded-lg p-4 mb-4">
                    <p className="text-primary font-semibold text-sm flex items-start gap-2">
                      <span className="material-symbols-outlined text-accent text-lg flex-shrink-0">help_outline</span>
                      <span>{selectedQnA?.question}</span>
                    </p>
                  </div>

                  {/* Answer */}
                  <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
                    <p className="text-primary/80 text-sm leading-relaxed whitespace-pre-line">
                      {selectedQnA?.answer}
                    </p>
                  </div>

                  {/* Additional Help */}
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-primary/70 text-xs mb-2 font-semibold">Need more help?</p>
                    <p className="text-primary/60 text-xs">
                      If you have additional questions, please contact our support team or visit our registration page for more information.
                    </p>
                  </div>
                </>
              )}
              <div ref={chatEndRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ConciergeChat;

