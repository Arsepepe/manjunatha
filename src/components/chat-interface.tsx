"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, User, Bot, AlertTriangle } from "lucide-react";

export function ChatInterface() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Bienvenido. Soy el asistente de Enseñanzas Manjunatha. ¿Qué inquietud espiritual trae tu mente hoy?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Este es un entorno de chat integrado (Demo). Para que produzca respuestas reales basadas en el Cuaderno, deberemos añadir una clave de API de OpenAI o Anthropic al backend. Por ahora, si experimentas el error 'auth/error' en ChatGPT, te recomiendo abrir el enlace original en una ventana de Incógnito." 
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[500px] border border-stone-200 rounded-2xl overflow-hidden bg-stone-50 shadow-sm mt-8">
      {/* Aviso */}
      <div className="bg-yellow-50 text-yellow-800 text-xs py-2 px-4 flex items-center justify-center border-b border-yellow-100">
        <AlertTriangle className="w-3 h-3 mr-2" />
        Intefraz Integrada Demo (Sustituto de Iframe)
      </div>
      
      {/* Mensajes */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex max-w-[80%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-stone-800 text-white ml-3" : "bg-primary/20 text-primary mr-3"}`}>
                {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.role === "user" ? "bg-stone-800 text-stone-100 rounded-tr-none" : "bg-white border border-stone-100 text-stone-700 font-light rounded-tl-none shadow-sm"}`}>
                {msg.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-4 bg-white border-t border-stone-200 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu reflexión o pregunta..." 
          className="flex-1 px-4 py-2 bg-stone-50 border border-stone-200 rounded-full text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
        <Button type="submit" size="icon" className="rounded-full h-10 w-10 bg-primary hover:bg-stone-700">
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
}
