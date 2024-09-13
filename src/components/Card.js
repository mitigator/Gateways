import React from 'react';
import '../animation/Card.css'; 

export const Cards = () => {
  return (
    <div className="bg-deep-black text-center py-16 px-8 space-y-16">
      <h1 className="text-5xl font-bold text-orange">Event Cards</h1>

      <div>
        <h2 className="text-3xl font-semibold text-orange mb-10">Technical Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="event-card">
              <div className="card-content">
                <div className="card-front">
                  <h3 className="text-2xl font-bold">Tech Event {idx + 1}</h3>
                  <p className="mt-4">This is a brief description of the technical event.</p>
                </div>
                <div className="card-back">
                  <h3 className="text-2xl font-bold">Details</h3>
                  <p className="mt-4">More information and details about the event.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-orange mb-10">Non-Technical Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className="event-card">
              <div className="card-content">
                <div className="card-front">
                  <h3 className="text-2xl font-bold">Non-Tech Event {idx + 1}</h3>
                  <p className="mt-4">This is a brief description of the non-technical event.</p>
                </div>
                <div className="card-back">
                  <h3 className="text-2xl font-bold">Details</h3>
                  <p className="mt-4">More information and details about the event.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
