// import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body container mt-4">
        {/* sidebar */}
        <Sidebar />
        {/* dashboard */}
        {/* listing */}
      </div>
    </div>
  );
}

export default App;
