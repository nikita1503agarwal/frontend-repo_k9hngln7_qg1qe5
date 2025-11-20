import Hero from '../components/Hero';
import { Section } from '../components/Sections';

export default function PublicPages(){
  return (
    <>
      <Hero/>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section id="services" title="Services">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["SaaS Development","Mobile Apps","Cloud & DevOps","UI/UX Design","Data & AI","Integrations"].map((s,i)=> (
              <div key={s} className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:shadow-lg transition">
                <div className="font-semibold">{s}</div>
                <p className="mt-2 text-sm opacity-70">Premium, scalable solutions tailored to your business.</p>
                <button className="mt-4 text-blue-600 hover:underline">Order</button>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({length:6}).map((_,i)=> (
              <div key={i} className="group p-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:shadow-lg transition">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900/40 dark:to-purple-900/40"/>
                <div className="p-3">
                  <div className="font-semibold">Project {i+1}</div>
                  <p className="text-sm opacity-70">Outcome-focused delivery with clean, modern UX.</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="about" title="About Us">
          <p className="text-black/70 dark:text-white/70 max-w-3xl">SomDev Solutions builds trustworthy, premium-grade software products with a simple, fast workflow. We value clarity, reliability, and measurable outcomes.</p>
        </Section>

        <Section id="values" title="Core Values">
          <ul className="list-disc pl-6 space-y-2 text-black/70 dark:text-white/70">
            <li>Quality over noise</li>
            <li>Security-first by default</li>
            <li>Transparent pricing and process</li>
            <li>Continuous improvement</li>
          </ul>
        </Section>

        <Section id="partners" title="Partnerships">
          <div className="flex gap-6 opacity-70">
            {['Acme','Globex','Umbrella','Innotech'].map(b => (<div key={b} className="text-sm">{b}</div>))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We\'ll be in touch.')}} className="max-w-xl space-y-3">
            <input required placeholder="Name" className="w-full h-11 px-3 rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5"/>
            <input required type="email" placeholder="Email" className="w-full h-11 px-3 rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5"/>
            <textarea required placeholder="Message" className="w-full h-28 px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5"/>
            <button className="h-11 px-5 rounded-lg bg-blue-600 text-white">Send</button>
          </form>
        </Section>
      </main>
    </>
  );
}
