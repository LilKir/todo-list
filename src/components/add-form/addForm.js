import { Component } from "react";
import "./addForm.scss";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.title);
    this.setState({
      title: "",
    });
  };

  render() {
    const { title } = this.state;
    return (
      <div className="app-add-form">
        <h1>Добавить новую задачу</h1>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Что ты хочешь не забыть сделать?"
            name="title"
            value={title}
            onChange={this.onValueChange}
          />
          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default AddForm;
