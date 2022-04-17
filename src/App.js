// import Dashboard from "./components/Dashboard";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body container mt-4">
        <Sidebar />
        {/* dashboard */}
        <Dashboard />
        {/* listing */}
      </div>
    </div>
  );
}

export default App;
