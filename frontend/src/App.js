import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [task, setTask] = useState([]);

  function editInput(taskName) {
    const newValue = prompt('Edite sua tarefa e clique em "OK":', taskName);
    return (newValue === null || newValue === '') ? taskName : newValue;

    // newValue é o novo valor de item.task vindo do mongoDB pelo _id.
    // Referência: https://www.w3schools.com/jsref/met_win_prompt.asp
  }

  function onlyConcludedTasks() {
    axios.get('http://localhost:3001/tasksDone')
      .then((response) => {
        setTask(response.data);
      });
  }

  function onlyNotConcludedTasks() {
    axios.get('http://localhost:3001/tasksNotDone')
      .then((response) => {
        setTask(response.data);
      });
  }

  const getTasksFromDb = () => {
    axios.get('http://localhost:3001/list')
      .then((response) => {
        setTask(response.data);
      });
  };

  const updateTask = (_id, taskName, check) => {
    axios.put('http://localhost:3001/update', {
      _id,
      task: taskName,
      check,
    }).then(() => {
      getTasksFromDb(); // Atualiza a página com a nova tarefa
    });
  };

  const createTask = () => {
    axios.post('http://localhost:3001/create', {
      task: input,
      check: false,
    })
      .then((response) => {
        setTask([...task, response.data]);
      });

    document.getElementById('addInput').value = ''; // limpa o INPUT
    setInput(''); // limpa o ESTADO
  };

  const deleteTask = (_id) => {
    axios.delete('http://localhost:3001/delete', {
      data: {
        _id,
      },
    }).then(() => {
      setTask(task.filter((item) => item._id !== _id));
    });
  };

  const markTask = (_id, taskName) => {
    const h2 = document.getElementById(`${_id}`);
    const check = document.getElementById(`checkbox${_id}`).checked;

    updateTask(_id, taskName, check); // atualiza o valor de check e risca o item
    return h2.classList.toggle('markItem');
  };

  useEffect(() => {
    getTasksFromDb();
  }, []);

  return (
    <main>
      <h1>To Do List</h1>

      <table>
        <thead>
          <tr data-testid="table-row">
            <th>Status</th>
            <th>Nome da Tarefa</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {task.map((item) => (
            <tr key={ item._id }>
              <td>
                <input
                  type="checkbox"
                  id={ `checkbox${item._id}` }
                  onChange={ () => { markTask(item._id, item.task); } }
                  checked={ item.check }
                />

              </td>
              <td>
                <h2
                  id={ item._id }
                  className={ item.check && 'markItem' }
                >
                  {item.task}
                </h2>
              </td>
              <td>
                <button
                  type="button"
                  onClick={ () => {
                    const taskNewValue = editInput(item.task); // fica o valor da nova tarefa
                    updateTask(item._id, taskNewValue, item.check);
                  } }
                >
                  Editar
                </button>
                <button
                  type="button"
                  id="deleteBtn"
                  onClick={ () => {
                    deleteTask(item._id);
                  } }
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="filter-buttons">
        <button
          type="button"
          id="filterBtn"
          onClick={ getTasksFromDb }
        >
          Todas as Tarefas
        </button>
        <button
          type="button"
          id="filterBtn"
          onClick={ onlyConcludedTasks }
        >
          Apenas concluídas
        </button>
        <button
          type="button"
          id="filterBtn"
          onClick={ onlyNotConcludedTasks }
        >
          Tarefas Pendentes
        </button>
      </div>

      <label htmlFor="addInput" className="addTask">
        <input
          data-testid="addTask-Input"
          type="text"
          name="addInput"
          id="addInput"
          onChange={ (event) => {
            setInput(event.target.value);
          } }
        />
        <button
          data-testid="addTask-Button"
          type="button"
          id="AddButon"
          onClick={ createTask }
        >
          Adicionar Tarefa
        </button>
      </label>
    </main>
  );
}

export default App;
