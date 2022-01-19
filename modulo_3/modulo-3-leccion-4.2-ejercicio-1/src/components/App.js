import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false },
  ]);
  const handleClickTask = (ev) => {
    const clickedTaskId = ev.currentTarget.id;
    const doneTask = tasks[clickedTaskId];
    doneTask.completed = !doneTask.completed;
    setTasks([...tasks]);
  };

  const renderTasks = () => {
    return tasks.map((task, index) => {
      if (task.completed) {
        return (
          <li className='crossed' key={index} id={index} onClick={handleClickTask}>
            {task.task}
          </li>
        );
      } else {
        return (
          <li key={index} id={index} onClick={handleClickTask}>
            {task.task}
          </li>
        );
      }
    });
  };

  return (
    <div>
      <h1>Mi lista de tareas:</h1>
      <ol>{renderTasks()}</ol>
    </div>
  );
}

export default App;
