export const metadata = {
  title: 'Online Therapy for Anxiety, Depression & Trauma | CBT Across the UK',
  description: 'Evidence-based online therapy for anxiety, depression, trauma-related symptoms, OCD, stress and emotional overwhelm. Online CBT and counselling for adults across the UK.'
}

export default function HomePage() {
  return (
    <main className="bg-[#F4EFEA] text-[#1C2A3A]">
      <section className="bg-[#C46A4A] text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="max-w-4xl text-5xl font-bold leading-tight">Evidence-Based Online Therapy for Anxiety, Depression, Trauma & Everyday Struggles</h1>
          <p className="mt-6 max-w-2xl text-xl text-orange-50">Warm, practical support delivered online across the UK.</p>
          <div className="mt-8 flex gap-4">
            <a href="/contact" className="rounded-full bg-white px-6 py-3 font-semibold text-[#1C2A3A]">Book a Session</a>
            <a href="/services" className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white">Explore Services</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Support for a Wide Range of Difficulties</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {['Anxiety, worry and overthinking', 'Depression and low mood', 'Trauma-related symptoms', 'OCD and intrusive thoughts', 'Burnout, stress and emotional overwhelm', 'Relationship patterns and attachment difficulties', 'Low self-esteem and identity struggles', 'Neurodiversity-related challenges'].map((item) => (
            <div key={item} className="rounded-2xl bg-white p-5 shadow-sm">{item}</div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold">Collaborative, Structured, Evidence-Based</h2>
          <p className="mt-6 text-lg text-slate-700">Our approach includes CBT, trauma-informed practice, behavioural activation, emotional regulation skills, compassion-focused approaches, neurodiversity-affirming frameworks and brief psychodynamic counselling.</p>
          <p className="mt-4 text-lg text-slate-700">You will never be rushed or judged. We work together to understand what is happening beneath the surface and build tools that genuinely help.</p>
        </div>
      </section>

      <section className="bg-[#1C2A3A] px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Start Your Therapy Journey</h2>
        <p className="mt-4">Online therapy for adults across the UK.</p>
        <a href="/contact" className="mt-6 inline-block rounded-full bg-[#C46A4A] px-6 py-3 font-semibold text-white">Book a Session</a>
      </section>
    </main>
  )
}
