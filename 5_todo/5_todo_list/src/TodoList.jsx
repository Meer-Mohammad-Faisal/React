import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList () {
    let [todos, setTodes] = useState([{task: "sample-task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodes((prevTodos) =>{
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}]
        });
        setNewTodo("");
    };


    let updateTodoValues = (event) => {
        setNewTodo(event.target.value);
        //setNewTodo("");
    };

    let deleteTodo = (id) => {
        setTodes((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let markAllDone = () => {
        setTodes( (prevTodos) => 
            prevTodos.map((todo) => {
            return {
                ...todo,
                isDone: true,
            }
        })
        );
    };

    let markAsDone = (id) => {
       setTodes( (prevTodos) => 
            prevTodos.map((todo) => {
                if(todo.id == id){
                    return {
                    ...todo,
                    isDone: true,
                }
            } else {
                return todo;
            } 
        })
        );
    }

    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValues}></input>
            <br />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <br />
            <hr />



            <h4> Task Todo </h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
                            {todo.task}
                        </span>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <button onClick={ () => deleteTodo(todo.id)}>Delete</button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={ () => markAsDone(todo.id)}>Mark as Done</button>
                        </li>
                ))}
            </ul>
            <br />
            <br />
            <button onClick={markAllDone}>Mark All As Done</button>
        </div>
    )
}