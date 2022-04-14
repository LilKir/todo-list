import "./todoListItem.scss";

const TodoListItem = (props) => {
  const { title, onDelete, onToggleState, state } = props;

  let classNames = "list-group-item d-flex justify-content-between";
  let buttonOn = "fa-xl fa-regular fa-square";
  if (state) {
    classNames += " done";
    buttonOn += "-check";
  }

  return (
    <li className={classNames}>
      <button type="button" onClick={onToggleState}>
        <i className={buttonOn}></i>
      </button>
      <span className="list-group-item-label">{title}</span>

      <div className="d-flex justify-content-center align-items-center">
        <button type="button" onClick={onDelete}>
          <i className="fa-xl fa-solid fa-square-xmark"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
