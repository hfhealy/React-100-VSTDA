import React from 'react';

export default props => (
    <div className="card" id="card">
    
        <div className="card-header">View To-Dos</div>
            <div className="list-group checkbox-list-group">
                <div className="list-group-item list-group-item-success">
                <label><input type="checkbox" />Item 1</label>
                <a href='#' className="edit-todo">Edit</a>
                <a href='#' className="delete-todo">Delete</a>
                </div>
                <div className="list-group-item list-group-item-warning">
                <label><input type="checkbox" />Item 2</label>
                <a href='#' className="edit-todo">Edit</a>
                <a href='#' className="delete-todo">Delete</a>
                </div>
                <div className="list-group-item list-group-item-danger">
                <label><input type="checkbox" />Item 3</label>
                <a href='#' className="edit-todo">Edit</a>
                <a href='#' className="delete-todo">Delete</a>
                </div>
            </div>
    </div>

);
