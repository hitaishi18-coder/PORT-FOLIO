import { useState } from "react";
import resumeData from "../data/resumedata";

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      type: "text",
      content:
        "Hello! I am Hitaishi's portfolio assistant. How can I help you today?",
    },
  ]);

  const suggestions = [
    "What are your skills?",
    "Tell me about your projects",
    "What achievements do you have?",
    "Which certifications do you hold?",
    "How can I contact you?",
  ];

  const getAnswer = (question) => {
    const q = question.toLowerCase();
    if (q.includes("skill")) {
      return { type: "list", title: "Technical Expertise", items: resumeData.skills };
    }
    if (q.includes("project")) {
      return { type: "list", title: "Key Projects", items: resumeData.projects };
    }
    if (q.includes("achievement") || q.includes("award")) {
      return { type: "list", title: "Recognition", items: resumeData.achievements };
    }
    if (q.includes("certification")) {
      return { type: "list", title: "Certifications", items: resumeData.certifications };
    }
    if (q.includes("github")) {
      return { type: "link", title: "GitHub Profile", url: resumeData.contact.github };
    }
    if (q.includes("linkedin")) {
      return { type: "link", title: "LinkedIn Profile", url: resumeData.contact.linkedin };
    }
    if (q.includes("contact") || q.includes("email")) {
      return { type: "text", content: `You can reach Hitaishi via email at ${resumeData.contact.email}` };
    }
    return { type: "text", content: "I'm specialized in answering questions about Hitaishi's professional background, skills, and projects." };
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { from: "user", type: "text", content: text };
    const botMsg = { from: "bot", ...getAnswer(text) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          left: "0",
          top: "85%",
          transform: "translateY(-50%)",
          zIndex: 999,
          padding: "0.75rem 1rem",
          borderRadius: "0 12px 12px 0",
          backgroundColor: "#6366f1",
          color: "white",
          border: "none",
          fontWeight: 600,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
        onMouseOver={(e) => e.currentTarget.style.paddingLeft = "1.5rem"}
        onMouseOut={(e) => e.currentTarget.style.paddingLeft = "1rem"}
      >
        <span>AI</span> Assistant
      </button>

      {open && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
        }}>
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(4px)",
            }}
          />

          <div style={{
            position: "relative",
            marginLeft: "auto",
            width: "100%",
            maxWidth: "400px",
            height: "100%",
            backgroundColor: "#09090b",
            display: "flex",
            flexDirection: "column",
            boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.5)",
            borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
            fontFamily: "'Inter', sans-serif",
          }}>
            <div style={{
              padding: "1.5rem",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 700, color: "#6366f1" }}>Assistant</h3>
              <button 
                onClick={() => setOpen(false)}
                style={{ 
                  background: "none", 
                  border: "none", 
                  color: "white", 
                  cursor: "pointer",
                  fontSize: "1.25rem",
                  opacity: 0.5,
                }}
              >
                ×
              </button>
            </div>

            <div style={{
              flex: 1,
              padding: "1.5rem",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                {suggestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(q)}
                    style={{
                      padding: "0.4rem 0.8rem",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      borderRadius: "99px",
                      backgroundColor: "rgba(99, 102, 241, 0.1)",
                      color: "#6366f1",
                      border: "1px solid rgba(99, 102, 241, 0.2)",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(99, 102, 241, 0.2)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(99, 102, 241, 0.1)";
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>

              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1rem",
                    borderRadius: "16px",
                    maxWidth: "85%",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                    backgroundColor: msg.from === "bot" ? "rgba(255, 255, 255, 0.03)" : "#6366f1",
                    color: "white",
                    alignSelf: msg.from === "bot" ? "flex-start" : "flex-end",
                    border: msg.from === "bot" ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
                  }}
                >
                  {msg.type === "text" && <div>{msg.content}</div>}
                  {msg.type === "list" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <div style={{ fontWeight: 700, color: "#6366f1" }}>{msg.title}</div>
                      <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                        {msg.items.map((item, idx) => (
                          <li key={idx} style={{ marginBottom: "0.25rem" }}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {msg.type === "link" && (
                    <a
                      href={msg.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white", fontWeight: 700, textDecoration: "underline" }}
                    >
                      {msg.title} ↗
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div style={{
              padding: "1.5rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              gap: "0.75rem",
            }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me something..."
                style={{
                  flex: 1,
                  padding: "0.75rem 1rem",
                  borderRadius: "12px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "white",
                  outline: "none",
                  fontSize: "0.9rem",
                }}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              />
              <button
                onClick={() => sendMessage(input)}
                style={{
                  padding: "0.75rem 1.25rem",
                  borderRadius: "12px",
                  backgroundColor: "#6366f1",
                  color: "white",
                  border: "none",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
