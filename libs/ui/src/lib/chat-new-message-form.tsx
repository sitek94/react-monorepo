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

    // <form onSubmit={handleSubmit} className="">
    //   <input
    //     type="text"
    //     name="message"
    //     placeholder="Type your message here"
    //     autoComplete="off"
    //     required
    //   />
    //   <button aria-label="send message">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke-width="1.5"
    //       stroke="currentColor"
    //       className="w-6 h-6"
    //     >
    //       <path
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
    //       />
    //     </svg>
    //   </button>
    // </form>
  );
}

export default ChatNewMessageForm;
