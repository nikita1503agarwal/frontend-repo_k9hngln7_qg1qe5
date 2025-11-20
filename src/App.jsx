import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PublicPages from './pages/Public';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import Auth from './pages/Auth';
import Chatbot from './components/Chatbot';
import { ThemeProvider } from './components/ThemeProvider';

function Layout({ children }){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-black dark:to-neutral-950 text-black dark:text-white transition-colors">
      <Navbar/>
      {children}
      <Footer/>
      <Chatbot/>
    </div>
  );
}

export default function App(){
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<PublicPages/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/user" element={<UserDashboard/>} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

function NotFound(){
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="opacity-70 mt-2">The page you are looking for does not exist.</p>
      <Link to="/" className="inline-block mt-6 px-5 py-3 rounded-lg bg-blue-600 text-white">Go home</Link>
    </div>
  );
}
