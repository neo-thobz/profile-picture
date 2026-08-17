import {useState, useEffect, ReactNode} from "react";

function TerminalLine({ text, delay = 0 }: { text: ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className={`transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {text}
    </div>
  );
}

export default function Hero() {
  return (
    <div
      style={{
        background: "var(--color-bg)",
        color: "var(--color-text)",
        minHeight: "100vh",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Scanline overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* Grid bg */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)
        `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Corner glows */}
      <div
        className="fixed top-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, rgba(0,212,255,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="fixed bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 100% 100%, rgba(0,255,135,0.06) 0%, transparent 70%)",
        }}
      />

      <main className="max-w-6xl mx-auto px-6 pt-14">
        {/* HERO */}
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center py-20"
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded border"
                style={{
                  borderColor: "var(--color-border)",
                  background: "rgba(0,212,255,0.05)",
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--color-green)" }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--color-cyan)",
                    letterSpacing: "0.12em",
                  }}
                >
                  OPEN TO OPPORTUNITIES
                </span>
              </div>

              <h1
                className="mb-2 leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                  color: "#e8f4f8",
                }}
              >
                neo
              </h1>
              <h1
                className="mb-6 leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                  background:
                    "linear-gradient(135deg, var(--color-cyan) 0%, var(--color-green) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Thobs
              </h1>

              <div className="mb-8 flex flex-wrap gap-2">
                {["Product Engineer", "AWS Certified", "DevOps"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded border"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.08em",
                      color: "var(--color-cyan)",
                      borderColor: "rgba(0,212,255,0.3)",
                      background: "rgba(0,212,255,0.05)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p
                className="mb-10 text-base leading-relaxed"
                style={{ color: "var(--color-text)", maxWidth: "42ch" }}
              >
                Product engineer with 10+ years building resilient
                software. Obsessed with automation,
                IaC, and systems that scale without keeping you up at night.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded font-medium transition-all duration-200 text-sm hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-cyan), var(--color-green))",
                    color: "#050d12",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.06em",
                    fontWeight: 600,
                  }}
                >
                  GET IN TOUCH
                </a>
                <a
                  href="https://github.com/neo-thobz"
                  className="px-5 py-2.5 rounded border text-sm transition-all duration-200 hover:bg-opacity-10"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-text)",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.06em",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "var(--color-border)")
                  }
                >
                  VIEW PROJECTS
                </a>
              </div>
            </div>

            {/* Terminal panel */}
            <div
              className="rounded-lg overflow-hidden border"
              style={{
                borderColor: "var(--color-border)",
                background: "var(--color-surface)",
              }}
            >
              <div
                className="flex items-center gap-1.5 px-4 py-3 border-b"
                style={{
                  borderColor: "var(--color-border)",
                  background: "rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "#ff5f57" }}
                />
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "#ffbd2e" }}
                />
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "#28ca41" }}
                />
                <span
                  className="ml-3"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--color-muted)",
                  }}
                >
                  neoThobs@cloud-resume ~ %
                </span>
              </div>
              <div
                className="p-5 space-y-1"
                style={{ fontSize: "0.8rem", lineHeight: "1.7" }}
              >
                <TerminalLine text="$ whoami" delay={200} />
                <TerminalLine
                  text={
                    (
                      <span style={{ color: "var(--color-green)" }}>
                        → Neo Thobejane
                      </span>
                    )
                  }
                  delay={500}
                />
                <TerminalLine text="" delay={700} />
                <TerminalLine
                  text="$ aws sts get-caller-identity"
                  delay={900}
                />
                <TerminalLine
                  text={
                    (
                      <span
                        style={{ color: "var(--color-cyan)" }}
                      >{`{ "Account": "123456789012", "UserId": "AIDACKCEVSQ6C2EXAMPLE", "Arn": "arn:aws:iam::123456789012:user/neo.Thobs" }`}</span>
                    )
                  }
                  delay={1200}
                />
                <TerminalLine text="" delay={1400} />
                <TerminalLine text="$ terraform state list" delay={1600} />
                <TerminalLine
                  text={
                    (
                      <span style={{ color: "var(--color-green)" }}>
                        aws_s3_bucket.resume
                        aws_cloudfront_distribution.resume
                        aws_dynamodb_table.visitors
                        aws_lambda_function.visitor_counter
                        aws_iam_role.github_actions
                        aws_route53_record.resume
                      </span>
                    )
                  }
                  delay={1900}
                />
                <TerminalLine text="" delay={2100} />
                <TerminalLine
                  text="$ aws cloudfront get-distribution --id E123456789012 | jq -r '.Distribution.Status'"
                  delay={2300}
                />
                <TerminalLine
                  text={
                    (
                      <span style={{ color: "var(--color-amber)" }}>Deployed</span>
                    )
                  }
                  delay={2600}
                />
                <TerminalLine text="" delay={2800} />
                <TerminalLine
                  text={
                    (
                      <span style={{ color: "var(--color-muted)" }}>
                        ${" "}
                        <span
                          style={{
                            display: "inline-block",
                            width: "0.5em",
                            height: "1em",
                            background: "var(--color-cyan)",
                            animation: "pulse 1s infinite",
                            verticalAlign: "middle",
                          }}
                        />
                      </span>
                    )
                  }
                  delay={3000}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
