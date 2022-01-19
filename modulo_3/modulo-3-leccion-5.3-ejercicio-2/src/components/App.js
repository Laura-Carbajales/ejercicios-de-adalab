import '../styles/App.scss';
import { useEffect, useState } from 'react';
// Importamos el servicio del local storage
import ls from '../services/localStorage';

const defaultTasks = [
  { task: 'Comprar harina, jamón y pan rallado', completed: false },
  { task: 'Hacer croquetas ricas', completed: false },
  { task: 'Ir a la puerta de un gimnasio', completed: false },
  { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false },
];

function App() {
  const [tasks, setTasks] = useState(ls.get('tasks', defaultTasks));
  const [newTaskInput, setNewTaskInput] = useState('');
  const handleClickDeleteBtn = (ev) => {
    const idTask = ev.currentTarget.parentNode.id;
    const newTaskList = tasks.filter((task, index) => {
      return idTask === index;
    });

    setTasks(newTaskList);
  };

  const handleClickCreateBtn = (ev) => {
    const newTask = { task: newTaskInput, campleted: false };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const handleChangeInput = (ev) => {
    const inputValue = ev.currentTarget.value;
    setNewTaskInput(inputValue);
  };

  useEffect(() => {
    ls.set('tasks', tasks);
  }, [tasks]);

  const handleClickTask = (ev) => {
    const clickedTaskId = ev.currentTarget.parentNode.id;
    const doneTask = tasks[clickedTaskId];
    doneTask.completed = !doneTask.completed;
    setTasks([...tasks]);
  };

  const renderTasks = () => {
    return tasks.map((task, index) => {
      if (task.completed) {
        return (
          <li className='crossed' key={index} id={index}>
            <div onClick={handleClickTask}>{task.task}</div>
            <i className='fas fa-trash-alt' onClick={handleClickDeleteBtn}></i>
          </li>
        );
      } else {
        return (
          <li key={index} id={index}>
            <div onClick={handleClickTask}>{task.task}</div>
            <i className='fas fa-trash-alt' onClick={handleClickDeleteBtn}></i>
          </li>
        );
      }
    });
  };

  const completed = tasks.filter((task) => task.completed);
  const notCompleted = tasks.filter((task) => !task.completed);

  return (
    <div>
      <h1>Mi lista de tareas:</h1>
      <ol>{renderTasks()}</ol>
      <input type='text' name='addTask' id='addTask' onChange={handleChangeInput} />
      <button onClick={handleClickCreateBtn}>Crear nueva tarea</button>

      <p>Tareas totales: {tasks.length}</p>
      <p>Tareas completadas: {completed.length}</p>
      <p>Tareas no completadas: {notCompleted.length} </p>
    </div>
  );
}

export default App;
