import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Section({ title, id, children }){
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section id={id} ref={ref} className="py-20">
      <motion.h2 className="text-3xl font-bold mb-6" initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5}}>{title}</motion.h2>
      <motion.div initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6, delay:0.1}}>
        {children}
      </motion.div>
    </section>
  );
}
