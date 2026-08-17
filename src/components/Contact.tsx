type ContactDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Contact({ isOpen, onClose }: ContactDialogProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
      style={{
        background: "rgba(2, 8, 12, 0.72)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-4xl rounded-2xl border p-6 md:p-8 shadow-2xl animate-[fadeInScale_0.22s_ease-out]"
        style={{
          borderColor: "var(--color-border)",
          background: "rgba(6, 18, 24, 0.96)",
          boxShadow: "0 24px 80px rgba(0, 0, 0, 0.45)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                color: "var(--color-cyan)",
                letterSpacing: "0.16em",
              }}
            >
              CONTACT
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact dialog"
            className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text)",
              background: "transparent",
            }}
          >
            ×
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p
              className="text-base mb-8 leading-relaxed"
              style={{ color: "var(--color-text)" }}
            >
              I'm open to senior cloud engineering roles and technical consulting
              on cloud architecture. If you're building something ambitious, let's
              talk.
            </p>
            <div className="space-y-3">
              {[
                { label: "EMAIL", value: "neo@neothobs.co.za", icon: "✉" },
                { label: "LINKEDIN", value: "/in/neothobs", icon: "⬡" },
                { label: "GITHUB", value: "github.com/neo-thobz", icon: "⌥" },
                {
                  label: "LOCATION",
                  value: "Pretoria, ZA (Remote-friendly)",
                  icon: "◈",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-3 rounded border"
                  style={{
                    borderColor: "var(--color-border)",
                    background: "var(--color-surface)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.85rem",
                      color: "var(--color-cyan)",
                      width: "1.5rem",
                      textAlign: "center",
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        color: "var(--color-muted)",
                        letterSpacing: "0.12em",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8rem",
                        color: "var(--color-text)",
                        marginTop: "0.1rem",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {[
              { label: "NAME", placeholder: "Your name", type: "text" },
              { label: "EMAIL", placeholder: "your@email.com", type: "email" },
            ].map((field) => (
              <div key={field.label}>
                <label
                  className="block mb-1.5"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "var(--color-muted)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2.5 rounded border bg-transparent outline-none transition-colors duration-200 text-sm"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-text)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(0,212,255,0.5)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--color-border)")
                  }
                />
              </div>
            ))}
            <div>
              <label
                className="block mb-1.5"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--color-muted)",
                  letterSpacing: "0.12em",
                }}
              >
                MESSAGE
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about the role or project..."
                className="w-full px-3 py-2.5 rounded border bg-transparent outline-none transition-colors duration-200 resize-none text-sm"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  lineHeight: "1.6",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(0,212,255,0.5)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--color-border)")
                }
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded font-medium transition-all duration-200 text-sm hover:opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-cyan), var(--color-green))",
                color: "#050d12",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.08em",
                fontWeight: 700,
              }}
            >
              SEND MESSAGE →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
