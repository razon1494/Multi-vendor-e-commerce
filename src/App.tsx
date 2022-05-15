import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { TheLayout } from "./views/pages/TheLayout";

function App() {
  const [state, setState] = useState();
  console.log(process.env.REACT_APP_API_BASE_URL);
  console.log("hi", process.env.REACT_APP_API_BASE_URL);

  return (
    <div>
      <BrowserRouter>
        <TheLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
