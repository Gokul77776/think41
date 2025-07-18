import React, { useState } from 'react';

const generateTimeSlots = (start, end) => {
  const slots = [];
  const startTime = new Date(`2025-01-01T${start}:00`);
  const endTime = new Date(`2025-01-01T${end}:00`);

  while (startTime < endTime) {
    const nextTime = new Date(startTime.getTime() + 30 * 60000);
    slots.push({
      time: `${startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${nextTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
      booked: false,
    });
    startTime.setTime(nextTime.getTime());
  }

  return slots;
};

export default function App() {
  const [slots, setSlots] = useState(generateTimeSlots("09:00", "17:00"));

  const handleBooking = (index) => {
    setSlots(prev =>
      prev.map((slot, i) => i === index ? { ...slot, booked: !slot.booked } : slot)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Book a 30-Minute Appointment</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl">
        {slots.map((slot, index) => (
          <div
            key={index}
            className={`border rounded-xl p-4 text-center cursor-pointer shadow-md transition ${
              slot.booked ? 'bg-red-300 text-white' : 'bg-white hover:bg-green-100'
            }`}
            onClick={() => handleBooking(index)}
          >
            <p className="text-lg font-medium">{slot.time}</p>
            <p className="text-sm mt-2">
              {slot.booked ? 'Booked' : 'Available'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
