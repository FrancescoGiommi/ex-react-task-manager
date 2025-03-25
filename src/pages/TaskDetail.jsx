import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useTasks from "../customHooks/useTasks";
import Modal from "../components/Modal";

export default function TaskDetail() {
  // Prendo i dati passati dalla pagina precedente
  const location = useLocation();

  // Mi permette di navigare tra le pagine
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  // Controllo se ci sono i dati della task
  if (!location.state || !location.state.task) {
    alert("Dati non trovati");
    // Torno alla home se i dati non ci sono
    navigate("/");
    return;
  }

  // Estraggo il task dai dati passati
  const task = location.state.task;

  const { removeTask } = useTasks();

  const deleteTask = () => {
    // Rimuovo il task
    fetch(`http://localhost:3001/tasks/${task.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          removeTask(task.id);
          alert("Task eliminato");
          navigate("/");
        } else {
          alert("Errore nella cancellazione del task");
        }
      })
      .catch((error) => {
        console.error("Errore nella cancellazione del task:", error);
      });
  };

  return (
    <>
      <script type="text/babel">
        <Modal />
      </script>
      <div>
        <h1>Dettagli della Task</h1>
        <p>
          <strong>ID:</strong> {task.id}
        </p>
        <p>
          <strong>Titolo:</strong> {task.title}
        </p>
        <p>
          <strong>Descrizione:</strong> {task.description}
        </p>
        <p>
          <strong>Stato:</strong> {task.status}
        </p>
        <p>
          <strong>Creato il:</strong>{" "}
          {new Date(task.createdAt).toLocaleDateString()}
        </p>
      </div>

      <button className="btn btn-danger" onClick={() => setShow(true)}>
        Elimina task
      </button>

      {/* Modale per confermare la cancellazione */}
      <Modal
        title="Conferma Eliminazione"
        content="Sei sicuro di voler eliminare questa task?"
        show={show}
        onClose={() => setShow(false)}
        onConfirm={() => {
          deleteTask();
          setShow(false);
        }}
        confirmText="Elimina"
      />
    </>
  );
}
