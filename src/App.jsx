import { useReward } from 'partycles';

import { useEffect, useState } from "react";

import NeedleCount from "./components/NeedleCount";
import RowCount from "./components/RowCount";
import NumberNeedlesUsed from "./components/NumberNeedlesUsed";
import TargetRow from "./components/TargetRow";
import Instructions from "./components/Instructions";
import Name from './components/ProjectName';

import "./App.css";



function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "My Knitting Project",
      needleCount: 0,
      rowCount: 0,
      numberNeedlesUsed: 0,
      targetRow: 0,
    },
  ]);

  const [activeProjectId, setActiveProjectId] = useState(1);

  const project = projects.find(
    (project) => project.id === activeProjectId
  );

  const { reward } = useReward('achievement', 'stars', {
    particleCount: 35,
    spread: 120,
    startVelocity: 20,
    lifetime: 200,
    effects: {}
  });


  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code !== "Space" || event.repeat) {
        return;
      }

      event.preventDefault();

      if (project.numberNeedlesUsed === 0) {
        return;
      }

      const lastNeedle = project.numberNeedlesUsed - 2;

      if (project.needleCount === lastNeedle) {
        setProject((currentProject) => ({
          ...currentProject,
          needleCount: 0,
          rowCount: currentProject.rowCount + 1,
        }));
      } else {
        setProject((currentProject) => ({
          ...currentProject,
          needleCount: currentProject.needleCount + 1,
        }));
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project.numberNeedlesUsed, project.needleCount]);

  useEffect(() => {
    if (project.targetRow > 0 && project.rowCount === project.targetRow) {
      reward();
    }
  }, [project.rowCount, project.targetRow]);

  return (
    <main className="app">
      <header className="header">
        <h1>KnitBit</h1>
        <h2>The Knitness Tracker</h2>
      </header>

      <Instructions />
      <Name 
        name={project.name}
      />

      <div id="achievement"></div>
     
      <section className="dpn-selector">
        <NumberNeedlesUsed
          numberNeedlesUsed={project.numberNeedlesUsed}
          setProject={setProject}
        />
      </section>

      <section className="counter-grid">
        <div className="counter-card">
          <NeedleCount needleCount={project.needleCount} />
        </div>

        <div className="counter-card">
          <RowCount rowCount={project.rowCount} />
        </div>

        <div className="counter-card">
          <TargetRow
            targetRow={project.targetRow}
            setProject={setProject}
          />
        </div>
      </section>
    </main>
  );
}

export default App;