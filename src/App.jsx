import { useReward } from 'partycles';

import { useEffect, useState } from "react";

import NeedleCount from "./components/NeedleCount";
import RowCount from "./components/RowCount";
import NumberNeedlesUsed from "./components/NumberNeedlesUsed";
import TargetRow from "./components/TargetRow";
import Instructions from "./components/Instructions";

import "./App.css";



function App() {
  const [needleCount, setNeedleCount] = useState(0);
  const [rowCount, setRowCount] = useState(0);
  const [numberNeedlesUsed, setNumberNeedlesUsed] = useState(0);
  const [targetRow, setTargetRow] = useState(0);

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

      if (numberNeedlesUsed === 0) {
        return;
      }

      const lastNeedle = numberNeedlesUsed - 2;

      if (needleCount === lastNeedle) {
        setNeedleCount(0);
        setRowCount((currentRow) => currentRow + 1);
      } else {
        setNeedleCount((currentNeedle) => currentNeedle + 1);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [numberNeedlesUsed, needleCount]);

  useEffect(() => {
    if (targetRow > 0 && rowCount === targetRow) {
      reward();
    }
  }, [rowCount, targetRow]);

  return (
    <main className="app">
      <header className="header">
        <h1>KnitBit</h1>
        <h2>The Knitness Tracker</h2>
      </header>

      <Instructions />

      <div id="achievement"></div>
     
      <section className="dpn-selector">
        <NumberNeedlesUsed
          numberNeedlesUsed={numberNeedlesUsed}
          setNumberNeedlesUsed={setNumberNeedlesUsed}
        />
      </section>

      <section className="counter-grid">
        <div className="counter-card">
          <NeedleCount needleCount={needleCount} />
        </div>

        <div className="counter-card">
          <RowCount rowCount={rowCount} />
        </div>

        <div className="counter-card">
          <TargetRow
            targetRow={targetRow}
            setTargetRow={setTargetRow}
          />
        </div>
      </section>
    </main>
  );
}

export default App;