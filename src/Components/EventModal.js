import React, { useState } from 'react'

const EventModal = ({ addEvent, closeModal}) => {
    const [title, setTitle] = useState("");

    const handleSubmit = () => {
        addEvent({ title });
    };
  return (
    <div className='Modal'>
        <div className='modal-content'>
            <h2>Add Event</h2>
            <input 
            type='text'
            placeholder='Event Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleSubmit}>Save</button>
            <button onClick={closeModal}>Cancel</button>
        </div>
    </div>
  )
}

export default EventModal;