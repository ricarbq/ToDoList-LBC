import React from 'react';

const TaskList = ({
  currentTasks,
  toggleCompletion,
  formatDate,
  deleteTask
}) => {
  return (
    <table className="table main-table">
      <thead>
        <tr className='row-border'>
          <th scope="col" className="row-spacing">
            Tarefa
          </th>
          <th scope="col" className="row-spacing">
            Data de Criação
          </th>
          <th scope="col" className="row-spacing">
            Data de Conclusão
          </th>
          <th scope="col" className="bg-transparent"></th>
        </tr>
      </thead>
      <tbody>
        {currentTasks.map((task) => (
          <tr key={task.id} className='row-border'>
            <td className="row-spacing">
              <input
                type="checkbox"
                checked={task.isCompleted}
                className="me-2 form-check-input"
                onChange={() => toggleCompletion(task.id)}
              />
              <span
                className='page-info'
                style={{
                  textDecoration: task.isCompleted ? 'line-through' : 'none',
                  marginRight: '10px'
                }}
              >
                {task.description}
              </span>
              {task.isCompleted && (
                <span
                  className="badge bg-success"
                  style={{
                    borderRadius: '8px',
                    padding: '4px 8px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}
                >
                  Concluída
                </span>
              )}
            </td>
            <td className="page-info row-spacing">
              {formatDate(task.createdDate)}
            </td>
            <td className="page-info row-spacing">
              {task.isCompleted ? formatDate(task.conclusionDate) : '-'}
            </td>
            <td className="align-middle bg-transparent">
              <button
                className="custom-delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
