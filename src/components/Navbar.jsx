import { Link, NavLink } from 'react-router-dom';
import { Moon, Sun, Circle, Menu } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useState } from 'react';

export default function Navbar() {
  const { mode, setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const nav = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About Us' },
    { to: '/values', label: 'Core Values' },
    { to: '/partners', label: 'Partnerships' },
    { to: '/contact', label: 'Contact' },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-xl">SomDev Solutions</Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(n => (
            <NavLink key={n.to} to={n.to} className={({isActive}) => `text-sm hover:text-blue-600 transition ${isActive ? 'text-blue-600' : 'text-black/70 dark:text-white/70'}`}>{n.label}</NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => setMode('light')} className={`p-2 rounded hover:bg-black/5 dark:hover:bg-white/10 ${mode==='light'?'text-blue-600':''}`} title="Light"><Sun size={18}/></button>
          <button onClick={() => setMode('dark')} className={`p-2 rounded hover:bg-black/5 dark:hover:bg-white/10 ${mode==='dark'?'text-blue-600':''}`} title="Dark"><Moon size={18}/></button>
          <button onClick={() => setMode('system')} className={`p-2 rounded hover:bg-black/5 dark:hover:bg-white/10 ${mode==='system'?'text-blue-600':''}`} title="System"><Circle size={18}/></button>
          <button onClick={() => setOpen(v=>!v)} className="md:hidden p-2"><Menu/></button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40">
          <div className="px-4 py-3 flex flex-col gap-2">
            {nav.map(n => (
              <NavLink key={n.to} to={n.to} onClick={()=>setOpen(false)} className="py-2 text-sm text-black/80 dark:text-white/80">{n.label}</NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
