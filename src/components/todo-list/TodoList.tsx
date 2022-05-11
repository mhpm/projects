import { Children, cloneElement, ReactNode } from "react";
import { Container, ItemCheckbox, ItemContainer } from "./TodoList.styles";

export interface TodoListProps {
  classes?: string;
  children: ReactNode;
}

const TodoList = (props: TodoListProps) => {
  return (
    <Container className={"todos " + props.classes}>
      {Children.map(props.children, (child: any) => cloneElement(child))}
    </Container>
  );
};

export interface ItemProps extends TodoListProps {
  isCompleted?: boolean;
  onChange?: () => void;
}

const Item = (props: ItemProps) => {
  return (
    <ItemContainer className={props.classes}>
      <ItemCheckbox
        type="checkbox"
        checked={props.isCompleted}
        onChange={props.onChange}
      />
      {props.children}
    </ItemContainer>
  );
};

TodoList.Item = Item;

export default TodoList;
