export type ChatNewMessageFormProps = {
  onSubmit: (message: string) => void;
};

export function ChatNewMessageForm({ onSubmit }: ChatNewMessageFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = formData.get('message') as string;

    if (message) {
      onSubmit(message);
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="overflow-hidden rounded-lg border border-primary-300 shadow-sm focus-within:border-accent-500 focus-within:ring-1 focus-within:ring-accent-500">
        <textarea
          name="message"
          className="block w-full resize-none border-0 p-2 focus:outline-none sm:text-sm bg-transparent"
          placeholder="Type your message here"
          aria-label="Type your message here"
          defaultValue={''}
          rows={3}
        />

        {/* Spacer element to match the height of the toolbar */}
        <div className="py-2" aria-hidden="true">
          {/* Matches height of button in toolbar (1px border + 36px content height) */}
          <div className="py-px">
            <div className="h-9" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex justify-between p-2">
        <div className="flex-shrink-0">
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-transparent bg-accent-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
          >
            Send message
          </button>
        </div>
      </div>
    </form>
  );
}

export default ChatNewMessageForm;
