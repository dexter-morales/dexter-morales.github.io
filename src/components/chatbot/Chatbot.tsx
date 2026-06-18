import { useChatbot } from '../../hooks/useChatbot';
import { ChatButton } from './ChatButton';
import { ChatWindow } from './ChatWindow';

export function Chatbot() {
  const { isOpen, messages, isTyping, sendMessage, toggle, close } = useChatbot();

  return (
    <>
      <ChatButton onClick={toggle} isOpen={isOpen} />
      <ChatWindow
        isOpen={isOpen}
        messages={messages}
        isTyping={isTyping}
        onClose={close}
        onSend={sendMessage}
      />
    </>
  );
}
