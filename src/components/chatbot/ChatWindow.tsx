import { useEffect, useRef, useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X } from 'lucide-react';
import { suggestedQuestions } from '../../data/chatbot-knowledge';
import type { ChatMessage as ChatMessageType } from '../../hooks/useChatbot';
import { ChatMessage } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';

interface ChatWindowProps {
  isOpen: boolean;
  messages: ChatMessageType[];
  isTyping: boolean;
  onClose: () => void;
  onSend: (message: string) => void;
}

export function ChatWindow({ isOpen, messages, isTyping, onClose, onSend }: ChatWindowProps) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-3 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] z-50 flex h-[min(560px,calc(100dvh-7rem-env(safe-area-inset-bottom)))] flex-col overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-2xl sm:inset-x-auto sm:right-4 sm:bottom-24 sm:h-[min(560px,calc(100vh-8rem))] sm:w-[min(400px,calc(100vw-2rem))] dark:border-surface-700 dark:bg-surface-900"
          role="dialog"
          aria-label="Portfolio assistant chat"
        >
          <div className="flex items-center justify-between border-b border-surface-200 bg-brand-600 px-4 py-3 text-white dark:border-surface-700">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                <Bot size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold">Portfolio Assistant</p>
                <p className="text-xs text-white/70">Ask me anything about Dexter</p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close chat"
              className="rounded-lg p-1.5 transition-colors hover:bg-white/20"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && (
            <div className="border-t border-surface-200 px-4 py-3 dark:border-surface-700">
              <p className="mb-2 text-xs font-medium text-surface-500">Suggested questions</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => onSend(q)}
                    className="rounded-lg border border-surface-200 px-3 py-1.5 text-xs text-surface-600 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 dark:border-surface-700 dark:text-surface-400 dark:hover:border-brand-700 dark:hover:bg-brand-950 dark:hover:text-brand-300"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex gap-2 border-t border-surface-200 p-4 dark:border-surface-700"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, projects..."
              aria-label="Chat message"
              className="flex-1 rounded-xl border border-surface-300 bg-white px-4 py-2.5 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none dark:border-surface-700 dark:bg-surface-800 dark:text-white"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white transition-colors hover:bg-brand-700 disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
