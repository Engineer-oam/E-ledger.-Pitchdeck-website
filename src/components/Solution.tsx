import { motion } from 'motion/react';
import { Layers, Activity, Lock, Database, Network } from 'lucide-react';

export function Solution() {
  const workflow = [
    "Manufacturer creates batch",
    "Quality release",
    "Laboratory verification",
    "Transport updates",
    "Distributor receives shipment",
    "Regulator audits"
  ];

  const stack = [
    { name: "Analytics", color: "border-purple-500/30" },
    { name: "Blockchain Trust Infrastructure", color: "border-brand-emerald/30", highlight: true },
    { name: "Permission Layer", color: "border-indigo-500/30" },
    { name: "Compliance Rules", color: "border-slate-500/30" },
    { name: "Identity", color: "border-slate-500/30" },
    { name: "API Layer", color: "border-slate-500/30" },
    { name: "ERP", color: "border-slate-300" }
  ];

  return (
    <div className="relative">
      {/* Section 5: Introducing E-Ledger */}
      <section className="min-h-screen flex items-center py-32 px-6 bg-gradient-to-b from-transparent to-brand-indigo/5">
        <div className="max-w-4xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Introducing <span className="text-gradient">E-Ledger</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-700 font-medium">
              E-Ledger is compliance infrastructure.<br/>
              Not another ERP.
            </p>
          </motion.div>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16 leading-relaxed">
            It creates a trusted layer where independent organizations securely exchange compliance data while continuing to use the systems they already rely on.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "One shared source of trust", icon: Network },
              { title: "Multiple organizations", icon: Layers },
              { title: "Zero ERP replacement", icon: Activity }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl flex flex-col items-center gap-4 border-t-brand-indigo/30"
              >
                <div className="w-12 h-12 rounded-full bg-brand-indigo/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-brand-indigo" />
                </div>
                <h3 className="text-lg font-medium text-slate-900">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 & 7: How it Works & Technology */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Workflow */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">How E-Ledger Works</h2>
            <div className="relative border-l border-slate-300/50 ml-4 space-y-8">
              {workflow.map((step, i) => (
                <motion.div 
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-emerald ring-4 ring-white" />
                  <p className="text-lg text-slate-700">{step}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 p-6 glass-panel rounded-xl flex justify-between text-brand-emerald font-medium uppercase tracking-wider text-sm"
            >
              <span>Verifiable</span>
              <span>Immutable</span>
              <span>Shared</span>
              <span>Permissioned</span>
            </motion.div>
          </div>

          {/* Technology Stack */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Technology Stack</h2>
            <div className="flex flex-col-reverse gap-3">
              {stack.map((layer, i) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-4 rounded-xl text-center font-mono text-sm border ${layer.color} ${
                    layer.highlight ? 'bg-brand-emerald/10 text-brand-emerald' : 'bg-slate-100/50 text-slate-600'
                  }`}
                >
                  {layer.name}
                </motion.div>
              ))}
            </div>
            <p className="text-center mt-8 text-slate-600">
              Blockchain isn't the product. <span className="text-slate-900 font-medium">Trust is.</span>
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
