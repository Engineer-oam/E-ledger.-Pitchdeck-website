import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { ThreeScene } from './ThreeScene';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ThreeScene />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-medium text-slate-700 mb-8 border-brand-emerald/30">
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
            Prototype Phase • DPIIT Recognized • Building in India
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-tight">
            Building the Trust Layer for <br className="hidden md:block" />
            <span className="text-gradient">Regulated Supply Chains</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-10 leading-relaxed">
            Compliance infrastructure enabling trusted data sharing, audit-ready operations, and interoperability across organizations—without replacing existing ERP systems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
            <button className="flex items-center justify-center gap-2 bg-brand-indigo hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-medium transition-colors shadow-sm w-full sm:w-auto">
              Explore E-Ledger
              <ArrowRight className="w-4 h-4" />
            </button>
            <a href="https://e-ledger-proto.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium transition-colors shadow-sm w-full sm:w-auto">
              <Play className="w-4 h-4" />
              View Prototype
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest text-slate-400">Scroll to discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent" />
      </motion.div>
    </section>
  );
}
