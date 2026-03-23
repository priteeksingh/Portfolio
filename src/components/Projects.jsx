import alumniImg from '../assets/images/projects/alumni.png';
import marketingImg from '../assets/images/projects/marketing.svg';
import affirmationImg from '../assets/images/projects/affirmation.svg';
import cpuImg from '../assets/images/projects/cpu.svg';

const allProjects = [
  {
    id: 1,
    title: 'CPU Scheduling Simulator',
    short: 'OS scheduling visualization',
    description:
      'A comprehensive CPU scheduling algorithm visualizer supporting FCFS, SJF, Round Robin, and Priority Scheduling with interactive animations and performance metrics.',
    tech: ['Python', 'Tkinter', 'Matplotlib', 'NumPy'],
    type: 'backend',
    github: 'https://github.com/priestofK-OS/CPU-scheduling-simulator-repo',
    image: cpuImg,
    demo: null,
  },
  {
    id: 2,
    title: 'Rainfall Analysis',
    short: 'IMD data analysis & EDA',
    description:
      'Exploratory Data Analysis on Indian Meteorological Department rainfall dataset with statistical insights, trends visualization, and predictive patterns using pandas and matplotlib.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    type: 'backend',
    github: 'https://github.com/priteeksingh/-Exploring-India-s-Rainfall-Trends-Using-Python-Real-IMD-Data-',
    image: affirmationImg,
    demo: null,
  },
  {
    id: 3,
    title: 'Breast Cancer Prediction',
    short: 'ML classification model',
    description:
      'Machine learning classification model trained on breast cancer dataset using Logistic Regression, Support Vector Machines (SVM), and K-Nearest Neighbors with model comparison and accuracy metrics.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy'],
    type: 'backend',
    github: 'https://github.com/priteeksingh/Breast-Cancer-Prediction',
    image: marketingImg,
    demo: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-slate-950/70 px-4 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
            Projects
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Featured Projects
          </h2>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />

          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-track-slate-950 scrollbar-thumb-slate-700/80">
            {allProjects.map((project) => (
              <article
                key={project.id}
                className="group flex min-w-[260px] max-w-xs flex-col snap-start overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm shadow-slate-900/80 transition hover:translate-x-2 hover:-translate-y-1 hover:border-indigo-500/80 hover:shadow-glow"
              >
                <div className="relative h-36 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:translate-x-2"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-medium uppercase tracking-[0.18em] text-slate-200/80">
                        {project.short}
                      </p>
                      <h3 className="truncate text-sm font-semibold text-slate-50">
                        {project.title}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-full bg-slate-950/70 px-2 py-0.5 text-[10px] font-medium text-slate-100 ring-1 ring-slate-700/70">
                      {project.type === 'fullstack'
                        ? 'Full‑Stack'
                        : project.type === 'frontend'
                          ? 'Frontend'
                          : 'Backend'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-3 text-xs text-slate-300">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] font-medium text-sky-300 ring-1 ring-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-100 transition hover:border-indigo-500/80"
                    >
                      GitHub
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 px-3 py-1.5 text-xs font-semibold text-slate-950 transition hover:brightness-110"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-400">
                        Demo soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

