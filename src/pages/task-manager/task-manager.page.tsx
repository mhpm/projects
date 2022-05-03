import { useEffect, useState } from "react"
import TaskList from "./TaskList"
import { useDispatch, useSelector } from "react-redux"
import { updateTaskListStartAsync, setTask } from "redux/task-manager/taskActions"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { ProgressBar } from "components"
import { selectTaskData } from "redux/task-manager/taskSelectors"

const BtnAdd = styled(Link)`
  position: fixed;
  width: 80px;
  height: 80px;
  bottom: 30px;
  right: 30px;
  font-size: 40px;
  font-weight: 500;
`

const TaskManagerComponent = (props: any) => {
  const dispatch = useDispatch()
  const { taskList, task } = useSelector(selectTaskData)

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    getProgress()
  }, [taskList])

  const getProgress = () => {
    const { todo, inprogress, done } = taskList
    let total = todo.length + inprogress.length + done.length
    let average = (done.length / total) * 100
    setProgress(Math.trunc(average))
  }

  const onDropHandler = (e: React.DragEvent<HTMLDivElement>, category: string) => {
    e.preventDefault()

    console.log(task);


    let newData = { ...taskList }
    newData[task.category] = newData[task.category].filter(
      (el: any) => el.id !== task.id
    )

    task.category = category
    newData[category].push(task)
    dispatch(updateTaskListStartAsync(newData))
    dispatch(setTask(null))
  }

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()

  return (
    <div className="p-4">
      <div className="row">
        <div className="col-md text-center">
          <h3>DASHBOARD</h3>
        </div>
      </div>
      <ProgressBar progress={progress} />
      <br />
      <div
        className="row"
        style={{ minHeight: 80 + "vh" }}
        onDragOver={(e) => onDragOver(e)}
      >
        <div className="col-md" onDrop={(e) => onDropHandler(e, "todo")}>
          <TaskList list={taskList.todo} title="TODO" category="todo" />
        </div>
        <div className="col-md" onDrop={(e) => onDropHandler(e, "inprogress")}>
          <TaskList
            list={taskList.inprogress}
            title="IN PROGRESS"
            category="inprogress"
          />
        </div>
        <div className="col-md" onDrop={(e) => onDropHandler(e, "done")}>
          <TaskList list={taskList.done} title="DONE" category="done" />
        </div>
      </div>
      <BtnAdd
        to={"/task-manager/new"}
        onClick={() => dispatch(setTask(null))}
        className="btn btn-info btn-sm rounded-circle shadow pt-2"
      >
        <span>+</span>
      </BtnAdd>
    </div>
  )
}

export default TaskManagerComponent
