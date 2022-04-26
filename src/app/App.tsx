import EditCard from "pages/task-manager/EditCard";
import TaskManagerComponent from "pages/task-manager/task-manager";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">

      <Routes>
        <Route path="task-manager" element={<TaskManagerComponent />} />
        <Route path="task-manager/edit/:id" element={<EditCard />} />
        <Route path="task-manager/new" element={<EditCard />} />
      </Routes>
    </div>
  );
}

export default App;
