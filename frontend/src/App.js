/* eslint-disable indent */
/* eslint-disable react/jsx-closing-tag-location */
// eslint-disable-next-line react/jsx-indent-props
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './App.css';
import AddTask from './components/AddTask';
import DeleteTaskButton from './components/DeleteTaskButton';
import EditButton from './components/EditButton';
import FilterButtons from './components/FilterButtons';

function App() {
  const [input, setInput] = useState('');
  const [task, setTask] = useState([]);

  function editInput(taskName) {
    const newValue = prompt('Edite sua tarefa e clique em "OK":', taskName);
    return (newValue === null || newValue === '') ? taskName : newValue;

    // newValue é o novo valor de item.task vindo do mongoDB pelo _id.
    // Referência: https://www.w3schools.com/jsref/met_win_prompt.asp
  }

  const onlyConcludedTasks = () => {
    axios.get('http://localhost:3001/tasksDone')
      .then((response) => {
        setTask(response.data);
      });
  };

  const onlyNotConcludedTasks = () => {
    axios.get('http://localhost:3001/tasksNotDone')
      .then((response) => {
        setTask(response.data);
      });
  };

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
    if (!input) {
      return;
    }

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
    Swal.fire({
      title: 'Tem certeza que deseja excluir essa tarefa?',
      text: 'A tarefa será excluída permanentemente!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Remover',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete('http://localhost:3001/delete', {
          data: {
            _id,
          },
        }).then(() => {
          setTask(task.filter((item) => item._id !== _id));
          Swal.fire(
          'Deletada!',
          'Tarefa deletada com sucesso!',
          'success',
          );
        });
      }
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
      <h1>ToDo List</h1>

      { task.length < 1
        ? <p className="notFound">Nenhuma tarefa encontrada...</p>
        : (<table>
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
                    style={ { width: '15px', height: '15px', cursor: 'pointer' } }
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
                  <EditButton
                    onClick={ () => {
                      const taskNewValue = editInput(item.task); // fica o valor da nova tarefa
                      updateTask(item._id, taskNewValue, item.check);
                    } }
                  />

                  <DeleteTaskButton
                    onClick={ () => {
                      deleteTask(item._id);
                    } }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>)}

      <FilterButtons
        onClick1={ getTasksFromDb }
        onClick2={ onlyConcludedTasks }
        onClick3={ onlyNotConcludedTasks }
      />

      <AddTask
        onChange={ (event) => setInput(event.target.value) }
        onClick={ createTask }
      />

    </main>
  );
}

export default App;
