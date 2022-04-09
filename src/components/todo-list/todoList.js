import TodoListItem from "../todo-list-item/todoListItem";

import "./todoList.scss";

const TodoList = ({ data, onDelete, onToggleState }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <TodoListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleState={() => onToggleState(id)}
      />
    );
  });

  return <ul className="app-todo-list">{elements}</ul>;
};

export default TodoList;
