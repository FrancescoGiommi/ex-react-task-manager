// Importo useState e useRef da react
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// Importo useTasks da useTasks
import useTasks from "../customHooks/useTasks";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const descriptionRef = useRef();
  const statusRef = useRef();
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";
  const { addTask } = useTasks();

  const navigate = useNavigate();

  // Controllo se il titolo è valido
  const isValidTitle =
    title.trim().length > 0 &&
    !title.split("").some((char) => symbols.includes(char));

  // Funzione per gestire il submit del form
  const handrleSubmit = async (e) => {
    e.preventDefault();
    const description = descriptionRef.current.value;
    const status = statusRef.current.value;

    // Creo l'oggetto task
    const newTask = {
      title,
      description,
      status,
    };
    try {
      // Con await aspetto il risultato di addTask
      const result = await addTask(newTask);
      if (result.success) {
        alert("Task aggiunto con successo");
        setTitle("");
        descriptionRef.current.value = "";
        statusRef.current.value = "To do";
      } else {
        alert("Errore: " + result.message);
      }
    } catch (error) {
      console.error("Errore nell'aggiunta del task:", error);
      alert("Errore imprevisto nell'aggiunta del task");
    }

    // Reindirizzo alla home page
    navigate("/");
  };
  return (
    <div>
      <h1>Aggiungi Task</h1>
      <hr />
      <form onSubmit={handrleSubmit}>
        <div className="mb-3">
          {/* Titolo */}
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <p style={{ color: isValidTitle ? "green" : "red" }}>
            {isValidTitle ? "Titolo valido" : "Titolo non valido"}
          </p>
        </div>
        <div>
          {/* Descrizione */}
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className="mb-3">
          {/* Stato task */}
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select className="form-select" id="status" ref={statusRef}>
            <option value="To do">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Aggiungi task
        </button>
      </form>
    </div>
  );
}
