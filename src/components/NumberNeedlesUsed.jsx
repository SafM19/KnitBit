function NumberNeedlesUsed({ numberNeedlesUsed, setNumberNeedlesUsed }) {
  function handleChange(event) {
    setNumberNeedlesUsed(Number(event.target.value));
  }

  return (
    <div className="number-needles">
      <h2>Number of DPNs</h2>

      <select
        value={numberNeedlesUsed}
        onChange={handleChange}
      >
        <option value="0">select</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}

export default NumberNeedlesUsed;