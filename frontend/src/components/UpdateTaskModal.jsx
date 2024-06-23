import React from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root'); // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const UpdateTaskModal = ({ isOpen, onRequestClose, task, handleChange, handleSubmitModal }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Update Task</h2>
      <form onSubmit={handleSubmitModal}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={task.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onRequestClose}>Cancel</button>
      </form>
    </Modal>
  );
};

export default UpdateTaskModal;
