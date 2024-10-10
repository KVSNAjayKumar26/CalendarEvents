import React, { useState } from 'react'
import Calendar from './Calendar';
import EventModal from './EventModal';
import { format } from 'date-fns';
import EventList from './EventList';

const CalendarApp = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null); 

    const openModal = (date) => {
        setSelectedDate(date);
        setModalOpen(true);
    };

    const addEvent = (event) => {
        setEvents([...events, { ...event, date: selectedDate }]);
        setModalOpen(false);
    };

    const deleteEvent = (eventToDelete) => {
        setEvents(events.filter(event => event !== eventToDelete));
    };

    const getEventForSelectedDate = () => {
        return events.filter(
            (event) => format(event.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
        );
    };

  return (
    <div className='calendar-app'>
        <Calendar
        currentDate={currentDate}
        events={events}
        openModal={openModal}
        />
        {selectedDate && (
            <EventList
            events={getEventForSelectedDate()}
            deleteEvent={deleteEvent}
            />
        )}
        {isModalOpen && (
            <EventModal
            addEvent={addEvent}
            closeModal={() => setModalOpen(false)}
            />
        )}

    </div>
  );
};

export default CalendarApp;