import React from 'react'
import './EventList.scss';
const EventList = ({ events, deleteEvent }) => {
  return (
    <div className='event-list'>
        <h3>Events for the day</h3>
        {events.length > 0 ? (
            events.map((event, index) => (
                <div key={index} className='event-item'>
                    <div className='event-title'>{event.title}</div>
                    <div className='event-actions'>
                        <button onClick={() => deleteEvent(event)}>Delete</button>
                    </div>
                    </div>
            ))
        ) : (
            <p>No events for this day.</p>
        )}
    </div>
  );
};

export default EventList;