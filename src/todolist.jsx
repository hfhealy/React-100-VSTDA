import React from 'react';

export default props => (
    
    
    <div>
    {props.element.edit === false && props.element.checkbox == false ? 
            <div className="list-group checkbox-list-group">
                <li className= {props.element.priorityColor}>
                <div className="row">
                <div className="col-sm-10">
                <label><input type="checkbox" name="checkbox" onChange={() =>props.checked(props.index)}/>{props.element.addTodo}</label>
                </div>
                <div className="col-sm-2 edit-delete-column">
                <a href='#' className="edit-todo" onClick={() => props.edit(props.index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="blue" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </a>
                <a href='#' className="delete-todo" onClick={() => props.delete(props.index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </a>
                </div>
                </div>
                </li>
                </div>
            
            : props.element.edit === false && props.element.checkbox == true ? 

            <div className="list-group checkbox-list-group">
                <li className= {props.element.priorityColor}>
                <div className="row">
                <div className="col-sm-10">
                <label><input type="checkbox" name="checkbox" onChange={() =>props.checked(props.index)}/><span style={{textDecorationLine: "line-through"}}>{props.element.addTodo}</span></label>
                </div>
                <div className="col-sm-2 edit-delete-column">
                <a href='#' className="edit-todo" onClick={() => props.edit(props.index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="blue" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </a>
                <a href='#' className="delete-todo" onClick={() => props.delete(props.index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </a>
                </div>
                </div>
                </li>
                </div>

            /* <div className="list-group checkbox-list-group">
                <li className= {props.element.priorityColor}>
                <label><input type="checkbox" name="checkbox" onChange={() =>props.checked(props.index)} /><span style={{textDecorationLine: "line-through"}}>{props.element.addTodo}</span></label>
                <a href='#' className="edit-todo" onClick={() => props.edit(props.index)}>Edit</a>
                <a href='#' className="delete-todo" onClick={() => props.delete(props.index)}>Delete</a>
                
            </li>
            </div>  */
            :<div className={`${props.element.priorityColor} card-body`}>
            <label className="form-label">Description</label>
            <textarea className="update-todo-text form-control" rows="5" name="updateTodo" defaultValue={props.element.addTodo} onChange={(e) =>props.change(e)}></textarea>
            <label className="form-label" id="rec">How much of a priority is this?</label>
            <select className="update-todo-priority form-select" defaultValue={props.element.priority} name="updatePriority" onChange={(e) =>props.change(e)}>
                <option>Select a Priority</option>
	            <option value="1">Low Priority</option>
                <option value="2">Medium Priority</option>
                <option value="3">High Priority</option>
            </select>
            <button className="update-todo btn btn-success" type="button" name="button" onClick={() => props.save(props.index)}>Save</button>
            </div>
            }
</div>
    );
