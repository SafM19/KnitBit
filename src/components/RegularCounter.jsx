import { useState, useEffect } from "react";

function RegularCounter() {
  const [rowCount, setRowCount] = useState(0);

  function handleSpace(event) {
    if (event.code !== "Space" || event.repeat) return;
    event.preventDefault();
    setRowCount((r) => r + 1);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleSpace);
    return () => window.removeEventListener("keydown", handleSpace);
  }, []);

  return (
    <div className="regular-counter">
      <h2>Row Count</h2>

      <div className="row-display">{rowCount}</div>

      <button
        className="increment-button"
        onClick={() => setRowCount((r) => r + 1)}
      >
        +1 Row
      </button>
    </div>
  );
}

export default RegularCounter;
