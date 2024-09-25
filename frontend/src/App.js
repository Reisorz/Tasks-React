import { BrowserRouter, Route, Routes } from "react-router-dom";
import TasksList from "./tasks/TasksList";
import Navbar from "./templates/Navbar";
import AddTask from "./tasks/AddTask";
import EditTask from "./tasks/EditTask";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<TasksList/>}/>
          <Route exact path="/add-task" element={<AddTask/>}/>
          <Route exact path="/edit-task/:id" element={<EditTask/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
