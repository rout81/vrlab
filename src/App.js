import "./App.css";
import Middle from "./components/middle/middle";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <Middle />
    </div>
  );
}

export default App;
