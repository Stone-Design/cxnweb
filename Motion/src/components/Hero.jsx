import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GLSLHills } from './ui/glsl-hills';

export default function Hero() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"]
  });
  
  // Apple-style fade and scale out on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section className="relative h-[120vh] flex flex-col items-center justify-start pt-[20vh] overflow-hidden">
      {/* Background WebGL */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-lighten opacity-80">
         <GLSLHills width="100%" height="100%" cameraZ={100} speed={0.8} />
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-apple-bg"></div>
      </div>

      <motion.div 
        style={{ opacity, scale, y }} 
        className="container mx-auto px-4 z-10 relative flex flex-col items-center text-center"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-apple-muted font-medium tracking-widest text-xs sm:text-sm uppercase mb-4"
        >
          Pro. Beyond.
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold mb-6 tracking-tighter leading-none text-center"
        >
          CERBERUS APEX.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-3xl text-apple-muted max-w-2xl font-medium tracking-tight mb-12"
        >
          The unified, AI-assisted operating system for defense suppliers.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
            Explore Architecture
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
