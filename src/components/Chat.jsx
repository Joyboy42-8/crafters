export default function Chat() {
  return (
    <article className="flex flex-col gap-2">
      <Message
        side="start"
        user="2AD"
        time="12:45"
        avatar="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
        message="You were the Chosen One!"
      />

      <Message
        side="end"
        user="Joyboy"
        time="12:46"
        avatar="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
        message="I hate you!"
      />
    </article>
  );
}

function Message({ side, user, time, avatar, message }) {
  return (
    <div className={`chat chat-${side}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Message Sender"
            src={avatar}
          />
        </div>
      </div>
      <div className="chat-header">
        {user}
        <time className="text-xs opacity-50">{time}</time>
      </div>
      <div className={`chat-bubble shadow-lg text-xs`}>{message}</div>
    </div>
  );
}