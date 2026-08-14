function NumberNeedlesUsed({
  numberNeedlesUsed,
  setProject,
}) {
  function handleChange(event) {
    const value = Number(event.target.value);

    setProject((currentProject) => ({
      ...currentProject,
      numberNeedlesUsed: value,
      needleCount: 0,
    }));
  }

  return (
    <div className="number-needles">
      <h2>Number of DPNs</h2>

      <select
        value={numberNeedlesUsed}
        onChange={handleChange}
      >
        <option value="0">Select</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}

export default NumberNeedlesUsed;