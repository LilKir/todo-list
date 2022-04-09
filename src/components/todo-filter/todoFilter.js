import "./todoFilter.scss";

const TodoFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "Все задачи" },
    { name: "done", label: "Выполненные" },
    { name: "notDone", label: "Надо сделать" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group todo-filter">{buttons}</div>;
};

export default TodoFilter;
