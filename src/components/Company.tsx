import { motion } from 'motion/react';
import { Lightbulb, Rocket, Users, Milestone, Calendar } from 'lucide-react';

export function Company() {
  const milestones = [
    "Company Incorporated",
    "DPIIT Recognition",
    "Proof of Concept",
    "30+ Industry Conversations",
    "Prototype Validation",
    "Enterprise Outreach",
    "Production MVP"
  ];

  const roadmap = [
    { phase: "Prototype", status: "completed" },
    { phase: "Validation", status: "completed" },
    { phase: "MVP", status: "current" },
    { phase: "Pilot", status: "upcoming" },
    { phase: "Enterprise Deployment", status: "upcoming" },
    { phase: "Multi-industry Expansion", status: "upcoming" }
  ];

  return (
    <div className="relative">
      {/* Section 10: Why We're Building This */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">Why We're Building This</h2>
          <div className="glass-panel p-8 md:p-12 rounded-3xl text-left border-l-4 border-l-brand-indigo">
            <p className="text-xl text-slate-700 mb-6 leading-relaxed">
              Most founders begin with technology. <span className="text-slate-900">We began with questions.</span>
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Before building E-Ledger, we spent months speaking with pharmaceutical professionals across quality, regulatory, and supply chain functions.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              The same pattern emerged repeatedly.
            </p>
            <blockquote className="text-2xl font-display font-bold text-slate-900 mb-8 pl-6 border-l-2 border-brand-emerald">
              Compliance breaks<br/>
              between organizations.
            </blockquote>
            <p className="text-xl font-medium text-brand-emerald">
              That insight became our conviction.
            </p>
          </div>
        </div>
      </section>

      {/* Section 11 & 12: Progress & Roadmap */}
      <section className="py-32 px-6 bg-slate-100/50">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-24">
          
          <div>
            <div className="flex items-center gap-3 mb-10">
              <Milestone className="w-6 h-6 text-brand-indigo" />
              <h2 className="text-3xl font-display font-bold">Progress</h2>
            </div>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              {milestones.map((milestone, i) => (
                <motion.div 
                  key={milestone}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-brand-indigo bg-white text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 glass-panel rounded-xl text-slate-700">
                    {milestone}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-10">
              <Calendar className="w-6 h-6 text-brand-emerald" />
              <h2 className="text-3xl font-display font-bold">Roadmap</h2>
            </div>
            <div className="flex flex-col gap-4">
              {roadmap.map((item, i) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-5 rounded-xl border flex items-center gap-4 ${
                    item.status === 'completed' ? 'bg-slate-100 border-slate-200 text-slate-600' :
                    item.status === 'current' ? 'bg-brand-emerald/10 border-brand-emerald/50 text-brand-emerald font-medium shadow-[0_0_15px_rgba(16,185,129,0.1)]' :
                    'bg-slate-50 border-slate-300 text-slate-500'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full ${
                    item.status === 'completed' ? 'bg-slate-400' :
                    item.status === 'current' ? 'bg-brand-emerald animate-pulse' :
                    'bg-slate-300'
                  }`} />
                  {item.phase}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: Vision */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Lightbulb className="w-12 h-12 text-brand-indigo mx-auto mb-8" />
            <div className="text-xl md:text-3xl text-slate-600 space-y-4 mb-12">
              <p>The internet connected information.</p>
              <p>Cloud connected applications.</p>
              <p className="text-slate-900 font-medium">We're building the infrastructure that connects trust.</p>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Starting with pharmaceutical supply chains. Expanding to every regulated industry where multiple organizations need to prove compliance together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 14: Join Us */}
      <section className="py-32 px-6 bg-gradient-to-t from-brand-indigo/10 to-transparent">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl font-display font-bold mb-12">Join Us</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {['Enterprise partners', 'Industry experts', 'Design collaborators', 'Early adopters'].map((item) => (
              <div key={item} className="p-4 glass-panel rounded-xl text-sm font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>

          <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-16">
            We're looking for investors who believe infrastructure is built through <span className="text-slate-900 font-bold">conviction rather than speed.</span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-brand-indigo hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-medium transition-colors shadow-sm">
              Book a Demo
            </button>
            <button className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium transition-colors shadow-sm">
              View Prototype
            </button>
            <button className="bg-transparent hover:bg-white text-slate-700 px-8 py-4 rounded-full font-medium transition-colors">
              Contact
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
