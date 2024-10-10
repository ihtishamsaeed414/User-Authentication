import { Toaster } from "react-hot-toast";
// import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
// import LoadingSpinner from "./components/LoadingSpinner";
import RoutesConfig from "./routes/RoutesConfig";
function App() {
  return (
    <div>
      <Router>
        <RoutesConfig />
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
