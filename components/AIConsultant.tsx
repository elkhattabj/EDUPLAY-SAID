
import React, { useState } from 'react';
import { Bot, Send, User, Sparkles, MessageSquareCode } from 'lucide-react';
import { getProjectAdvice } from '../services/gemini';

const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Bienvenue sur EDUPLAY AI Consultant. Je suis là pour vous accompagner dans la phase de conception technique de votre projet. Quelle zone souhaitez-vous aménager ?' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    const aiResponse = await getProjectAdvice(userMessage);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-[32px] shadow-2xl border border-slate-100 overflow-hidden flex flex-col h-[550px] w-full max-w-xl mx-auto ring-1 ring-slate-200">
      <div className="bg-slate-900 p-6 text-white flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="bg-lime-500 p-3 rounded-2xl shadow-lg shadow-lime-500/20">
            <MessageSquareCode size={24} className="text-white" />
          </div>
          <div>
            <h4 className="font-bold font-heading text-lg tracking-tight">Expert Design IA</h4>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Prêt pour l'étude</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-4 max-w-[90%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-10 h-10 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-md ${m.role === 'user' ? 'bg-lime-500 text-white' : 'bg-white text-slate-900 border border-slate-100'}`}>
                {m.role === 'user' ? <User size={20} /> : <Bot size={20} />}
              </div>
              <div className={`p-5 rounded-[20px] text-sm leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-lime-500 text-white rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'}`}>
                {m.text}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="flex gap-4 items-center bg-white p-5 rounded-[20px] text-sm shadow-sm border border-slate-100">
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-6 bg-white border-t border-slate-100 flex gap-4">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Décrivez votre projet (ex: cour d'école, parc public...)"
          className="flex-1 bg-slate-100 border-2 border-transparent rounded-2xl px-6 py-3 text-sm font-medium focus:bg-white focus:border-lime-500 transition-all outline-none"
        />
        <button 
          type="submit"
          className="bg-slate-900 text-white p-4 rounded-2xl hover:bg-lime-600 transition-all disabled:opacity-50 shadow-lg shadow-slate-900/10 active:scale-95"
          disabled={loading || !input.trim()}
        >
          <Send size={22} />
        </button>
      </form>
    </div>
  );
};

export default AIConsultant;
