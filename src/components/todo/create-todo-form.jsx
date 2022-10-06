import React from "react";
import PropTypes from 'prop-types';
import { Button, Label, Form, FormGroup, Input } from "reactstrap";

class CreateTodoForm extends React.Component {
    state ={
        text : '',
        description : ''
    }
    handleChange = (event) =>{
        
        this.setState({
            [event.target.name] : event.target.value
        })
        
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.props);
        this.props.createTodo(this.state)
        // event.target.reset();
        // this.setState({text:'',description:''})
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Enter Task</Label>
                    <Input
                        type="text"
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}

                        placeholder="Task"
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Describe Task</Label>
                    <Input
                        type="textarea"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}

                        placeholder="Description"
                    />
                </FormGroup>
                <Button type="submit">Create task</Button>

            </Form>
        )
    }
} 

CreateTodoForm.propTypes ={
    createTodo : PropTypes.func.isRequired

}
export default CreateTodoForm;