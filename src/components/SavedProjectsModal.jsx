function SavedProjectsModal({ onClose }) {
  const projects = [
    {
      id: 1,
      name: "Blue Sweater",
      type: "DPNs",
    },
    {
      id: 2,
      name: "Green Socks",
      type: "Regular",
    },
  ];

  return (
    <div className="modal-overlay">
      <div className="saved-projects-modal">
        <h2>Saved Projects</h2>

        <div className="saved-project-list">
          {projects.map((project) => (
            <button
              className="saved-project"
              key={project.id}
            >
              <span>{project.name}</span>
              <span>{project.type}</span>
            </button>
          ))}
        </div>

        <div className="modal-actions">
          <button onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default SavedProjectsModal;