import { useEffect, useState } from "react";
import { useReward } from "partycles";

import NumberNeedlesUsed from "./NumberNeedlesUsed";
import TargetRow from "./TargetRow";

import "../style/DpnCounter.css";

function DpnCounter() {
  const [needleCount, setNeedleCount] = useState(0);
  const [rowCount, setRowCount] = useState(0);
  const [numberNeedlesUsed, setNumberNeedlesUsed] = useState(0);
  const [targetRow, setTargetRow] = useState(0);

  const { reward } = useReward("achievement", "stars", {
    particleCount: 35,
    spread: 120,
    startVelocity: 20,
    lifetime: 200,
    effects: {},
  });

  // SPACEBAR LOGIC
  useEffect(() => {
    function handleKeyDown(event) {
      if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "SELECT"
      ) return;

      if (event.code !== "Space" || event.repeat) return;

      event.preventDefault();

      if (numberNeedlesUsed === 0) return;

      const lastNeedle = numberNeedlesUsed - 2;

      if (needleCount === lastNeedle) {
        setNeedleCount(0);
        setRowCount((r) => r + 1);
      } else {
        setNeedleCount((n) => n + 1);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [numberNeedlesUsed, needleCount]);

  // REWARD LOGIC
  useEffect(() => {
    if (targetRow > 0 && rowCount === targetRow) reward();
  }, [rowCount, targetRow]);

  return (
    <div className="dpn-page">
      {/* Dropdown */}
      <div className="dpn-select-wrapper">
        <label>Number of Needles</label>
        <NumberNeedlesUsed
          numberNeedlesUsed={numberNeedlesUsed}
          setNumberNeedlesUsed={setNumberNeedlesUsed}
        />
      </div>

      {/* 3-box layout */}
      <div className="dpn-grid">

        <div className="dpn-box">
          <h2>Needle</h2>
          <div className="dpn-value">{needleCount}</div>
        </div>

        <div className="dpn-box">
          <h2>Row</h2>
          <div className="dpn-value">{rowCount}</div>
        </div>

        <div className="dpn-box">
          <TargetRow
            targetRow={targetRow}
            setTargetRow={setTargetRow}
          />
        </div>

      </div>

      <div id="achievement"></div>
    </div>
  );
}

export default DpnCounter;
