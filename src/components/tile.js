import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image} alt={event.title} />
      </div>
      <div className="event-content">
        <h2>{event.title}</h2>
        <p className="event-date">{event.date}</p>
        <p className="event-location">{event.location}</p>
        <p className="event-description">{event.description}</p>
        <button className="donate-btn">Donate Now</button>
      </div>
    </div>
  );
};

export default EventCard;
