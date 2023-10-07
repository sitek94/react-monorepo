import type { Meta, StoryObj } from '@storybook/react';
import { ChatNewMessageForm as ChatNewMessageFormComponent } from './chat-new-message-form';

const meta: Meta<typeof ChatNewMessageFormComponent> = {
  component: ChatNewMessageFormComponent,
  title: 'Chat/ChatNewMessageForm',
};
export default meta;
type Story = StoryObj<typeof ChatNewMessageFormComponent>;

export const ChatNewMessageForm: Story = {
  args: {
    onSubmit: (message: string) => alert(message),
  },
};
