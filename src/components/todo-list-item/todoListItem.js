import "./todoListItem.scss";

const TodoListItem = (props) => {
  const { title, onDelete, onToggleState, state } = props;

  let classNames = "list-group-item d-flex justify-content-between";
  if (state) {
    classNames += " done";
  }

  return (
    <li className={classNames}>
      <button
        type="button"
        className="btn-square btn-md "
        onClick={onToggleState}
      >
        <i className="bi bi-check-square-fill"></i>
      </button>
      <span className="list-group-item-label">{title}</span>

      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-circle  " onClick={onDelete}>
          <i className="bi bi-x-circle-fill"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
