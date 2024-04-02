import React, { useState, useEffect } from 'react';
import './EventsPage.css';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
     fetch('/api/events')
      .then(response => response.json())
      .then(data => setEvents(data))
       .catch(error => console.error('Error fetching events', error));

    const dummyEvents = [
      { id: 1, title: 'Wildlife Festival', date: '2024-05-15', location: 'Kidepo National Park' },
      { id: 2, title: 'Educational Workshop', date: '2024-06-20', location: 'Visitor Center' },
      { id: 3, title: 'Special Tour', date: '2024-07-10', location: 'Various Locations' }
    ];
    setEvents(dummyEvents);
  }, []);

  return (
    <div className="events-page">
      <header>
        <h1  style={{color: "darkblue"}}>Upcoming Events</h1>
        <p>Plan your visit to Kidepo National Park with these exciting events.</p>
      </header>
      <main>
        <section>
          <h2  style={{color: "darkblue"}}>Events Schedule</h2>
          <ul className="event-list">
            {events.map(event => (
              <li key={event.id}>
                <h3  style={{color: "darkblue"}}>{event.title}</h3>
                <p>Date: {event.date}</p>
                <p>Location: {event.location}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default EventsPage;
