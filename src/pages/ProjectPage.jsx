import DpnCounter from "../components/DpnCounter";
import RegularCounter from "../components/RegularCounter";

function ProjectPage({ project, onClose }) {
  return (
    <div className="project-page">
      <header className="project-header">
        <h2>{project.name}</h2>
      </header>

      {project.counterType === "dpn" ? (
        <DpnCounter />
      ) : (
        <RegularCounter />
      )}

      <button className="back-button" onClick={onClose}>
        Back
      </button>
    </div>
  );
}

export default ProjectPage;
