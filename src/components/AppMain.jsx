export default function AppMain() {
  const MainName = "Welcom to my react app";
  const TaskList = "Task Manager";

  const tasks = [
    {
      id: 1,
      title: "Implementare la homepage",
      priority: 1,
      estimatedTime: 120,
      state: "completed",
    },
    {
      id: 2,
      title: "Sviluppare il menu di navigazione",
      priority: 2,
      estimatedTime: 60,
      state: "completed",
    },
    {
      id: 3,
      title: "Creare il footer del sito",
      priority: 3,
      estimatedTime: 30,
      state: "completed",
    },
    {
      id: 4,
      title: "Ottimizzare le performance",
      priority: 1,
      estimatedTime: 180,
      state: "completed",
    },
    {
      id: 5,
      title: "Scrivere test per i componenti",
      priority: 2,
      estimatedTime: 90,
      state: "completed",
    },
    {
      id: 6,
      title: "Implementare la pagina dei contatti",
      priority: 3,
      estimatedTime: 60,
      state: "completed",
    },
    {
      id: 7,
      title: "Aggiungere animazioni CSS",
      priority: 2,
      estimatedTime: 30,
      state: "backlog",
    },
    {
      id: 8,
      title: "Integrare l'API di autenticazione",
      priority: 1,
      estimatedTime: 120,
      state: "in_progress",
    },
    {
      id: 9,
      title: "Aggiornare la documentazione",
      priority: 3,
      estimatedTime: 60,
      state: "backlog",
    },
    {
      id: 10,
      title: "Rifattorizzare il codice CSS",
      priority: 2,
      estimatedTime: 90,
      state: "in_progress",
    },
  ];
  console.log(tasks);

  const CurrentTasks = tasks.filter(
    (currentTask) => currentTask.state !== "completed"
  );
  const CompletedTasks = tasks.filter(
    (currentTask) => currentTask.state === "completed"
  );

  return (
    <main>
      <h1>{MainName}</h1>
      <h1 className="TaskTitle">{TaskList}</h1>

      <section className="notCompleted">
        <h2>Current Task (4)</h2>
        <ul>
          {CurrentTasks.map((task, index) => (
            <li key={index}>
              <h3>
                {task.title}
                <button>{task.state}</button>
              </h3>
              <div>Priority: {task.priority}</div>
              <div className="time">Est. time {task.estimatedTime}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="completed">
        <h2>Completed Task (6)</h2>
        <ul>
          {CompletedTasks.map((task, index) => (
            <li key={index}>
              <h3>
                {task.title}
                <button>{task.state}</button>
              </h3>
              <div>Priority: {task.priority}</div>
              <div className="time">Est. time {task.estimatedTime}</div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
