import { twJoin } from 'tailwind-merge';

export type ChatMessagesListProps = {
  messages: {
    text: string;
    isOwn: boolean;
  }[];
};

export function ChatMessagesList({ messages }: ChatMessagesListProps) {
  return (
    <div className="space-y-4">
      <ul className="space-y-4">
        {messages.map(({ text, isOwn }, index) => (
          <li
            className={twJoin('flex', isOwn ? 'justify-end' : 'justify-start')}
            key={index}
          >
            <div
              className={twJoin(
                'p-2 rounded-lg',
                isOwn
                  ? 'text-white bg-accent-500'
                  : 'text-primary-900 bg-primary-300'
              )}
            >
              {text}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatMessagesList;
