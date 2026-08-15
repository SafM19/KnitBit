import { useState } from "react";

function NewProjectModal({ onClose }) {
  const [projectName, setProjectName] = useState("");
  const [counterType, setCounterType] = useState("");

  function handleCreate() {
    console.log("Project Name:", projectName);
    console.log("Counter Type:", counterType);
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

        <div className="counter-type-buttons">
          <button
            className={counterType === "dpn" ? "selected" : ""}
            onClick={() => setCounterType("dpn")}
          >
            DPNs
          </button>

          <button
            className={counterType === "regular" ? "selected" : ""}
            onClick={() => setCounterType("regular")}
          >
            Regular
          </button>
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