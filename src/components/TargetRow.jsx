function TargetRow({ targetRow, setTargetRow }) {
  function increaseTarget() {
    setTargetRow((currentTarget) =>
      Math.min(currentTarget + 1, 100)
    );
  }

  function decreaseTarget() {
    setTargetRow((currentTarget) =>
      Math.max(currentTarget - 1, 0)
    );
  }

  return (
    <div className="counter-content">
      <h2>Target</h2>

      <div className="target-controls">
        <button onClick={decreaseTarget}>◀</button>

        <p>{targetRow}</p>

        <button onClick={increaseTarget}>▶</button>
      </div>
    </div>
  );
}

export default TargetRow;