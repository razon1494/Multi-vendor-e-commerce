import { useState } from "react";
import { TheLayout } from "./views/pages/TheLayout";

function App() {
  const [state, setState] = useState();
  const a = 9;
  return (
    <div>
      <TheLayout />
    </div>
  );
}

export default App;
