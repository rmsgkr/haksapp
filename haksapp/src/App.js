import { BrowserRouter } from "react-router-dom";
import "./App.css";
import GateKeeper from "./layout/GateKeeper";
function App() {
  return (
    <BrowserRouter>
      <GateKeeper />
    </BrowserRouter>
  );
}

export default App;
