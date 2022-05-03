import Task from "./Task";

const colors: any = {
  todo: "secondary",
  inprogress: "warning",
  done: "success",
};

const TaskList = ({ list = [], title, category }: any) => {
  return (
    <div className="mt-4">
      <h5
        className={`"mt-4 border-bottom pb-2 border-${colors[category]} text-secondary"`}
      >
        {title}
      </h5>
      {list.map((task: any) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
