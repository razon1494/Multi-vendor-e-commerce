import { useState } from "react";
import { TheLayout } from "./views/pages/TheLayout";

function App() {
  const [state, setState] = useState();
  console.log(process.env.REACT_APP_API_BASE_URL);

  return (
    <div>
      <TheLayout />
    </div>
  );
}

export default App;
