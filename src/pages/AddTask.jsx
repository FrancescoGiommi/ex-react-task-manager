import { useState, useRef } from "react";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const descriptionRef = useRef();
  const statusRef = useRef();

  const handrleSubmit = (e) => {
    e.preventDefault();
    const description = descriptionRef.current.value;
    const status = statusRef.current.value;

    const newTask = {
      title,
      description,
      status,
    };
    console.log(newTask);
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
          />
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
