import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [input, setInput] = useState('');
  const [task, setTask] = useState([]);

  useEffect(() => {
    getTasksFromDb();
  }, []);

  const getTasksFromDb = () => {
    axios.get('http://localhost:3001/list')
    .then(function (response) {
      setTask(response.data);
    })
  }

  const createTask = () => {
    axios.post('http://localhost:3001/create', { 
      task: input,
    })
    .then(function (response) {
      setTask([...task,  response.data])
    })

    document.getElementById("addInput").value = '';
    setInput('');
  }

  const deleteTask = (_id) => {
    axios.delete('http://localhost:3001/delete', {
      data: {
        _id : _id 
      }
    }).then(() => {
      setTask(task.filter(item => item._id !== _id))
    })

  }

  return (
    <main>
      <h1>To Do List</h1>    

      <table>
        <thead>
          <tr> 
            <th>Status</th>
            <th>Nome da Tarefa</th>
            <th>Deletar Tarefa</th>
          </tr>
        </thead>
        <tbody>
          {task.map((item,index) => {
            return (
             <tr key = {index}>
              <td><input type="checkbox" /></td>
              <td><h2>{item.task}</h2></td>
              <td><button onClick = {() => {
                deleteTask(item._id)
              }}>X</button></td>
            </tr> 
            )
          })}
        </tbody>    
      </table>

      <footer className="addTask">
            <input id="addInput" onChange = {(event) => {
                setInput(event.target.value);
              }} />
            <button onClick = {createTask}>Adicionar Tarefa</button>
      </footer>
    </main>
  );
}

export default App;
