import { motion } from 'motion/react';
import { Globe, Shield, Cpu, Target, CheckCircle2 } from 'lucide-react';

export function Market() {
  const shifts = [
    { title: "Increasing regulation", icon: Shield },
    { title: "Global supply chains", icon: Globe },
    { title: "Enterprise digitization", icon: Cpu }
  ];

  return (
    <div className="relative">
      {/* Section 8: Why Now? */}
      <section className="min-h-screen flex items-center py-32 px-6">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Why Now?</h2>
          <p className="text-xl text-slate-600 mb-16">Three structural shifts are converging.</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {shifts.map((shift, i) => (
              <motion.div
                key={shift.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl flex flex-col items-center gap-4"
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
            className="text-2xl text-slate-400"
          >
            Organizations already digitized internally.<br/>
            The next decade belongs to <span className="text-brand-emerald font-bold">shared infrastructure.</span>
          </motion.div>
        </div>
      </section>

      {/* Section 9: Market Opportunity */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Market Opportunity</h2>
            <p className="text-slate-400">Targeting the most critical regulated segments first.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl border-t-brand-indigo"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-brand-indigo w-6 h-6" />
                <h3 className="text-2xl font-bold text-slate-900">Initial Market</h3>
              </div>
              <p className="text-xl text-brand-indigo mb-6">Indian Pharmaceutical Industry</p>
              
              <ul className="space-y-4">
                {['Manufacturers', 'Distributors', 'Laboratories', 'Logistics'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl border-t-brand-emerald"
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-brand-emerald w-6 h-6" />
                <h3 className="text-2xl font-bold text-slate-900">Expansion Strategy</h3>
              </div>
              <p className="text-xl text-brand-emerald mb-6">Cross-Industry Adoption</p>
              
              <ul className="space-y-4">
                {['Medical Devices', 'Chemicals', 'Food & Beverage', 'Agriculture', 'Advanced Manufacturing'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center max-w-2xl mx-auto"
          >
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <span className="text-sm uppercase tracking-widest text-slate-400">TAM Evolution</span>
              <div className="glass-panel w-full p-4 rounded-lg my-2 border-slate-300">Global Regulated Industries</div>
              <div className="w-0.5 h-6 bg-slate-300" />
              <div className="glass-panel w-full max-w-md p-4 rounded-lg my-2 border-slate-200">Compliance Software</div>
              <div className="w-0.5 h-6 bg-slate-300" />
              <div className="glass-panel w-full max-w-sm p-4 rounded-lg my-2 border-brand-indigo/30 text-brand-indigo">Cross-enterprise Infrastructure</div>
              <div className="w-0.5 h-6 bg-brand-indigo/50" />
              <div className="glass-panel w-full max-w-xs p-4 rounded-lg my-2 border-brand-emerald/50 text-brand-emerald font-bold">Initial Pharmaceutical Wedge</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
