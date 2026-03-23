export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-slate-950/60 px-4 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
        <div className="flex-1 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
            About Me
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            B.Tech CSE student passionate about Data Science, Machine Learning, and Software Development.
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            I&apos;m currently pursuing B.Tech in Computer Science and Engineering at
            Lovely Professional University. I enjoy solving real-world problems using
            efficient algorithms and data-driven approaches.
          </p>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            My interests lie in data analysis, machine learning, and system design. I have
            hands-on experience working with Python libraries like Pandas, NumPy, Matplotlib,
            and Scikit-Learn to build practical projects and derive meaningful insights from data.
          </p>
        </div>

        <div className="flex-1">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/60">
              <p className="text-xs font-semibold text-slate-400">University</p>
              <p className="mt-1 text-sm font-medium text-slate-100">
                Lovely Professional University
              </p>
              <p className="mt-1 text-xs text-slate-400">CGPA: 7.1</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/60">
              <p className="text-xs font-semibold text-slate-400">Degree</p>
              <p className="mt-1 text-sm font-medium text-slate-100">
                B.Tech Computer Science & Engineering
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/60">
              <p className="text-xs font-semibold text-slate-400">
                Primary Skills
              </p>
              <p className="mt-1 text-sm font-medium text-slate-100">
                Python, Pandas, NumPy, Scikit-Learn
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/60">
              <p className="text-xs font-semibold text-slate-400">Location</p>
              <p className="mt-1 text-sm font-medium text-slate-100">India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

