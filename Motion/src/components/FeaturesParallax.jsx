import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FeaturesParallax() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [250, -250]);

  return (
    <section ref={containerRef} className="py-40 relative z-10 bg-apple-bg">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">One seamless system.</h2>
          <p className="text-2xl text-apple-muted max-w-3xl mx-auto font-medium tracking-tight">
            Leave behind fragmented software and bolted-on CRM. APEX unites every department with real-time operational intelligence.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-12 relative">
          {/* Card 1 */}
          <motion.div style={{ y: y1 }} className="bg-apple-surface rounded-[2rem] p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden border border-white/5">
            <div className="md:w-1/2">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">A singular source of truth.</h3>
              <p className="text-xl text-apple-muted">
                Replace multiple disconnected software stacks. Every department operates from identical, real-time datasets. Zero latency in decision making.
              </p>
            </div>
            <div className="md:w-1/2 w-full aspect-square md:aspect-video rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/5">
              <div className="w-32 h-32 rounded-full border-[0.5px] border-white/20 flex items-center justify-center relative">
                <div className="absolute inset-2 rounded-full border-[0.5px] border-white/40 border-t-white animate-spin" style={{ animationDuration: '4s' }}></div>
                <div className="w-16 h-16 rounded-full bg-white blur-xl opacity-20"></div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div style={{ y: y2 }} className="bg-apple-surface rounded-[2rem] p-12 md:p-16 flex flex-col md:flex-row-reverse items-center gap-12 overflow-hidden border border-white/5">
            <div className="md:w-1/2">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Built-in Intelligence.</h3>
              <p className="text-xl text-apple-muted">
                Reduce routine tasks with an AI that anticipates workflows, analyzes trends, and flags anomalies automatically.
              </p>
            </div>
            <div className="md:w-1/2 w-full aspect-square md:aspect-video rounded-2xl bg-gradient-to-tr from-white/5 to-white/10 flex items-center justify-center border border-white/5 relative overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#ffffff_50%,#000000_100%)] opacity-20 animate-[spin_10s_linear_infinite]"></div>
               <div className="absolute inset-[1px] bg-apple-surface rounded-2xl"></div>
               <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center z-10 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                 <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
