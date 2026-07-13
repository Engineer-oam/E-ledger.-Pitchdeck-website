import { motion, useScroll, useTransform } from 'motion/react';
import { Globe, Shield, Cpu, Target, CheckCircle2, ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export function Market() {
  const shifts = [
    { title: "Increasing regulatory complexity", icon: Shield },
    { title: "Cross-border pharmaceutical trade", icon: Globe },
    { title: "Enterprise digitization", icon: Cpu }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 20]);
  
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 4]);
  const display1 = useTransform(scrollYProgress, v => v > 0.2 ? "none" : "flex");

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.2, 0.4], [0.5, 4]);
  const display2 = useTransform(scrollYProgress, v => v < 0.2 || v > 0.4 ? "none" : "flex");

  const opacity3 = useTransform(scrollYProgress, [0.4, 0.45, 0.55, 0.6], [0, 1, 1, 0]);
  const scale3 = useTransform(scrollYProgress, [0.4, 0.6], [0.5, 4]);
  const display3 = useTransform(scrollYProgress, v => v < 0.4 || v > 0.6 ? "none" : "flex");

  const opacity4 = useTransform(scrollYProgress, [0.6, 0.65, 0.75, 0.8], [0, 1, 1, 0]);
  const scale4 = useTransform(scrollYProgress, [0.6, 0.8], [0.5, 4]);
  const display4 = useTransform(scrollYProgress, v => v < 0.6 || v > 0.8 ? "none" : "flex");

  const opacity5 = useTransform(scrollYProgress, [0.8, 0.85, 1], [0, 1, 1]);
  const scale5 = useTransform(scrollYProgress, [0.8, 1], [0.5, 1]);
  const display5 = useTransform(scrollYProgress, v => v < 0.8 ? "none" : "flex");

  return (
    <div className="relative">
      {/* Section 8: Why This Market? */}
      <section className="min-h-screen flex items-center py-32 px-6">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Why This Market?</h2>
          <p className="text-xl text-slate-600 mb-16">Three structural shifts are creating this opportunity:</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {shifts.map((shift, i) => (
              <motion.div
                key={shift.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl flex flex-col items-center gap-4 text-center"
              >
                <shift.icon className="w-10 h-10 text-brand-indigo" />
                <h3 className="text-lg font-medium text-slate-900">{shift.title}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl text-slate-600 leading-relaxed"
          >
            Digital transformation has already happened inside companies—<br/>
            the next challenge is <span className="text-brand-emerald font-bold">trusted interoperability between companies.</span>
          </motion.div>
        </div>
      </section>

      {/* Section 9: Market Opportunity */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Market Opportunity</h2>
            <p className="text-xl text-slate-600 mb-4 font-medium text-brand-indigo">
              A multi-billion-dollar opportunity created by fragmented compliance
            </p>
            <p className="text-lg text-slate-600">
              Regulated industries are becoming increasingly interconnected, yet compliance infrastructure remains fragmented across enterprises. E-Ledger addresses the shared trust layer required for secure data exchange, traceability, and auditability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {/* TAM */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl border-t-4 border-t-slate-800"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">Total Addressable Market (TAM)</h3>
              <p className="text-brand-indigo font-bold text-2xl mb-4">$30B+</p>
              <p className="text-sm font-medium text-slate-700 mb-4">Global Compliance, GRC, Supply Chain & Integration Software</p>
              <p className="text-sm text-slate-600 mb-6">Organizations worldwide are investing heavily in digital transformation, but cross-enterprise compliance infrastructure remains underdeveloped.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-400" /> Pharmaceutical</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-400" /> Medical Devices</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-400" /> Chemicals & Food</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-400" /> Advanced Manufacturing</li>
              </ul>
            </motion.div>

            {/* SAM */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-8 rounded-2xl border-t-4 border-t-brand-indigo"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">Serviceable Available Market (SAM)</h3>
              <p className="text-brand-indigo font-bold text-2xl mb-4">$2–3B</p>
              <p className="text-sm font-medium text-slate-700 mb-4">Indian Pharmaceutical Supply Chain</p>
              <p className="text-sm text-slate-600 mb-6">Target customers:</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-indigo/60" /> Pharma Manufacturers</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-indigo/60" /> Contract Manufacturers (CDMOs)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-indigo/60" /> API Manufacturers</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-indigo/60" /> Pharma Distributors</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-indigo/60" /> 3PL & Testing Labs</li>
              </ul>
            </motion.div>

            {/* SOM */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-8 rounded-2xl border-t-4 border-t-brand-emerald"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">Serviceable Obtainable Market (SOM)</h3>
              <p className="text-brand-emerald font-bold text-2xl mb-4">100–250</p>
              <p className="text-sm font-medium text-slate-700 mb-4">Enterprise Customers (First 5 Years)</p>
              <p className="text-sm text-slate-600 mb-6">Focus on Small & Mid-sized Pharma Manufacturers and Compliance-first Organizations.</p>
              <p className="text-sm font-medium text-slate-700 mb-2">Revenue through:</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-emerald/60" /> Annual SaaS Subscription</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-emerald/60" /> Implementation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-emerald/60" /> Enterprise Integrations</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-emerald/60" /> Premium Support</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Scroll Animation Section */}
      <section ref={containerRef} className="h-[400vh] bg-slate-900 relative">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          
          <motion.div 
            style={{ scale }}
            className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
          >
            <div className="w-[800px] h-[800px] rounded-full border border-slate-500 border-dashed animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[600px] h-[600px] rounded-full border border-slate-600 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute w-[400px] h-[400px] rounded-full border border-brand-indigo border-dashed animate-[spin_30s_linear_infinite]" />
          </motion.div>

          <div className="relative z-10 w-full h-full max-w-4xl mx-auto px-6 text-center">
            
            <motion.div style={{ opacity: opacity1, scale: scale1, display: display1 }} className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl md:text-6xl mb-6">🌍</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">GLOBAL REGULATED INDUSTRIES</h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">The broadest scope of worldwide compliance requirements across all sectors.</p>
              <ChevronDown className="w-8 h-8 text-slate-500 mt-8 md:mt-12 animate-bounce mx-auto" />
            </motion.div>

            <motion.div style={{ opacity: opacity2, scale: scale2, display: display2 }} className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl md:text-6xl mb-6">🏭</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Enterprise Compliance Software</h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">Internal systems managing risk, governance, and audit trails within single organizations.</p>
              <ChevronDown className="w-8 h-8 text-slate-500 mt-8 md:mt-12 animate-bounce mx-auto" />
            </motion.div>

            <motion.div style={{ opacity: opacity3, scale: scale3, display: display3 }} className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl md:text-6xl mb-6">🔗</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-indigo mb-4">Regulated Supply Chains</h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">The cross-enterprise trust layer where compliance data moves between stakeholders.</p>
              <ChevronDown className="w-8 h-8 text-slate-500 mt-8 md:mt-12 animate-bounce mx-auto" />
            </motion.div>

            <motion.div style={{ opacity: opacity4, scale: scale4, display: display4 }} className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl md:text-6xl mb-6">💊</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Indian Pharmaceutical Market</h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">Our strategic beachhead market with high regulatory pressure and global reach.</p>
              <ChevronDown className="w-8 h-8 text-slate-500 mt-8 md:mt-12 animate-bounce mx-auto" />
            </motion.div>

            <motion.div style={{ opacity: opacity5, scale: scale5, display: display5 }} className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl md:text-6xl mb-6">👨‍💼</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-emerald mb-4">Initial Enterprise Customers</h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">100–250 small & mid-sized pharma manufacturers and compliance-first organizations.</p>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}

