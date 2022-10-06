import React from "react";
import { ListGroup, ListGroupItem, FormGroup, Input, Label,Button } from 'reactstrap'
import PropTypes from 'prop-types';

const ListItem = ({ todo, toggleSelect,toggleComplete }) => {
    return (
        <ListGroupItem className="d-flex align-items-center">
            <FormGroup check>
                <Input
                    id="checkbox2"
                    type="checkbox"
                    onChange={()=>toggleSelect(todo.id)}
                />
                {' '}
                <Label check>
                </Label>
            </FormGroup>
            <div className="mx-3">
                <h4>{todo.text}</h4>
                <p>{todo.time.toDateString()}</p>
            </div>
            <div style={{marginLeft: "auto"}}>
                <Button color={todo.isComplete ?"danger":"success"} onClick={()=>toggleComplete(todo.id)}>{todo.isComplete ? "Completed" : "Running"}</Button>
            </div>
        </ListGroupItem>
    )
};

ListItem.propTypes ={
    todo:PropTypes.object.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}





const ListView =({todos, toggleSelect,toggleComplete}) =>{
    return(
        <ListGroup>
            {todos.map(todo =>(
                <ListItem
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleSelect}
                    toggleComplete={toggleComplete}
                
                />
            ))}
        

        </ListGroup>
    )
}

ListView.propTypes ={
    todos:PropTypes.array.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}

export default ListView;
