const certificates = [
  {
    id: 1,
    name: 'Computational Theory',
    organization: 'Infosys',
    image: '/certificates/cert1.png',
  },
  {
    id: 2,
    name: 'Generative AI Apps',
    organization: 'Infosys',
    image: '/certificates/cert2.png',
  },
  {
    id: 3,
    name: 'ChatGPT Prompt Engineering',
    organization: 'Infosys',
    image: '/certificates/cert3.png',
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="scroll-mt-24 bg-slate-950/70 px-4 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
            Certificates
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Professional Certifications
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
            Certificates earned from industry-leading organizations
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-sm shadow-slate-900/70 transition hover:border-indigo-500/60 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-100">{cert.name}</h3>
                <p className="mt-1 text-xs text-slate-400">{cert.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

