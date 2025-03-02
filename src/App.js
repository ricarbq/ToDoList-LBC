import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from './components/pagination'; 
import Footer from './components/footer';
import { format } from 'date-fns'; 
import TaskForm from './components/task_form';
import TaskList from './components/task_list';

function App() {

  const [tasks, setTasks] = useState([]);
  const [taskDescription, setTaskDescription] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const totalTasks = tasks.length;

  const addTask = () => {
    if (taskDescription.trim() !== '') {
      const newTask = {
        id: Date.now(),
        description: taskDescription,
        createdDate: new Date(),
        isCompleted: false,
        conclusionDate: null,
      };
      setTasks([newTask, ...tasks]);
      setTaskDescription('');

      toast.success("Tarefa adicionada");
    }
  };

  const toggleCompletion = (id) => {
    setTasks((tasks) => {
      return tasks.map((task) => {
        if (task.id === id) {
          const isNowCompleted = !task.isCompleted;

          if (isNowCompleted) {
            toast.success("Tarefa concluída!");
          }

          return {
            ...task,
            isCompleted: isNowCompleted,
            conclusionDate: isNowCompleted ? new Date() : null,
          };
        }
        return task;
      });
    });
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.success("Tarefa excluída!");
  };

  const formatDate = (date) => {
    return format(date, 'dd/MM/yyyy, HH:mm');
  };

  const totalPages = Math.max(1, Math.ceil(tasks.length / rowsPerPage));

  const indexOfLastTask = currentPage * rowsPerPage;
  const indexOfFirstTask = indexOfLastTask - rowsPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const changePage = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <header className="container main-container">
        <div className="row align-items-center justify-content-center">
          
          <div className='new-container logo-container'>
            <img
              src="/Assets_Graficos/logotipo-LBC-transparente.png"
              alt="Logo"
              className="big-logo"
            />
          </div>

          
          <div className="new-container col-12 d-flex justify-content-center">
            <div className="slightly-rounded-container">
              <h1 className="d-flex fw-bold align-items-center title-container" >
                As minhas tarefas
              </h1>

              
              <div className="d-flex align-items-end justify-content-between w-100">
                
                <TaskForm
                addTask={addTask}
                setTaskDescription={setTaskDescription}
                taskDescription={taskDescription}
                />

                
                <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                changePage={changePage}
                rowsPerPage={rowsPerPage}
                handleRowsPerPageChange={handleRowsPerPageChange}
                />
              </div>

              
              <TaskList
              currentTasks={currentTasks}
              toggleCompletion={toggleCompletion}
              formatDate={formatDate}
              deleteTask={deleteTask}
              />

              <div className="d-flex justify-content-between align-items-center w-100">
                
                <div className="d-flex justify-content-center align-items-center">
                  <p className="total mb-0">Total de tarefas: {totalTasks}</p>
                </div>

                
                <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                changePage={changePage}
                rowsPerPage={rowsPerPage}
                handleRowsPerPageChange={handleRowsPerPageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Footer/>
    </div>
  );
};

export default App;
