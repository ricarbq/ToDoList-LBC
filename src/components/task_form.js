import React from 'react';

const TaskForm = ({
  addTask,
  setTaskDescription,
  taskDescription
}) => {
  return (
    <div className="d-flex align-items-end">
      <div className="me-2">
        <label className="form-label">
          Descrição da tarefa:
        </label>
        <input
          type="text"
          className="form-control"
          id="taskDescription"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>
      <button
        className="btn-teal"
        style={{ marginRight: '48px' }}
        onClick={addTask}
      >
        Adicionar Tarefa
      </button>
    </div>
  );
};

export default TaskForm;
