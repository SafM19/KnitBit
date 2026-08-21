import { useState } from "react";
import NewProjectModal from "../components/NewProjectModal";
import SavedProjectsModal from "../components/SavedProjectsModal";
import ProjectPage from "./ProjectPage";

import "../style/MainPage.css";

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSavedProjectsOpen, setIsSavedProjectsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const [projects, setProjects] = useState([]);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function openSavedProjects() {
    setIsSavedProjectsOpen(true);
  }

  function closeSavedProjects() {
    setIsSavedProjectsOpen(false);
  }

  function openProject(project) {
  setActiveProject(project);
  setIsSavedProjectsOpen(false);
}

  function handleCreateProject(newProject) {
    setProjects((prevProjects) => [
      ...prevProjects,
      newProject,
    ]);
  }

  function handleDeleteProject(projectId) {
  setProjects((prevProjects) =>
    prevProjects.filter(
      (project) => project.id !== projectId
    )
  );
}

function handleRenameProject(projectId, newName) {
  setProjects((prevProjects) =>
    prevProjects.map((project) =>
      project.id === projectId
        ? { ...project, name: newName }
        : project
    )
  );
}

function handleChangeProjectType(projectId, newType) {
  setProjects((prevProjects) =>
    prevProjects.map((project) =>
      project.id === projectId
        ? { ...project, counterType: newType }
        : project
    )
  );
}


  return (
      <main className="main-page">

        {activeProject ? (
          <ProjectPage
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        ) : (
          <>
            <header className="main-header">
              <img
                src="/knitbit-logo.png"
                alt="KnitBit"
                className="logo"
              />
            </header>

            <h2>The Knitness Tracker</h2>

            <div className="options">
              <button
                className="new-project-button"
                onClick={openModal}
              >
                <img src="/new-project.png" alt="" className="new-project-icon" />
              </button>

              <button
                className="saved-projects-button"
                onClick={openSavedProjects}
              >
                <img src="/saved-projects.png" alt="" className="saved-projects-icon" />
              </button>
            </div>

            {isModalOpen && (
              <NewProjectModal
                onClose={closeModal}
                onCreate={handleCreateProject}
              />
            )}

            {isSavedProjectsOpen && (
              <SavedProjectsModal
                onClose={closeSavedProjects}
                projects={projects}
                onDelete={handleDeleteProject}
                onRename={handleRenameProject}
                onChangeType={handleChangeProjectType}
                onOpenProject={openProject}
              />
            )}
          </>
        )}

      </main>
    );

}

export default MainPage;