import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { setCard, updateDataStartAsync } from "redux/task-manager/taskActions";
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

const Card = ({ info }: any) => {
  const dispatch = useDispatch();
  const { data } = useSelector(selectTaskData);

  const hanleDelete = () => {
    let tempData = { ...data };
    let list = data[info.category].filter((el: any) => el.id !== info.id);

    tempData[info.category] = list;
    dispatch(updateDataStartAsync(tempData));
  };

  return (
    <CardStyled
      draggable
      onTouchStart={() => dispatch(setCard(info))}
      onDragStart={() => dispatch(setCard(info))}
      className="card mt-3 shadow-sm"
      priority={info.priority}
    >
      <div className="card-body">
        <div className="row">
          <div className="col-10">
            <h6 className="card-title font-weight-bolder text-dark">
              {info.title}
            </h6>
          </div>
          <div className="col-2"></div>
        </div>
        <Link to={"/task-manager/edit/" + info.id}>
          <BtnEdit onClick={() => dispatch(setCard(info))} className="btn float-right">
            <i className="fas fa-edit"></i>
          </BtnEdit>
        </Link>
        <BtnDelete onClick={hanleDelete} className="btn float-right">
          <i className="fas fa-trash"></i>
        </BtnDelete>

        <p className="card-text text-muted">{info.description}</p>
        <Btn className="badge float-right" priority={info.priority}>
          {info.priority}
        </Btn>
      </div>
    </CardStyled>
  );
};

export default Card;
