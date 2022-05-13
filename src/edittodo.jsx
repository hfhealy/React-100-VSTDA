import React from 'react';

export default props => (
    
        <div className="card-body">
            <label className="form-label">Description</label>
            <textarea className="update-todo-text form-control" rows="5"></textarea>
            <label className="form-label" id="rec">How much of a priority is this?</label>
            <select className="update-todo-priority form-select">
                <option>Select a Priority</option>
	            <option value="1">Low Priority</option>
                <option value="2">Medium Priority</option>
                <option value="3">High Priority</option>
            </select>
            <button className="update-todo btn btn-success" type="button" name="button">Save</button>
        </div>
    
);