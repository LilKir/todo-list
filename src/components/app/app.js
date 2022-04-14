import { Component } from "react";
import { Helmet } from "react-helmet";

import AddForm from "../add-form/addForm";
import TodoList from "../todo-list/todoList";
import TodoFilter from "../todo-filter/todoFilter";

import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { title: "Сверстать Todo", state: true, id: 1 },
        { title: "Написать логику Todo", state: false, id: 2 },
        { title: "Загрузить на Github", state: false, id: 3 },
      ],
      // term: "",
      filter: "all",
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (title) => {
    const newItem = {
      title,
      state: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return { data: newArr };
    });
  };

  onToggleState = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, state: !item.state };
        }
        return item;
      }),
    }));
  };
  // Поиск по названию в следующей версии
  // searchTask = (items, term) => {
  //   if (term.lenght === 0) {
  //     return items;
  //   }
  //   return items.filter((item) => {
  //     return item.title.indexOf(term) > -1;
  //   });
  // };

  filterTask = (items, filter) => {
    switch (filter) {
      case "done":
        return items.filter((item) => item.state);
      case "notDone":
        return items.filter((item) => !item.state);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, filter } = this.state;
    const visibleData = this.filterTask(data, filter);

    return (
      <>
        <Helmet>
          <meta name="description" content="Todo list" />
          <title>ToDo list</title>
        </Helmet>
        <div className="container">
          <AddForm onAdd={this.addItem} />

          <TodoList
            data={visibleData}
            onDelete={this.deleteItem}
            onToggleState={this.onToggleState}
          />
          <TodoFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
      </>
    );
  }
}

export default App;
