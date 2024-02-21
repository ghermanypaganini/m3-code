import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "id-" + Date.now(),
      title: "Minha primeira tarefa",
      description: "Descrição",
      done: false,
    },
  ]);

  const [modalOpen, setModalOpen] = useState(true);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-950">
      <div className="flex flex-col h-2/3 w-1/2">
        <div className="flex justify-between items-center"
          <h1 className="text-slate-200 text-4x1 mb-2.5">Todo App</h1>
          <button onClick={openModal} className="py-1.5 px-3 rounded-lg border border-emerald-500 text-emerald-500">
            + Nova Tarefa 
          </button>
        </div>
        <div className="flex flec-col divide-y divide-slate-700 flex-grow bg-slate-900 rounded-xl px-5 py-2.5">
          {tasks.map((task) => {
            return (
              <div key={task.id} className="text.slate-200 text-sm mb-2.5">
                <p className="font-medium">{task.title}</p>
                <p className="text-slate-400">{task.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    
    {ModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl">
          <h2 className="text-2xl mb-4">Nova Tarefa</h2>
          <input type="text" className="border mb-4 p-2 w-full" placeholder="Título" />
          <textarea className="border p-2 w-full" placeholder="Descrição"></textarea>
          <div className="flex justify-end mt-4">
            <button onClick={closeModal} className="py-1.5 px-3 rounded-lg border border-red-500 text-red-500">
              Cancelar
            </button>
            <button className="py-1.5 px-3 rounded-lg border border-emerald-500 text-emerald-500 ml-2">
              Salvar
            </button>
          </div>
        </div>
      </div>
    ) : null}
    </div>   
  );
}

export default App;
