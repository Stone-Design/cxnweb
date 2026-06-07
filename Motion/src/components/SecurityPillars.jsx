import React from 'react';
import { motion } from 'framer-motion';

export default function SecurityPillars() {
  return (
    <section className="py-40 relative z-10 bg-apple-bg overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col items-center">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Security. Down to the core.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl text-apple-muted max-w-3xl mx-auto font-medium tracking-tight"
          >
            Engineered specifically for the regulatory environments of law enforcement and military supply chains. It's not a feature. It's the foundation.
          </motion.p>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-1/2 bg-apple-surface rounded-[2rem] p-12 relative overflow-hidden border border-white/5 min-h-[400px] flex flex-col justify-end"
          >
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-30">
               <div className="w-64 h-64 border-[0.5px] border-white/20 rounded-full flex items-center justify-center relative">
                 <div className="absolute w-full h-[1px] bg-white/20"></div>
                 <div className="absolute h-full w-[1px] bg-white/20"></div>
                 <div className="w-32 h-32 border-[0.5px] border-white/20 rounded-full"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)]"></div>
               </div>
            </div>
            
            <div className="relative z-10">
              <h4 className="text-2xl font-bold tracking-tight mb-2">Absolute Data Integrity.</h4>
              <p className="text-lg text-apple-muted font-medium">Military-grade encryption at rest and in transit. Granular access controls ensure data is only accessible to cleared personnel.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-1/2 bg-apple-surface rounded-[2rem] p-12 relative overflow-hidden border border-white/5 min-h-[400px] flex flex-col justify-end"
          >
            <div className="absolute top-0 right-0 w-full h-full flex items-start justify-end p-8 opacity-40">
               <div className="grid grid-cols-4 gap-2">
                 {[...Array(16)].map((_, i) => (
                   <div key={i} className={`w-12 h-4 rounded-sm ${Math.random() > 0.5 ? 'bg-white/20' : 'bg-white/5'} animate-pulse`} style={{ animationDelay: `${Math.random() * 2}s`, animationDuration: '3s' }}></div>
                 ))}
               </div>
            </div>

            <div className="relative z-10">
              <h4 className="text-2xl font-bold tracking-tight mb-2">Immutable Auditability.</h4>
              <p className="text-lg text-apple-muted font-medium">Every transaction, query, and system modification is logged in an immutable ledger, satisfying stringent compliance.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
