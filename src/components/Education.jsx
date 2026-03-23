export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 bg-slate-950 px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
            Education
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Academic Background
          </h2>
        </div>

        <div className="mx-auto max-w-2xl space-y-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-100">B.Tech CSE</h3>
                <p className="mt-1 text-sm text-slate-300">
                  Lovely Professional University
                </p>
              </div>
              <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300 ring-1 ring-indigo-500/40">
                2023–Present
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300">
              <span className="font-medium">CGPA:</span> 7.1
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-100">Intermediate</h3>
                <p className="mt-1 text-sm text-slate-300">
                  Nagbani Higher Secondary Public School
                </p>
              </div>
              <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300 ring-1 ring-indigo-500/40">
                2021–2022
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300">
              <span className="font-medium">Score:</span> 83%
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-100">Matriculation</h3>
                <p className="mt-1 text-sm text-slate-300">
                  Army Public School Damana
                </p>
              </div>
              <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300 ring-1 ring-indigo-500/40">
                2019–2020
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300">
              <span className="font-medium">Score:</span> 88%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
