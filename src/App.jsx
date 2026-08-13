import { useState } from "react";

import NeedleCount from "./components/NeedleCount";
import RowCount from "./components/rowCount";
import NumberNeedlesUsed from "./components/NumberNeedlesUsed";
import TargetRow from "./components/TargetRow";
import Instructions from "./components/instructions";

function App() {
  const [needleCount, setNeedleCount] = useState(0);
  const [rowCount, setRowCount] = useState(0);
  const [numberNeedlesUsed, setNumberNeedlesUsed] = useState(0);
  const [targetRow, setTargetRow] = useState(0);

  return (
    <div>
      <Instructions />
      <NumberNeedlesUsed
        numberNeedlesUsed={numberNeedlesUsed}
        setNumberNeedlesUsed={setNumberNeedlesUsed}
      />
      <NeedleCount needleCount={needleCount} />
      <RowCount rowCount={rowCount} />
      <TargetRow
        targetRow={targetRow}
        setTargetRow={setTargetRow}
      />
    </div>
  );
}

export default App;