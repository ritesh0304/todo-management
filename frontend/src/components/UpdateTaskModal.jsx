import React from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root'); // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const UpdateTaskModal = ({ isOpen, onRequestClose, task, handleChange, handleSubmitModal }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Update Task</h2>
      <form className='UpdateModal task'  onSubmit={handleSubmitModal}>
        <div className='taskTitle'>
        Title : <label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
          />
          </label>
        </div>
        <div className='taskDescription'>
        Description : <label>
          <input
            type="text"
            name="description"
            value={task.description}
            onChange={handleChange}
          />
          </label>
        </div>
        <div className='taskDueDate'>
        Due Date : <label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
          />
          </label>
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onRequestClose}>Cancel</button>
      </form>
    </Modal>
  );
};

export default UpdateTaskModal;
