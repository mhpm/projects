import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { setTask, updateTaskListStartAsync } from "redux/task-manager/taskActions";
import { useDispatch, useSelector } from "react-redux";
import { selectTaskData } from "redux/task-manager/taskSelectors";

const CardStyled: any = styled.div`
  border-radius: 10px;

  ${(props: any) =>
    props.priority &&
    css`
      border-left: 4px solid ${props.theme[props.priority]};
    `};
`;

const Btn: any = styled.span`
  color: white;
  ${(props: any) =>
    props.priority &&
    css`
      background-color: ${props.priority} !important;
    `};
`;

const BtnEdit = styled.div`
  position: absolute;
  top: 5px;
  right: 32px;
  color: gray;
`;

const BtnDelete = styled.div`
  position: absolute;
  top: 5px;
  right: 7px;
  color: gray;
`;

const Task = ({ task }: any) => {
  const dispatch = useDispatch();
  const { taskList } = useSelector(selectTaskData);

  const hanleDelete = () => {
    let tempData = { ...taskList };
    let list = taskList[task.category].filter((el: any) => el.id !== task.id);

    tempData[task.category] = list;
    dispatch(updateTaskListStartAsync(tempData));
  };

  return (
    <CardStyled
      draggable
      onTouchStart={() => dispatch(setTask(task))}
      onDragStart={() => dispatch(setTask(task))}
      className="card mt-3 shadow-sm"
      priority={task.priority}
    >
      <div className="card-body">
        <div className="row">
          <div className="col-10">
            <h6 className="card-title font-weight-bolder text-dark">
              {task.title}
            </h6>
          </div>
          <div className="col-2"></div>
        </div>
        <Link to={"/task-manager/edit/" + task.id}>
          <BtnEdit onClick={() => dispatch(setTask(task))} className="btn float-right">
            <i className="fas fa-edit"></i>
          </BtnEdit>
        </Link>
        <BtnDelete onClick={hanleDelete} className="btn float-right">
          <i className="fas fa-trash"></i>
        </BtnDelete>

        <p className="card-text text-muted">{task.description}</p>
        <Btn className="badge float-right" priority={task.priority}>
          {task.priority}
        </Btn>
      </div>
    </CardStyled>
  );
};

export default Task;
