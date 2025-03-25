import { useState, useRef } from "react";
import Modal from "./Modal";

export default function EditTaskModal({ show, onClose, task, onSave }) {
  const [editedTask, setEditedTask] = useState(task);
  const editFormRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedTask);
  };
  const changeEditedTask = (key, event) => {
    setEditedTask((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  const { title, description, status } = editedTask;
  return (
    <Modal
      title="Modifica task"
      content={
        <form ref={editFormRef} onSubmit={handleSubmit}>
          <label>
            Nome task:
            <input
              type="text"
              className="form-control"
              name="title"
              value={title}
              onChange={(e) => changeEditedTask("title", e)}
            />
          </label>
          <label>
            Descrizione:
            <input
              type="text"
              className="form-control"
              name="description"
              value={description}
              onChange={(e) => changeEditedTask("description", e)}
            />
          </label>
          <label>
            Stato:
            <select
              className="form-select form-control"
              id="status"
              name="status"
              value={status}
              onChange={(e) => changeEditedTask("status", e)}
            >
              <option value="To do">To do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </label>
        </form>
      }
      confirmText="Salva"
      show={show}
      onClose={onClose}
      onConfirm={() => editFormRef.current.requestSubmit()}
    />
  );
}
