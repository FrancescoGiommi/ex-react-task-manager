import { useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { TaskContext } from "../globalContext/TaskContext";

import Modal from "../components/Modal";
import EditTaskModal from "../components/EditTaskMOdal";

export default function TaskDetail() {
  // Prendo i dati passati dalla pagina precedente
  const location = useLocation();

  // Mi permette di navigare tra le pagine
  const navigate = useNavigate();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // Controllo se ci sono i dati della task
  if (!location.state || !location.state.task) {
    alert("Dati non trovati");
    // Torno alla home se i dati non ci sono
    navigate("/");
    return;
  }

  // Estraggo il task dai dati passati
  const task = location.state.task;

  const { removeTask, updateTask } = useContext(TaskContext);

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

      <button
        className="btn btn-danger me-2"
        onClick={() => setShowDeleteModal(true)}
      >
        Elimina task
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setShowUpdateModal(true)}
      >
        Modifica task
      </button>
      {/* Modale per confermare la cancellazione */}
      <Modal
        title="Conferma Eliminazione"
        content="Sei sicuro di voler eliminare questa task?"
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          removeTask(task.id);
          setShowDeleteModal(false);
          navigate("/");
        }}
        confirmText="Elimina"
      />
      <EditTaskModal
        task={task}
        show={showUpdateModal}
        onClose={() => setShowUpdateModal(false)}
        onSave={(updatedTask) => {
          updateTask(task.id, updatedTask).then(() => {
            setShowUpdateModal(false);
            navigate("/"); // Torna alla home dopo l'aggiornamento
          });
        }}
      />
    </>
  );
}
