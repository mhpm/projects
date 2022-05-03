import { EditTask, NewTask } from "pages/task-manager/new-edit-card.page";
import TaskManagerPage from "pages/task-manager/task-manager.page";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">

      <Routes>
        <Route path="task-manager" element={<TaskManagerPage />} />
        <Route path="task-manager/edit/:id" element={<EditTask />} />
        <Route path="task-manager/new" element={<NewTask />} />
      </Routes>
    </div>
  );
}

export default App;
