import TodoList from './todolist';
import ViewTodoDefault from './viewtododefault';
import EditTodo from './edittodo';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoObj: {
        addTodo: '', 
        priority: 'Select a Priority'
      },
      todoArr: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);

  }

  handleChange(event) {
    console.log(event.target.name);
    //cant manipulate state directly, make a copy to store state info
    let objectCopy = JSON.parse(JSON.stringify(this.state.todoObj));
    objectCopy[event.target.name] = event.target.value
    this.setState({todoObj: objectCopy});
  }

  onClick() {
    this.state.todoArr.push(this.state.todoObj);
    console.log("33", this.state.todoArr);
  }
  //onclick function concatenate .concat push into todoArr 
  //this.state.

  render() {
    return (
      <div className='container'>
        <h1>Very Simple To-Do App</h1>
        <h4>Track all of the things</h4>
        <hr/>
        <div className='row'>
          <div className='col-sm-4'>
            <div className="card" id="card">
            <div className="card-header">Add New To-Do</div>
              <div className="card-body">
                <label className="form-label">I want to...</label>
                <textarea className="create-todo-text form-control" rows="3" name="addTodo" onChange={this.handleChange} value={this.state.todoObj.addTodo}></textarea>
                <label className="form-label" id="rec">How much of a priority is this?</label>
                <select className="create-todo-priority form-select" name="priority" onChange={this.handleChange} value={this.state.todoObj.priority}>
                  <option>Select a Priority</option>
                  <option value="Low Priority">Low Priority</option>
                  <option value="Medium Priority">Medium Priority</option>
                  <option value="High Priority">High Priority</option>
                </select>
                <button className="btn btn-success w-100" type="button" name="button" onClick={this.onClick}>Add</button>
              </div>
            </div>
          </div>
          <div className='col-sm-8'>
            <ViewTodoDefault />
          </div>
          </div>
          
      </div>
    );
  }
}

export default App;
