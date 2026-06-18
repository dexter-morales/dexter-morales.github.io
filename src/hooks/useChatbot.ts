import { useCallback, useState } from 'react';
import { chatbotGreeting } from '../data/chatbot-knowledge';
import { getBotResponse } from '../lib/chatbot-engine';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export function useChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'greeting', role: 'assistant', content: chatbotGreeting },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    const trimmed = content.trim();
    if (!trimmed || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    const response = await getBotResponse(trimmed, () => setIsTyping(true));

    const botMsg: ChatMessage = {
      id: `bot-${Date.now()}`,
      role: 'assistant',
      content: response,
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, botMsg]);
  }, [isTyping]);

  const toggle = useCallback(() => setIsOpen((o) => !o), []);
  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, messages, isTyping, sendMessage, toggle, close };
}
