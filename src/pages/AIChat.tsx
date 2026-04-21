import { Bot, Send, Sparkles, User, UserCircle } from "lucide-react";
import { useState } from "react";

export default function AIChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      text: "Halo! Saya asisten pintar DigiDO. Ada yang bisa saya bantu hari ini? Anda bisa menanyakan rekomendasi makanan, cara menjadi mitra, atau status pesanan Anda."
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const userMessage = { id: Date.now(), type: "user" as const, text: trimmedInput };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1, // Ensure unique ID
        type: "ai" as const,
        text: "Terima kasih atas pesan Anda! Saat ini saya masih dalam tahap pengembangan. Namun, saya akan segera bisa membantu Anda menemukan kuliner terbaik dan menjawab semua pertanyaan Anda seputar DigiDO."
      };
      // Use functional update to avoid race conditions
      setMessages(prevMessages => [...prevMessages, aiResponse]);
    }, 1000);
  };

  return (
    <main className="flex-grow max-w-4xl mx-auto w-full px-4 py-8 flex flex-col h-[calc(100vh-80px)]">
      {/* Header */}
      <div className="bg-surface-container-lowest p-6 rounded-t-2xl border-b border-surface-container flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary-container flex items-center justify-center shadow-lg">
          <Bot className="text-white w-7 h-7" />
        </div>
        <div>
          <h1 className="text-2xl font-bold headline text-primary flex items-center gap-2">
            DigiDO Assistant
            <Sparkles className="w-4 h-4 text-secondary fill-secondary" />
          </h1>
          <p className="text-sm text-on-surface-variant font-medium">Always here to help you</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-grow bg-surface-container-lowest/50 p-6 overflow-y-auto flex flex-col gap-6 scroll-smooth">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-4 max-w-[80%] ${msg.type === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
            <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm ${msg.type === 'user' ? 'bg-primary text-white' : 'bg-surface-container-high text-primary'}`}>
              {msg.type === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-6 h-6" />}
            </div>
            <div className={`p-4 rounded-2xl ${msg.type === 'user' ? 'bg-primary text-on-primary rounded-tr-sm' : 'bg-surface-container-lowest border border-outline-variant/10 shadow-sm rounded-tl-sm'}`}>
              <p className="font-body text-[15px] leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-surface-container-lowest p-4 rounded-b-2xl border-t border-surface-container">
        <div className="relative flex items-center">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Tanyakan sesuatu..."
            className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-6 pr-16 focus:ring-2 focus:ring-primary transition-all placeholder:text-outline-variant outline-none font-body"
          />
          <button 
            onClick={handleSend}
            className="absolute right-2 w-10 h-10 bg-primary text-on-primary rounded-lg flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm"
          >
            <Send className="w-5 h-5 ml-1" />
          </button>
        </div>
        <div className="mt-3 flex justify-center gap-3">
          <button className="text-xs bg-surface-container-high px-3 py-1.5 rounded-full text-on-surface-variant hover:text-primary transition-colors font-medium">Rekomendasi Makanan</button>
          <button className="text-xs bg-surface-container-high px-3 py-1.5 rounded-full text-on-surface-variant hover:text-primary transition-colors font-medium">Cara Jadi Mitra</button>
          <button className="text-xs bg-surface-container-high px-3 py-1.5 rounded-full text-on-surface-variant hover:text-primary transition-colors font-medium">Promo Hari Ini</button>
        </div>
      </div>
    </main>
  );
}
