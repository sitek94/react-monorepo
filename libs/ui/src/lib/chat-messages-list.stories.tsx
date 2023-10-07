import type { Meta, StoryObj } from '@storybook/react';
import { ChatMessagesList as ChatMessagesListComponent } from './chat-messages-list';

const meta: Meta<typeof ChatMessagesListComponent> = {
  component: ChatMessagesListComponent,
  title: 'Chat/ChatMessagesList',
};
export default meta;
type Story = StoryObj<typeof ChatMessagesListComponent>;

export const ChatMessagesList: Story = {
  args: {
    messages: [
      { isOwn: true, text: "Hey John, how's it going?" },
      { isOwn: false, text: 'Not bad, just working on a new project.' },
      { isOwn: true, text: "Cool, what's it about?" },
      { isOwn: false, text: "It's a remake of an old game I used to play." },
      { isOwn: true, text: 'Oh nice, what game?' },
      { isOwn: false, text: 'It\'s called "The Legend of Zelda"' },
      { isOwn: true, text: 'Never heard of it.' },
      { isOwn: false, text: "It's pretty old, came out in 1986." },
      { isOwn: true, text: 'Oh wow, that is old.' },
    ],
  },
};
