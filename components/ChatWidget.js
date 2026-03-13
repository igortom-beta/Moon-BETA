export function ChatWidget({ chatOpen, onToggle, onClose }) {
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
            <span>Inteligentni pruvodce</span>
          </div>
          <button type="button" onClick={onClose} aria-label="Zavrit chat">
            x
          </button>
        </div>

        <div className="chat-body">
          <div className="chat-bubble">
            Vitejte v Moon River. Jsem EMA, vase spojeni s historii i komfortem tohoto
            mista. Cim mohu poslouzit?
          </div>
        </div>

        <form
          className="chat-input"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input type="text" placeholder="Zeptejte se Emy..." />
          <button type="submit">Odeslat</button>
        </form>
      </aside>
    </>
  );
}
