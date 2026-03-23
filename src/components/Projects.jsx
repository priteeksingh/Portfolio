function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-container">

        <div className="card">
          <img src="/images/cpu.png" />
          <h3>CPU Scheduling Simulator</h3>
          <p>FCFS, SJF, RR & Priority Scheduling visualization</p>
          <a href="https://github.com/priestofK-OS/CPU-scheduling-simulator-repo">GitHub</a>
        </div>

        <div className="card">
          <img src="/images/rainfall.png" />
          <h3>Rainfall Analysis</h3>
          <p>IMD dataset analysis with EDA & visualization</p>
          <a href="https://github.com/priteeksingh/-Exploring-India-s-Rainfall-Trends-Using-Python-Real-IMD-Data-">GitHub</a>
        </div>

        <div className="card">
          <img src="/images/cancer.png" />
          <h3>Breast Cancer Prediction</h3>
          <p>ML model using Logistic Regression, SVM & KNN</p>
          <a href="https://github.com/priteeksingh/Breast-Cancer-Prediction">GitHub</a>
        </div>

      </div>
    </section>
  );
}

export default Projects;