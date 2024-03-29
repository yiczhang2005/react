import React, { useState } from 'react';
//mock data
import data from "./static/data.json";
//components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from './components/ToDoForm';
import { Col, Row } from 'react-bootstrap';

function App() {

  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App" >
      <Header />
      <Row class="text-center">

        <Col >
          <ToDoForm className="Form" addTask={addTask} />
        </Col>

        <Col >
          <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
        </Col>

      </Row>


    </div>
  );
}

export default App;
