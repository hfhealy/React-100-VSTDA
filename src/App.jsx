import TodoList from './todolist';
import ViewTodoDefault from './viewtododefault';


import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoObj: {
        addTodo: '', 
        priority: 'Select a Priority',
        edit: false,
        updatePriority: 'Select a Priority',
        updateTodo: '',
        priorityColor: '',
        checkbox: false
      },
      todoArr: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.checked = this.checked.bind(this);

  }

  handleChange(event) {
    
    //cant manipulate state directly, make a copy to store state info
    let objectCopy = JSON.parse(JSON.stringify(this.state.todoObj));
    objectCopy[event.target.name] = event.target.value
    this.setState({todoObj: objectCopy});
  }

  onClick() {
    let color; 
    if (this.state.todoObj.priority == 1) {
        color = 'list-group-item-success';
    } else if (this.state.todoObj.priority == 2) {
        color = "list-group-item-warning";
    } else if (this.state.todoObj.priority == 3) {
      color = "list-group-item-danger";
    }
    let arrCopy = JSON.parse(JSON.stringify(this.state.todoArr))
    let objCopy = JSON.parse(JSON.stringify(this.state.todoObj))
    objCopy.priorityColor = color;
    let updatedArray = arrCopy.concat(objCopy);
    this.setState({
      todoArr: updatedArray,
    })
  }

  delete(i) {
    let arrayCopy = JSON.parse(JSON.stringify(this.state.todoArr))
    arrayCopy.splice(i, 1);
    this.setState({todoArr: arrayCopy});
  }

  edit(i) {
    let arrayCopy = JSON.parse(JSON.stringify(this.state.todoArr));
    let objCopy = JSON.parse(JSON.stringify(this.state.todoObj));
    arrayCopy[i].edit = !arrayCopy[i].edit
    objCopy.updateTodo = arrayCopy[i].addTodo
    objCopy.updatePriority = arrayCopy[i].priority
    this.setState({todoArr: arrayCopy, todoObj: objCopy})
  }

  save(i) {
    let color; 
    if (this.state.todoObj.updatePriority == 1) {
        color = 'list-group-item-success';
    } else if (this.state.todoObj.updatePriority == 2) {
        color = "list-group-item-warning";
    } else if (this.state.todoObj.updatePriority == 3) {
      color = "list-group-item-danger";
    }
    let arrayCopy = JSON.parse(JSON.stringify(this.state.todoArr));
    arrayCopy[i].addTodo = this.state.todoObj.updateTodo;
    arrayCopy[i].priority = this.state.todoObj.updatePriority;
    arrayCopy[i].edit = false;
    arrayCopy[i].priorityColor = color;
    this.setState({
      todoArr: arrayCopy
    })
  }
  
  checked(i) {
    let arrayCopy = JSON.parse(JSON.stringify(this.state.todoArr));
    let objCopy = JSON.parse(JSON.stringify(this.state.todoObj));
    arrayCopy[i].checkbox = !arrayCopy[i].checkbox
    objCopy.checkbox = arrayCopy[i].checkbox;
    this.setState({todoArr: arrayCopy, todoObj: objCopy})
    // this.setState({[event.target.name]: event.target.value})
  }



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
                  <option value="1">Low Priority</option>
                  <option value="2">Medium Priority</option>
                  <option value="3">High Priority</option>
                </select>
                <button className="btn btn-success w-100 create-todo" type="button" name="button" onClick={this.onClick}>Add</button>
              </div>
            </div>
          </div>
          
          <div className='col-sm-8'>
          <div className="card" id="card">
            <div className="card-header">View To-Dos</div>
            <ul style={{listStyle: "none"}} className="ml-auto">
              {
                this.state.todoArr.length === 0 ? <ViewTodoDefault /> : 
                this.state.todoArr.map((el, i) => 
                <TodoList 
                  key={i}
                  index={i}
                  element={el}
                  delete= {this.delete}
                  edit= {this.edit}
                  change= {this.handleChange}
                  save= {this.save}
                  checked= {this.checked}
                />
                )
                
              }
              </ul>
          </div>
          </div>
          </div>
        </div>
          
      
    );
  }
}

export default App;
