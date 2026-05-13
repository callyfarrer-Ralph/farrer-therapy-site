export const metadata = {
  title: 'Contact | Online Therapy for Adults',
  description: 'Contact our online therapy service for CBT and counselling. Online sessions for adults across the UK.'
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-5xl font-bold text-[#1C2A3A]">Contact</h1>
      <p className="mt-6 text-lg text-slate-700">If you would like to explore starting therapy, you are welcome to get in touch.</p>

      <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
        <div className="space-y-4 text-lg">
          <p><strong>Email:</strong> info@farrertherapy.co.uk</p>
          <p><strong>Phone:</strong> 07599 333106</p>
          <p><strong>Service:</strong> Online therapy for adults across the UK</p>
        </div>
      </div>

      <div className="mt-10 rounded-3xl bg-[#C46A4A] p-8 text-white">
        <h2 className="text-2xl font-semibold">Cally Farrer</h2>
        <p className="mt-3">BABCP-accredited Psychotherapist</p>
        <p>Director of The Farrer Therapy Group</p>
      </div>
    </main>
  )
}
