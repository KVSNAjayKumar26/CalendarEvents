import { addDays, endOfMonth, format, startOfMonth } from 'date-fns'
import React from 'react'

const Calendar = ({ currentDate, events, openModal }) => {
    const start = startOfMonth(currentDate);
    const end = endOfMonth(currentDate);
    const days = [];

    let day = start;
    while (day <= end) {
        days.push(day);
        day = addDays(day, 1);
    }
  return (
    <div className='calendar-grid'>
        {days.map((day, index) => (
            <div key={index} className='calendar-day' onClick={() => openModal(day)}>
                <div className='day-number'>{format(day, "d")}</div>
                <div className='events'>
                    {events
                    .filter((event) => format(event.date, "yyyy-MM-dd") === format(day, "yyyy-MM-dd"))
                    .map((event, i) => (
                        <div key={i} className='event'>
                            {event.title}
                            </div>
                    ))
                    }
                    </div>
                </div>
        ))}
    </div>
  )
}

export default Calendar;