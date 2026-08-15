import { useState } from "react";
import NewProjectModal from "../components/NewProjectModal";
import SavedProjectsModal from "../components/SavedProjectsModal";

import "./MainPage.css";

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSavedProjectsOpen, setIsSavedProjectsOpen] = useState(false);

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

  return (
    <main className="main-page">
      <header className="main-header">
      <img
        src="/knitbit-logo.png"
        alt="KnitBit"
        className="logo"
      />
      <h2>The Knitness Tracker</h2>
    </header>
      <button
        className="new-project-button"
        onClick={openModal}
      >
        <img
          src="/public/new-project.png"
          alt=""
          className="new-project-icon"
        />
      </button>

      <button
        className="saved-projects-button"
        onClick={openSavedProjects}
      >
        <img
          src="/public/saved-projects.png"
          alt=""
          className="saved-projects-icon"
        />
      </button>

       {isModalOpen && (
          <NewProjectModal
            onClose={closeModal}
          />
        )}

        {isSavedProjectsOpen && (
          <SavedProjectsModal
            onClose={closeSavedProjects}
          />
        )}
    </main>
  );
}

export default MainPage;