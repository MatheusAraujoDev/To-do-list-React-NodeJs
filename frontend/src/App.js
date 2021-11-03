import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [input, setInput] = useState('');
  const [task, setTask] = useState([]);
  // const [taskFullTable, setTaskFullTable] = useState([]);
  const [taskDone, setTaskDone] = useState([]);

  useEffect(()=>{
    getTasksFromDb()
  },[]);

  function editInput(taskNameEdit) {
    return prompt("Edite sua tarefa:", taskNameEdit)
  }

  // function allTasks() {
  //   setTask(taskFullTable);
  // }

  function onlyConcludedTasks() {
      let concludedTasks = []
      task.forEach((item, index) => {
      if(taskDone.includes(item._id)) {
        concludedTasks.push({
          _id: item._id,
          task: item.task
        })
      }
    })

    setTask([...concludedTasks]);
  }

//   function onlyNotConcludedTasks() {
//     let notConcludedTasks = []
//     task.forEach((item, index) => {
//     if(!taskDone.includes(item._id)) {
//       notConcludedTasks.push({
//         _id: item._id,
//         task: item.task
//       })
//     }
//   })
//   setTask(notConcludedTasks);
// }

  const getTasksFromDb = () => {    
    axios.get('http://localhost:3001/list')
    .then(function (response) {
      setTask(response.data);
      // setTaskFullTable(response.data)
    })
  }

  const updateTask = (_id,task) => {
    axios.put('http://localhost:3001/update', {
      _id: _id,
       task: task,
    }).then(function (response) {
      getTasksFromDb();
      console.log(response)
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
            <th>Opcões</th>
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
                <button onClick={() => {
                  const task = editInput(item.task);
                  updateTask(item._id, task)
                }}> 
                  Editar
                </button>
                <button onClick={() => {
                  deleteTask(item._id)
                }}>X</button>
              </td>
            </tr> 
            )
          })}
        </tbody>    
      </table>
    
      <div className="filter-buttons">
        <button onClick={getTasksFromDb}>Tarefas pendentes</button>
        <button onClick={onlyConcludedTasks}>Apenas concluídas</button>
        {/* <button onClick={() => {
          onlyNotConcludedTasks();
        }}>Apenas pendentes</button> */}
      </div>

      <div className="addTask">
            <input id="addInput" onChange={(event) => {
                setInput(event.target.value);
              }} />
            <button id="AddButon" onClick={createTask}>Adicionar Tarefa</button>
      </div>    
    </main>    
  );
}

export default App;
