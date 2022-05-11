import { Route, Routes } from "react-router-dom";

import { MusicPlayer } from "components";
import { EditTask, NewTask } from "pages/task-manager/new-edit-card.page";
// import { TaskManagerPage, GamePage } from "pages";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MusicPlayer />} />
        <Route path="task-manager/edit/:id" element={<EditTask />} />
        <Route path="task-manager/new" element={<NewTask />} />
      </Routes>
    </div>
  );
}

export default App;
