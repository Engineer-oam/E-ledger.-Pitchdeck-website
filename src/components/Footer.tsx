export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Synthrova Technologies Pvt. Ltd.</h3>
          <p className="text-sm text-brand-emerald">DPIIT Recognized Startup</p>
        </div>
        
        <div className="flex gap-6 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Email</a>
          <a href="#" className="hover:text-slate-900 transition-colors">GitHub</a>
        </div>
        
        <div className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Synthrova Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
