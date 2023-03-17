import React from "react";
import { Button, ButtonGroup, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
// import { Button, Modal, ModalHeader, ModalBody, Label, Form, FormGroup, Input } from 'reactstrap';
import shortid from "shortid";
import CreateTodoForm from "./create-todo-form";
import ListView from "./list-view";
import TableView from "./table-view";
class Todos extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                text: "take some text",
                description: "simple description",
                time: new Date(),
                isComplete: true,
                isSelect: false
            },
            {
                id: 2,
                text: "take some text2",
                description: "simple description2",
                time: new Date(),
                isComplete: false,
                isSelect: false,
            },

        ],
        isOpenTodoForm: false,
        view : 'list'
    }
    changeView =(event)=>{
        this.setState({
            view: event.target.value
        })
    }
    
    toggleSelect = (todoId) => {
        const todos = [...this.state.todos];
        const todo = todos.find(t => t.id === todoId);
        console.log(todo);
        todo.isSelect = !todo.isSelect;
        this.setState(todos);
    }
    toggleComplete = (todoId) => {
        const todos = [...this.state.todos];
        const todo = todos.find(t => t.id === todoId);
        todo.isComplete = !todo.isComplete;
        this.setState(todos);
    }
    toggleForm = () => {
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })
    }

    createTodo = (todo) => {
        console.log(todo)
        todo.id = shortid.generate()
        todo.time = new Date()
        todo.isComplete = false
        todo.isSelect = false
        const todos = [todo, ...this.state.todos]

        this.setState({ todos })
        this.toggleForm()
    }

    getView =()=>{
        return this.state.view === 'list' ? (
                <ListView 
                    todos={this.state.todos} 
                    toggleSelect={this.toggleSelect} 
                    toggleComplete={this.toggleComplete} 
                    />
                ) : (
                    <TableView />
                );

        }
        
    




    render() {
        return (
            <div>
                <h1 className="display-4 text-center mb-5">React Todo</h1>
                <Button onClick={this.toggleForm}>New</Button>
                <Modal
                    isOpen={this.state.isOpenTodoForm}
                    toggle={this.toggleForm}
                >
                    <ModalHeader toggle={this.toggleForm}>
                        create New Todo Item
                    </ModalHeader>
                    <ModalBody>
                        <CreateTodoForm createTodo={this.createTodo} />
                    </ModalBody>
                </Modal>

                <div>
                    <Row className='my-4'>
                        <Col md={{ size: 4 }}><ButtonGroup>
                            <Button color="danger">
                                Left
                            </Button>
                            <Button color="warning">
                                Middle
                            </Button>
                            <Button color="success">
                                Right
                            </Button>
                        </ButtonGroup></Col>
                        <Col md={{ size: 4 }}>
                            <div className="d-flex">
                                <Label for="list-view" className="mr-4">
                                    <input
                                        type="radio"
                                        name="view"
                                        value='list'
                                        id="list-view"
                                        className="d-inline-block mx-1"
                                    checked={this.state.view==='list'}
                                    onChange={this.changeView} 
                                    />list view
                                </Label>
                                <Label for="list-view" className="mr-4">
                                    <input
                                        type="radio"
                                        name="view"
                                        value='table'
                                        id="table-view"
                                        className="d-inline-block mx-1"
                                        checked={this.state.view==='table'}
                                        onChange={this.changeView}
                                    />table view
                                </Label>

                            </div>
                        </Col>
                        <Col md={{ size: 4 }}>
                    
                        </Col>

                    </Row>
                </div>

                <div>
                    {this.getView()}
                </div>
                
            </div>
        )
    }
}
export default Todos;