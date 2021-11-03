import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [task, setTask] = useState([]);
  const [taskDone, setTaskDone] = useState([]);

  useEffect(()=>{
    getTasksFromDb()
  },[]);

  function editInput(newTaskName) {
    return prompt('Edite sua tarefa e clique em "OK":', newTaskName)
    // newTaskName será o novo valor de item.task vindo do mongoDB pelo _id.
    // Referência: https://www.w3schools.com/jsref/met_win_prompt.asp
  }

  function onlyConcludedTasks() {
      let concludedTasks = []
      task.forEach((item) => {
      if(taskDone.includes(item._id)) {
        concludedTasks.push({
          _id: item._id,
          task: item.task
        })
      }
    })

    setTask([...concludedTasks]);
  }

  const getTasksFromDb = () => {    
    axios.get('http://localhost:3001/list')
    .then(function (response) {
      setTask(response.data);
    })
  }

  const updateTask = (_id,task) => {
    axios.put('http://localhost:3001/update', {
      _id: _id,
       task: task,
    }).then(function () {
      getTasksFromDb(); // Irá atualizar a página com a nova tarefa
    }) 
  }

  const createTask = () => {
    axios.post('http://localhost:3001/create', { 
      task: input,
    })
    .then(function (response) {
      setTask([...task,  response.data])
    })

    document.getElementById("addInput").value = ''; // limpa o CAMPO input
    setInput(''); // limpa o ESTADO input
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

  const markTask = (id) => {
    const element = document.getElementById(`${id}`);
    const isChecked = document.getElementById(`checkbox${id}`).checked;
    
    if(isChecked) {
      setTaskDone([...taskDone, id]) // adiciona ao state o id da tarefa concluída
    }else {
      const findTaskIndex = taskDone.findIndex(item => item === id);
      let array = taskDone; 
      array.splice(findTaskIndex, 1);
      setTaskDone([...array]);
    }

    return element.classList.toggle('markItem');
  }


  return (    
    <main>
      <h1>To Do List</h1>

      <table>
        <thead>
          <tr> 
            <th>Status</th>
            <th>Nome da Tarefa</th>
            <th>Opções</th>
          </tr>
        </thead>     
        <tbody>
          {task.map((item) => {
            return (
             <tr key={item._id} >
              <td>
                <input
                  type="checkbox"
                  id={`checkbox${item._id}`}
                  onClick={ () => { markTask(item._id) }} 
                />
              </td>
              <td>
                <h2 id={item._id} >{item.task}</h2></td>
              <td>
                <button
                  onClick={() => {
                  const task = editInput(item.task); // fica o valor da nova tarefa
                  updateTask(item._id, task)
                  }}
                > 
                  Editar
                </button>
                <button
                  id="deleteBtn"
                  onClick={() => {
                  deleteTask(item._id)
                  }}
                >X</button>
              </td>
            </tr> 
            )
          })}
        </tbody>    
      </table>
    
      <div className="filter-buttons">
        <button id ="filterBtn" onClick={getTasksFromDb}>Todas as Tarefas</button>
        <button id ="filterBtn" onClick={onlyConcludedTasks}>Apenas concluídas</button>
      </div>

      <label htmlFor="addInput" className="addTask">
        <input type="text" name="addInput" id="addInput" onChange={(event) => {
          setInput(event.target.value);
          }} />
        <button id="AddButon" onClick={createTask}>Adicionar Tarefa</button>
      </label>    
    </main>    
  );
}

export default App;
