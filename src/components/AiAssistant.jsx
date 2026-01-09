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
        "Hi 👋 I’m Hitaishi’s assistant. You can ask me about skills, projects, achievements, certifications, or contact details.",
    },
  ]);

  /* 🔹 SUGGESTED QUESTIONS */
  const suggestions = [
    "What are your skills?",
    "Tell me about your projects",
    "What achievements do you have?",
    "Which certifications do you hold?",
    "Share your GitHub profile",
    "How can I contact you?",
  ];

  /* 🔹 ANSWER LOGIC */
  const getAnswer = (question) => {
    const q = question.toLowerCase();

    if (q.includes("skill")) {
      return {
        type: "list",
        title: "Hitaishi’s Skills",
        items: resumeData.skills,
      };
    }

    if (q.includes("project")) {
      return {
        type: "list",
        title: "Projects",
        items: resumeData.projects,
      };
    }

    if (q.includes("achievement") || q.includes("award")) {
      return {
        type: "list",
        title: "Achievements",
        items: resumeData.achievements,
      };
    }

    if (q.includes("certification")) {
      return {
        type: "list",
        title: "Certifications",
        items: resumeData.certifications,
      };
    }

    if (q.includes("github")) {
      return {
        type: "link",
        title: "GitHub Profile",
        url: resumeData.contact.github,
      };
    }

    if (q.includes("linkedin")) {
      return {
        type: "link",
        title: "LinkedIn Profile",
        url: resumeData.contact.linkedin,
      };
    }

    if (q.includes("contact") || q.includes("email")) {
      return {
        type: "text",
        content: `📧 You can contact Hitaishi at ${resumeData.contact.email}`,
      };
    }

    if (q.includes("name")) {
      return {
        type: "text",
        content: `Her name is ${resumeData.name}, and she is a ${resumeData.role}.`,
      };
    }

    return {
      type: "text",
      content:
        "I can help with skills, projects, achievements, certifications, or contact details 😊",
    };
  };

  /* 🔹 SEND MESSAGE */
  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMsg = {
      from: "user",
      type: "text",
      content: text,
    };

    const botMsg = {
      from: "bot",
      ...getAnswer(text),
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* ===== STICKY BUTTON ===== */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed left-0 top-1/2 -translate-y-1/2 z-[999]
          px-4 py-3 rounded-r-2xl
          bg-gradient-to-r from-pink-400 to-sky-400
          text-white font-semibold shadow-xl
          hover:scale-105 transition
        "
      >
        🤖 Ask
      </button>

      {/* ===== CHAT PANEL ===== */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex">
          {/* OVERLAY */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          />

          {/* PANEL */}
          <div className="relative ml-auto w-full sm:w-[420px] h-full bg-white flex flex-col shadow-2xl">
            {/* HEADER */}
            <div className="p-4 bg-gradient-to-r from-pink-300 to-sky-300 flex justify-between">
              <h3 className="font-bold text-gray-800">
                🤖 Portfolio Assistant
              </h3>
              <button onClick={() => setOpen(false)}>✖</button>
            </div>

            {/* CHAT */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto text-sm">
              {/* SUGGESTIONS */}
              <div className="flex flex-wrap gap-2">
                {suggestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(q)}
                    className="
                      px-3 py-1
                      text-xs font-semibold
                      rounded-full
                      bg-sky-100 text-sky-700
                      hover:bg-sky-200 transition
                    "
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* MESSAGES */}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl max-w-[85%] ${
                    msg.from === "bot"
                      ? "bg-sky-100"
                      : "bg-pink-100 ml-auto"
                  }`}
                >
                  {/* TEXT */}
                  {msg.type === "text" && <p>{msg.content}</p>}

                  {/* LIST */}
                  {msg.type === "list" && (
                    <>
                      <p className="font-semibold mb-2">{msg.title}</p>
                      <ul className="list-disc list-inside space-y-1">
                        {msg.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* LINK */}
                  {msg.type === "link" && (
                    <a
                      href={msg.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline font-semibold"
                    >
                      🔗 {msg.title}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* INPUT */}
            <div className="p-4 border-t flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about resume..."
                className="
                  flex-1 px-4 py-2 rounded-full border
                  outline-none focus:ring-2 focus:ring-pink-300
                "
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              />
              <button
                onClick={() => sendMessage(input)}
                className="
                  px-4 py-2 rounded-full
                  bg-gradient-to-r from-pink-400 to-sky-400
                  text-white font-semibold
                "
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
