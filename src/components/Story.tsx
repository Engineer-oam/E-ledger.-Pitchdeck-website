import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { FileText, Grid, CheckCircle, Clock, Search, AlertTriangle, Link2 } from 'lucide-react';

export function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const participants = [
    "Manufacturers", "Suppliers", "Testing laboratories", "Transporters", 
    "Warehouses", "Distributors", "Hospitals", "Regulators"
  ];

  const painPoints = [
    { title: "Long audit preparation", icon: Clock },
    { title: "Manual reconciliation", icon: Search },
    { title: "Slow investigations", icon: Search },
    { title: "Limited traceability", icon: Link2 },
    { title: "Higher compliance risk", icon: AlertTriangle },
  ];

  return (
    <div ref={containerRef} className="relative">
      {/* Section 1: The Story */}
      <section className="min-h-screen flex items-center py-32 px-6">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              Every regulated product <br/>
              <span className="text-brand-indigo">tells a story.</span>
            </h2>
            <p className="text-xl text-slate-500">A medicine doesn't move through one company.</p>
            <p className="text-xl text-slate-500">It moves through...</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {participants.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-4 rounded-xl text-center text-sm font-medium text-slate-700"
              >
                {p}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-2 text-xl"
          >
            <p className="text-slate-600">Every participant generates compliance data.</p>
            <p className="text-brand-emerald font-semibold">Every participant stores it differently.</p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Fragmentation */}
      <section className="min-h-screen flex items-center py-32 px-6 bg-slate-100/50">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
            The problem isn't digitization.<br/>
            <span className="text-red-500">It's fragmentation.</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
            Pharmaceutical companies have invested heavily in ERP systems, serialization, and digital transformation. Yet the moment compliance information moves between organizations, trust becomes fragmented.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['Excel sheets', 'PDFs', 'Emails', 'Manual approvals', 'Phone calls'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full text-slate-700 shadow-sm"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                {item}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-8 glass-panel rounded-2xl inline-block"
          >
            <p className="text-xl text-slate-600">Instead of one trusted compliance record,</p>
            <p className="text-2xl font-bold text-slate-900 mt-2">there are many versions of the truth.</p>
          </motion.div>
        </div>
      </section>

      {/* Section 3 & 4: Why does this matter? & ERP Islands */}
      <section className="min-h-screen flex items-center py-32 px-6">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why does this matter?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Because fragmented compliance creates real operational costs. Every organization spends time proving what already happened.
            </p>
            
            <div className="space-y-4">
              {painPoints.map((pt, i) => (
                <motion.div
                  key={pt.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 glass-panel rounded-xl cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <pt.icon className="w-6 h-6 text-brand-emerald" />
                  <span className="text-lg text-slate-800">{pt.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <h3 className="text-2xl font-display font-bold mb-6">Existing software solved the wrong problem.</h3>
            <div className="grid grid-cols-2 gap-4">
              {['SAP', 'Oracle', 'Dynamics', 'Tally'].map((erp, i) => (
                <motion.div
                  key={erp}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border border-slate-200 shadow-sm p-6 rounded-xl flex flex-col items-center justify-center gap-3"
                >
                  <Grid className="w-8 h-8 text-slate-400" />
                  <span className="font-medium text-slate-700">{erp}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 p-6 glass-panel border-brand-indigo/30 rounded-xl"
            >
              <p className="text-slate-600 text-center">
                All excellent at running <span className="font-bold text-slate-900">one enterprise.</span><br/>
                None were designed to create <span className="font-bold text-brand-indigo">shared trust</span> between enterprises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
