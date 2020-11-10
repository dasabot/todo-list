import React from 'react'
import Container from './components/Container'
import Form from './components/Form'

function App() {
    return (
            <Container>
                <span className={"title"}>To-Do List</span>
                <Form/>
            </Container>
    );
}

export default App;
