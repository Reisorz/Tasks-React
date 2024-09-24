import { BrowserRouter, Route, Routes } from "react-router-dom";
import TasksList from "./tasks/TasksList";
import Navbar from "./templates/Navbar";
import AddTask from "./tasks/AddTask";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<TasksList/>}/>
          <Route exact path="/add-task" element={<AddTask/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
