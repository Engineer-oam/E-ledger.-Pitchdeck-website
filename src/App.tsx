/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Solution } from './components/Solution';
import { Market } from './components/Market';
import { Company } from './components/Company';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen selection:bg-brand-indigo/20">
      <Hero />
      <Story />
      <Market />
      <Solution />
      <Company />
      <Footer />
    </main>
  );
}

