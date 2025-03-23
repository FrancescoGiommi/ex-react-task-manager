import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import "./App.css";

//Components
import NavBar from "./components/NavBar";
//Pages
import AddTask from "./pages/TaskLIst";
import TaskList from "./pages/AddTask";
/* Sei stato assunto per costruire un Task Manager Avanzato, un’app web che permette agli utenti di creare,
 modificare, organizzare ed eliminare task in modo intuitivo ed efficiente. */

/* L'app dovrà supportare filtri avanzati, ricerca ottimizzata, ordinamento e conferme di azione con modali. 
Inoltre, dovrà garantire un'esperienza fluida con prestazioni ottimizzate. */

//! Milestone 1 - Setup e Routing
/* Clonare il backend del progetto, impostare il frontend con Vite e configurare il routing con react-router-dom.

   1. Clonare e avviare il backend:

        Per gestire i task, utilizzeremo un backend già pronto.

        Cloniamo il repository

        https://github.com/boolean-it/progettino-spec-frontend-back.git

        e avviamo il server con:

        npm install
        npm run start

        Dopo qualche secondo, nel terminale apparirà un messaggio simile a:

         Server in ascolto su http://localhost:3001

        Questo URL dovrà essere utilizzato per configurare il frontend.

   2. Impostiamo il frontend:
        Creiamo il progetto con Vite.
        Installiamo react-router-dom nel progetto.
        Creiamo il router principale in App.jsx utilizzando BrowserRouter.

   3. Definiamo due pagine principali:
        Lista dei Task (TaskList.jsx) → mostrerà l'elenco dei task.
        Aggiungi Task (AddTask.jsx) → conterrà il form per aggiungere un nuovo task.

   4. Aggiungere una barra di navigazione con NavLink, per permettere all'utente di spostarsi tra le pagine.

   5. Definire le rotte con Routes e Route, associando ogni percorso alla rispettiva pagina. */

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route element={<TaskList />} path="/" />
            <Route element={<AddTask />} path="/addTask" />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
