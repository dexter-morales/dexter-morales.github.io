import type { ChatMessage as ChatMessageType } from '../../hooks/useChatbot';

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
          isUser
            ? 'rounded-br-md bg-brand-600 text-white'
            : 'rounded-bl-md bg-surface-100 text-surface-800 dark:bg-surface-800 dark:text-surface-200'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
