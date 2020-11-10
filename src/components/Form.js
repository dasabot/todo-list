import React, {useState} from 'react'
import List from './List'

function Form() {

    const [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);

    function handleRemove(targetIndex){
        const updatedArray = todos.filter(function(todo, index) {
            return index !== targetIndex;
        })
        setTodos(updatedArray);
    }

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(value !== "") {
            setTodos([...todos, value]);
            setValue("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={value} type="textarea" id="input" autoComplete="off"/>
            <button type="submit">Add</button>
            <List todos={todos} handleRemove={handleRemove} />
        </form>
    )
}

export default Form;