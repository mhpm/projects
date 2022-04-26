import { useState, useEffect, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDataStartAsync, setCard } from "redux/task-manager/taskActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selectTaskData } from "redux/task-manager/taskSelectors";

const EditCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, card } = useSelector(selectTaskData);
  const { id } = useParams();

  const [info, setInfo] = useState({
    id: 0,
    title: "",
    description: "",
    priority: "low",
    category: "todo",
  });

  useEffect(() => {
    if (card !== null) setInfo(card);
  }, [card]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (id === "new") {
      handleAddCard();
      return;
    }

    let tempData = { ...data };
    let List = data[info.category].filter((el: any) => el.id !== info.id);
    List.push(info);
    tempData[info.category] = List;

    dispatch(updateDataStartAsync(tempData));
    dispatch(setCard(null));

    navigate("/task-manager");
  };

  const handleAddCard = () => {
    let tempData = { ...data };
    info.id = Math.random();
    tempData["todo"].push(info);
    dispatch(updateDataStartAsync(tempData));
    navigate("/task-manager");
  };

  const getTitle = () => {
    let title = id ? "EDIT" : "NEW";
    return <h3 className="text-center"> {title} CARD</h3>;
  }

  return (
    <div>
      <div
        className="row m-0 justify-content-center align-items-center"
        style={{ height: 90 + "vh" }}
      >
        <div className="col-sm col-md-7 col-lg-5">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="card p-5 shadow-sm border-0"
          >
            {getTitle()} <br />
            <div className="mb-3">
              <label>Title</label>
              <input
                type="title"
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
                <option selected value="low">
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
    </div>
  );
};

export default EditCard;
