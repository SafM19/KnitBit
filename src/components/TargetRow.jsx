function TargetRow({ targetRow, setTargetRow }) {
  function increaseTarget() {
    setTargetRow((current) => Math.min(current + 1, 100));
  }

  function decreaseTarget() {
    setTargetRow((current) => Math.max(current - 1, 0));
  }

  function handleTargetChange(event) {
    const value = event.target.value;

    // Allow empty input while typing
    if (value === "") {
      setTargetRow("");
      return;
    }

    const numberValue = Number(value);

    if (numberValue >= 0 && numberValue <= 100) {
      setTargetRow(numberValue);
    }
  }

  function handleFocus(event) {
    if (targetRow === 0) {
      event.target.select();
    }
  }

  function handleBlur() {
    if (targetRow === "") {
      setTargetRow(0);
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
