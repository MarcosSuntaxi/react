import { useEffect, useState } from 'react'; 
import './App.css';
import List from './assets/components/list';
import ItemList from './assets/components/ItemList';
import { Link } from "react-router";
import { getPost } from './services/api';

function App() {
  const [tareas, setTareas] = useState([]);
  const [tareaInput, setTareaInput] = useState('');

  const agregarTarea = (tareaNueva) => {
    setTareas([...tareas, tareaNueva]);
  };

  useEffect(() => {
    getPost().then((post) => console.log(post));
  }, []);

  return (
    <>
      <h1>To Do List</h1>
      <Link to="/Hola">Login again</Link>
      <input
        type="text"
        placeholder="Agregar tarea"
        value={tareaInput}
        onChange={(e) => setTareaInput(e.target.value)}
      />
      <button onClick={() => agregarTarea(tareaInput)}>Agregar</button>
      <List>
        {tareas.map((tarea, index) => (
          <ItemList key={index}>{tarea}</ItemList>
        ))}
      </List>
    </>
  );
}

export default App;