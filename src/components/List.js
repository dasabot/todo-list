import React from 'react'

function List(props) {

    function handleRemoveButton(e) {
      e.currentTarget.lastChild.classList.toggle("hide");
    }

    function renderTodos (){
        return props.todos.map((todo, index) =>
            <li id={index} onMouseOver={handleRemoveButton} onMouseOut={handleRemoveButton} key={index}> {todo}
                <button type={"button"} id={index} key={index} className={"removeButton hide"} onClick={() => props.handleRemove(index)}>X</button>
            </li>)
    }


    return (
        <ul>
            {renderTodos()}
        </ul>
    )
}

export default List;