import React from 'react';
import Hero from './components/Hero';
import FeaturesParallax from './components/FeaturesParallax';
import SecurityPillars from './components/SecurityPillars';

function App() {
  return (
    <div className="relative min-h-screen bg-apple-bg text-apple-text selection:bg-white/30 selection:text-white font-sans">
      {/* Apple-style Global Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-12 flex items-center justify-between max-w-5xl">
          <div className="text-sm font-semibold tracking-tight text-white flex items-center gap-1 cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 2L2 22h20L12 2z" fill="white"/>
            </svg>
            CERBERUS APEX
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-medium text-[#f5f5f7]/80">
            <a href="#" className="hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-white transition-colors">Industries</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <div>
            <button className="text-xs font-medium text-[#f5f5f7]/80 hover:text-white transition-colors">
              Client Login
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <FeaturesParallax />
        <SecurityPillars />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[#1d1d1f] py-12 text-xs text-[#86868b] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="border-b border-white/10 pb-8 mb-8">
              <p className="mb-4">1. APEX Platform is available exclusively for qualified government and defense suppliers.</p>
              <p>2. Security clearance verification is required prior to deployment.</p>
           </div>
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <p>&copy; {new Date().getFullYear()} Cerberus Systems Inc. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                 <a href="#" className="hover:text-[#f5f5f7] transition-colors">Privacy Policy</a>
                 <span className="border-l border-white/20 h-3"></span>
                 <a href="#" className="hover:text-[#f5f5f7] transition-colors">Terms of Use</a>
                 <span className="border-l border-white/20 h-3"></span>
                 <a href="#" className="hover:text-[#f5f5f7] transition-colors">Legal</a>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
