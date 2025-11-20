import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const phrases = [
  'Premium Engineering',
  'Modern Fintech Design',
  'Secure, Scalable SaaS',
];

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/10 dark:from-black/60 dark:to-black/20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 flex flex-col items-start">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: 'Manrope, var(--font-sans)' }}
        >
          SomDev Solutions
        </motion.h1>
        <AnimatedPhrase/>
        <motion.p className="mt-6 max-w-2xl text-lg text-black/70 dark:text-white/70" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}}>
          We craft premium, trustworthy software with speed, clarity, and a relentless focus on outcomes.
        </motion.p>
        <div className="mt-8 flex gap-3">
          <a href="#services" className="px-5 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition">Explore Services</a>
          <a href="#contact" className="px-5 py-3 rounded-lg border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition">Contact</a>
        </div>
      </div>
    </section>
  );
}

function AnimatedPhrase(){
  return (
    <div className="relative h-12 mt-4">
      {phrases.map((p, i) => (
        <motion.div key={p}
          className="absolute text-2xl sm:text-3xl font-medium text-blue-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 2, duration: 0.6 }}
        >{p}</motion.div>
      ))}
    </div>
  );
}
