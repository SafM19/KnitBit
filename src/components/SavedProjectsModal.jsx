import { useState } from "react";
import { createPortal } from "react-dom";

function SavedProjectsModal({
  onClose,
  projects,
  onDelete,
  onRename,
  onChangeType,
  onOpenProject,
}) {
  const [openMenu, setOpenMenu] = useState(null);

  const [editingProject, setEditingProject] = useState(null);
  const [editMode, setEditMode] = useState("");

  const [newName, setNewName] = useState("");
  const [newProjectType, setNewProjectType] = useState("");

  // =========================
  // THREE DOT MENU
  // =========================

  function toggleMenu(projectId) {
    setOpenMenu(openMenu === projectId ? null : projectId);
  }

  // =========================
  // RENAME
  // =========================

  function handleRenameClick(project) {
    setOpenMenu(null);
    setEditingProject(project);
    setEditMode("rename");
    setNewName(project.name);
  }

  function saveRename() {
    if (!editingProject) return;

    const trimmedName = newName.trim();
    if (!trimmedName) return;

    onRename(editingProject.id, trimmedName);
    closeEdit();
  }

  // =========================
  // CHANGE PROJECT TYPE
  // =========================

  function handleChangeTypeClick(project) {
    setOpenMenu(null);
    setEditingProject(project);
    setEditMode("type");
    setNewProjectType(project.counterType);
  }

  function saveTypeChange() {
    if (!editingProject) return;
    if (!newProjectType) return;

    onChangeType(editingProject.id, newProjectType);
    closeEdit();
  }

  // =========================
  // DELETE
  // =========================

  function handleDeleteClick(project) {
    setOpenMenu(null);

    const confirmed = window.confirm(
      `Are you sure you want to delete "${project.name}"?`
    );

    if (confirmed) {
      onDelete(project.id);
    }
  }

  // =========================
  // CLOSE EDIT MODAL
  // =========================

  function closeEdit() {
    setEditingProject(null);
    setEditMode("");
    setNewName("");
    setNewProjectType("");
  }

  // =========================
  // PORTAL RENDER HELPERS
  // =========================

  function renderEditModal() {
    if (!editingProject) return null;

    return createPortal(
      <div className="edit-project-overlay">
        <div className="edit-project-modal">
          <h3>
            {editMode === "rename"
              ? "Rename Project"
              : "Project Type"}
          </h3>

          {editMode === "rename" && (
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              autoFocus
            />
          )}

          {editMode === "type" && (
            <select
              value={newProjectType}
              onChange={(e) => setNewProjectType(e.target.value)}
            >
              <option value="dpn">DPNs</option>
              <option value="regular">Regular</option>
            </select>
          )}

          <div className="edit-modal-actions">
            <button onClick={closeEdit}>Cancel</button>

            {editMode === "rename" && (
              <button onClick={saveRename}>Save</button>
            )}

            {editMode === "type" && (
              <button onClick={saveTypeChange}>Save</button>
            )}
          </div>
        </div>
      </div>,
      document.body
    );
  }

  return (
    <>
      {/* =========================
          MAIN MODAL OVERLAY
          ========================= */}
      <div className="modal-overlay">
        <div className="saved-projects-modal">
          <h2>Saved Projects</h2>

          <div className="saved-project-list">
            {projects.length === 0 ? (
              <p className="no-projects">No saved projects yet.</p>
            ) : (
              projects.map((project) => (
                <div
                  className="saved-project-wrapper"
                  key={project.id}
                >
                 <button
                    className="saved-project"
                    onClick={() => onOpenProject(project)}
                  >

                    <span>{project.name}</span>
                    <span>
                      {project.counterType === "dpn"
                        ? "DPNs"
                        : "Regular"}
                    </span>
                  </button>

                  <button
                    className="project-menu-button"
                    onClick={() => toggleMenu(project.id)}
                  >
                    ⋮
                  </button>

                  {openMenu === project.id && (
                    <div className="project-menu">
                      <button onClick={() => handleRenameClick(project)}>
                        Rename
                      </button>

                      <button onClick={() => handleChangeTypeClick(project)}>
                        Change Project Type
                      </button>

                      <button
                        className="delete-option"
                        onClick={() => handleDeleteClick(project)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          <div className="modal-actions">
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>

      {/* =========================
          EDIT MODAL PORTAL
          ========================= */}
      {renderEditModal()}
    </>
  );
}

export default SavedProjectsModal;
