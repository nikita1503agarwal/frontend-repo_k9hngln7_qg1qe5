import { useEffect, useRef, useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from '../lib/api';

export default function Chatbot(){
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: 'Hi! I can help with services, pricing, and orders.' }]);
  const [input, setInput] = useState('');
  const panelRef = useRef(null);

  useEffect(() => {
    function onKey(e){ if(e.key==='Escape') setOpen(false); }
    window.addEventListener('keydown', onKey); return ()=>window.removeEventListener('keydown', onKey);
  },[]);

  async function send(){
    if(!input.trim()) return;
    const userText = input.trim();
    setMessages(m => [...m, { role: 'user', text: userText }]);
    setInput('');
    try {
      const res = await api('/chatbot/ask', { method: 'POST', body: { message: userText } });
      setMessages(m => [...m, { role: 'bot', text: res.reply }]);
    } catch (e) {
      setMessages(m => [...m, { role: 'bot', text: 'Sorry, something went wrong.' }]);
    }
  }

  return (
    <>
      <button onClick={()=>setOpen(true)} className="fixed bottom-6 right-6 p-4 rounded-full bg-blue-600 text-white shadow-lg hover:shadow-xl transition flex items-center gap-2">
        <MessageSquare size={18}/> Chat
      </button>
      <AnimatePresence>
        {open && (
          <motion.aside initial={{x: 400, opacity: 0}} animate={{x:0,opacity:1}} exit={{x:400,opacity:0}} transition={{type:'spring', damping:20}} className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white dark:bg-neutral-900 border-l border-black/10 dark:border-white/10 z-50 shadow-2xl">
            <div className="h-16 flex items-center justify-between px-4 border-b border-black/10 dark:border-white/10">
              <div className="font-semibold">Support</div>
              <button onClick={()=>setOpen(false)} className="text-sm opacity-70 hover:opacity-100">Close</button>
            </div>
            <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-8rem)]">
              {messages.map((m, i) => (
                <div key={i} className={`max-w-[80%] ${m.role==='bot'?'bg-black/5 dark:bg-white/10':'bg-blue-600 text-white ml-auto'} rounded-2xl px-4 py-2`}>{m.text}</div>
              ))}
            </div>
            <div className="h-16 px-3 flex items-center gap-2 border-t border-black/10 dark:border-white/10">
              <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} className="flex-1 h-10 rounded-lg px-3 bg-black/5 dark:bg-white/10 outline-none" placeholder="Type your question..."/>
              <button onClick={send} className="h-10 px-4 rounded-lg bg-blue-600 text-white flex items-center gap-1"><Send size={16}/> Send</button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
