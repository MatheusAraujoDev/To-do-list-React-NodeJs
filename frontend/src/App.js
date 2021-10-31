import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [input, setInput] = useState('');
  const [task, setTask] = useState([]);
  const handleListTask = () => {
    axios.get('http://localhost:3001/list')
    .then(function (response) {
      setTask(response.data);
    })
  }
  useEffect(() => {
    handleListTask();
  }, [])
  const handleCreateTask = () => {
    axios.post('http://localhost:3001/create', { 
      task: input,
    })
    .then(function (response) {
      setTask([...task,  response.data])
    })
  }
  const handleDeleteTask = (_id) => {
    axios.delete('http://localhost:3001/delete', {
      data: {
        _id : _id 
      }
    }).then(() => {
      setTask(task.filter(item => item._id !== _id))
    })

  }
  return (
    <>
      <div className="page">
      <h1>To Do List</h1>    
      </div>

      <table>
        <thead>
          <tr> 
            <th>Finalizada</th>
            <th>Nome da Tarefa</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {task.map((item,index) => {
            return (
             <tr key = {index}>
              <td><input type = "checkbox" /></td>
              <td><h3>{item.task}</h3></td>
              <td><button onClick = {() => {
                handleDeleteTask(item._id)
              }}>Deletar</button></td>
            </tr> 
            )
          })}
        </tbody>    
      </table>

      <div className="addTask">
            <input onChange = {(event) => {
                setInput(event.target.value);
              }} />
            <button id="addButton" onClick = {handleCreateTask}>Adicionar Tarefa</button>
      </div>
    </>
  );
}

export default App;
