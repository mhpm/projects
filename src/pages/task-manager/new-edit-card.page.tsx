import { useState, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskListStartAsync, setTask } from "redux/task-manager/taskActions";
import { Link, useNavigate } from "react-router-dom";
import { selectTaskData } from "redux/task-manager/taskSelectors";

export const NewTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { taskList } = useSelector(selectTaskData);

  const handleNewTask = (e: FormEvent<HTMLFormElement>, info: any) => {
    e.preventDefault()

    let tempData = { ...taskList };
    info.id = Math.random();
    tempData["todo"].push(info);
    dispatch(updateTaskListStartAsync(tempData));
    navigate("/task-manager");
  };

  return <TaskForm handleSubmit={(e: FormEvent<HTMLFormElement>, info: any) => handleNewTask(e, info)
  } />
}

export const EditTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { taskList, task } = useSelector(selectTaskData);

  const handleEditTask = (e: FormEvent<HTMLFormElement>, info: any) => {
    e.preventDefault();

    let tempData = { ...taskList };
    let list = taskList[info.category].filter((el: any) => el.id !== info.id);
    list.push(info);
    tempData[info.category] = list;

    dispatch(updateTaskListStartAsync(tempData));
    dispatch(setTask(null));

    navigate("/task-manager");
  };

  return (
    <TaskForm
      formTitle="EDIT"
      handleSubmit={(e: FormEvent<HTMLFormElement>, info: any) => handleEditTask(e, info)}
      task={task}
    />
  );
};

interface ITask {
  id: number;
  title: string;
  category: string;
  description: string;
  priority: string;
}

const TaskForm = ({ formTitle = 'NEW', handleSubmit, task = null }: any) => {

  const [info, setInfo] = useState({
    id: 0,
    title: "",
    category: 'todo',
    description: "some description",
    priority: "low"
  });

  useEffect(() => {
    if (task !== null)
      setInfo(task)
  }, [task])

  return (
    <div
      className="row m-0 justify-content-center align-items-center"
      style={{ height: 90 + "vh" }}
    >
      <div className="col-sm col-md-7 col-lg-5">
        <form
          onSubmit={(e) => handleSubmit(e, info)}
          className="card p-5 shadow-sm border-0"
        >
          <h3>{`${formTitle} TASK`}</h3><br />
          <div className="mb-3">
            <label>Title</label>
            <input
              className="form-control"
              id="title"
              value={info.title}
              onChange={(e) => setInfo({ ...info, title: e.target.value })}
            />
            {info.title === "" && (
              <small className="form-text text-danger">
                you must provide a title
              </small>
            )}
          </div>
          <div className="mb-3">
            <label>Description</label>
            <textarea
              className="form-control"
              id="description"
              value={info.description}
              onChange={(e) =>
                setInfo({ ...info, description: e.target.value })
              }
            />
            {info.description === "" && (
              <small className="form-text text-danger">
                you must provide a short description
              </small>
            )}
          </div>
          <div className="mb-3">
            <label>Priority</label>
            <select
              value={info.priority}
              onChange={(e) => setInfo({ ...info, priority: e.target.value })}
              className="form-select"
              id="priority"
              required
            >
              <option value="low">
                Low
              </option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
          <button
            disabled={!info.title || !info.description}
            type="submit"
            className="btn btn-primary btn-lg mt-4 rounded-pill"
          >
            Save
          </button>
          <Link className="btn mt-3" to="/task-manager">Cancel</Link>
        </form>
      </div>
    </div>
  );
}
