import { useEffect, useState } from "react"
import CardList from "./CardList"
import { useDispatch, useSelector } from "react-redux"
import { updateDataStartAsync, setCard } from "redux/task-manager/taskActions"
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
  const { data, card } = useSelector(selectTaskData)

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    getProgress()
  }, [data])

  const getProgress = () => {
    const { todo, inprogress, done } = data
    let total = todo.length + inprogress.length + done.length
    let average = (done.length / total) * 100
    setProgress(Math.trunc(average))
  }

  const onDropHandler = (e: React.DragEvent<HTMLDivElement>, category: string) => {
    e.preventDefault()

    let newData = { ...data }
    newData[card.category] = newData[card.category].filter(
      (el: any) => el.id !== card.id
    )

    card.category = category
    newData[category].push(card)
    dispatch(updateDataStartAsync(newData))
    dispatch(setCard(null))
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
          <CardList list={data.todo} title="TODO" category="todo" />
        </div>
        <div className="col-md" onDrop={(e) => onDropHandler(e, "inprogress")}>
          <CardList
            list={data.inprogress}
            title="IN PROGRESS"
            category="inprogress"
          />
        </div>
        <div className="col-md" onDrop={(e) => onDropHandler(e, "done")}>
          <CardList list={data.done} title="DONE" category="done" />
        </div>
      </div>
      <BtnAdd
        to={"/task-manager/new"}
        onClick={() => dispatch(setCard(null))}
        className="btn btn-info btn-sm rounded-circle shadow pt-2"
      >
        <span>+</span>
      </BtnAdd>
    </div>
  )
}

export default TaskManagerComponent
