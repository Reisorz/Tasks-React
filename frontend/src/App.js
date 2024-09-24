import TasksList from "./tasks/TasksList";
import Navbar from "./templates/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar/>
      <TasksList/>
    </div>

  );
}

export default App;
