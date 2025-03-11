import React from "react";
import EventCard from "../components/tile";
import event1 from "../assets/event1.jpeg";
import event2 from "../assets/events2.jpeg";
import event3 from "../assets/event3.png";
const events = [
  {
    id: 1,
    title: "Food Drive for Street Families",
    date: "March 15, 2025",
    location: "Nairobi, Kenya",
    description: "Providing essential food supplies to homeless families in Nairobi.",
    image: event1,
  },
  {
    id: 2,
    title: "School Supplies Donation",
    date: "April 10, 2025",
    location: "Kisumu, Kenya",
    description: "Helping underprivileged kids with school books, uniforms, and stationery.",
    image:event2,
  },
  {
    id: 3,
    title: "Medical Aid Camp",
    date: "May 5, 2025",
    location: "Mombasa, Kenya",
    description: "Providing free medical checkups and essential medicines for the needy.",
    image: event3,
  },
];

const EventsPage = () => {
  return (
    <div className="events-container">
      <h1 className="page-title">Upcoming Charity Events</h1>
      <div className="events-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
