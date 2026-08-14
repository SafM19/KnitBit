function TargetRow({ targetRow, setProject }) {
  function increaseTarget() {
    setProject((currentProject) => ({
      ...currentProject,
      targetRow: Math.min(currentProject.targetRow + 1, 100),
    }));
  }

  function decreaseTarget() {
    setProject((currentProject) => ({
      ...currentProject,
      targetRow: Math.max(currentProject.targetRow - 1, 0),
    }));
  }

  function handleTargetChange(event) {
    const value = event.target.value;

    if (value === "") {
      setProject((currentProject) => ({
        ...currentProject,
        targetRow: "",
      }));
      return;
    }

    const numberValue = Number(value);

    if (numberValue >= 0 && numberValue <= 100) {
      setProject((currentProject) => ({
        ...currentProject,
        targetRow: numberValue,
      }));
    }
  }

  function handleFocus(event) {
    if (targetRow === 0) {
      event.target.select();
    }
  }

  function handleBlur() {
    if (targetRow === "") {
      setProject((currentProject) => ({
        ...currentProject,
        targetRow: 0,
      }));
    }
  }

  return (
    <div className="counter-content">
      <h2>Target</h2>

      <div className="target-controls">
        <button onClick={decreaseTarget}>◀</button>

        <input
          type="number"
          min="0"
          max="100"
          value={targetRow}
          onChange={handleTargetChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <button onClick={increaseTarget}>▶</button>
      </div>
    </div>
  );
}

export default TargetRow;