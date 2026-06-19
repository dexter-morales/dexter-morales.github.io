import type { ChatMessage as ChatMessageType } from '../../hooks/useChatbot';

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`chat-message max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line sm:max-w-[80%] ${
          isUser
            ? 'chat-user rounded-br-md bg-brand-600 text-white'
            : 'chat-assistant rounded-bl-md bg-surface-100 text-surface-800 dark:bg-surface-800 dark:text-surface-200'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
