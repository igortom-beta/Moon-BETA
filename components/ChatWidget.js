export function ChatWidget({ chatOpen, onToggle, onClose, t }) {
  return (
    <>
      <button
        className="chat-toggle"
        type="button"
        aria-expanded={chatOpen}
        aria-controls="chat-window"
        onClick={onToggle}
      >
        EMA
      </button>

      <aside id="chat-window" className={`chat-window${chatOpen ? " is-open" : ""}`} aria-hidden={!chatOpen}>
        <div className="chat-header">
          <div>
            <strong>EMA AI 4.0</strong>
            <span>{t.chatSubtitle}</span>
          </div>
          <button type="button" onClick={onClose} aria-label={t.chatClose}>
            x
          </button>
        </div>

        <div className="chat-body">
          <div className="chat-bubble">{t.chatWelcome}</div>
        </div>

        <form
          className="chat-input"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input type="text" placeholder={t.chatPlaceholder} />
          <button type="submit">{t.chatSend}</button>
        </form>
      </aside>
    </>
  );
}
