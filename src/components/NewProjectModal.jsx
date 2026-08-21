import { useState } from "react";

function NewProjectModal({ onClose, onCreate }) {
  const [projectName, setProjectName] = useState("");
  const [counterType, setCounterType] = useState("");

  function handleChange(event) {
    setCounterType(event.target.value);
  }

  function handleCreate() {
    if (!projectName.trim() || !counterType) {
      return;
    }

    const newProject = {
      id: Date.now(),
      name: projectName,
      counterType: counterType,
      currentRow: 0,
    };

    onCreate(newProject);
    onClose();
  }

  return (
    <div className="modal-overlay">
      <div className="new-project-modal">

        <input
          className="project-name-input"
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(event) => setProjectName(event.target.value)}
        />

        <div className="counter-type">
          <select
            value={counterType}
            onChange={handleChange}
          >
            <option value="" disabled>
              Project Type
            </option>

            <option value="dpn">DPNs</option>
            <option value="regular">Regular</option>
          </select>
        </div>

        <div className="modal-actions">
          <button onClick={onClose}>
            Cancel
          </button>

          <button onClick={handleCreate}>
            Create
          </button>
        </div>

      </div>
    </div>
  );
}

export default NewProjectModal;