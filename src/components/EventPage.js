import React, { useEffect, useState } from "react";

const EventPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/Detail.json")
      .then((response) => response.json())
      .then((data) => setEvents(data.events))
      .catch((error) => console.error("Error fetching event data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center py-10">Events</h1>
      <div className="max-w-6xl mx-auto px-4">
        {events.map((event, index) => (
          <div key={index} className="mb-12 p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">{event.name}</h2>
            <p className="text-lg mb-6">{event.description}</p>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Number of Members:</h3>
              <p>{event.number_of_members}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Prerequisites:</h3>
              <ul className="list-disc ml-5">
                {event.prerequisites.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Rounds:</h3>
              <ul className="list-disc ml-5">
                {event.rounds.map((round, idx) => (
                  <li key={idx}>{round}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Instructions:</h3>
              <ul className="list-disc ml-5">
                {event.instructions.map((instruction, idx) => (
                  <li key={idx}>{instruction}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Venue:</h3>
              <p>{event.venue}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Prizes:</h3>
              <p>1st Prize: {event.prize.first}</p>
              <p>2nd Prize: {event.prize.second}</p>
              <p>3rd Prize: {event.prize.third}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
