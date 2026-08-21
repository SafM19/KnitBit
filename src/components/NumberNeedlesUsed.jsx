function NumberNeedlesUsed({ numberNeedlesUsed, setNumberNeedlesUsed }) {
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

      <select
        value={numberNeedlesUsed}
        onChange={(e) => setNumberNeedlesUsed(Number(e.target.value))}
        >
        <option value={0}>Select needles</option>
        <option value={4}>4 needles</option>
        <option value={5}>5 needles</option>
        </select>

    </div>
  );
}

export default NumberNeedlesUsed;