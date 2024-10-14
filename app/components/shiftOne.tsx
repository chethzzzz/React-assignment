'use client';
import React from 'react';
import styles from '../styles/shifts.module.css'

// Define the Shift interface
interface Shift {
    date: string;
    time: string;
    location: string;
}

const AvailableShiftsTab1: React.FC = () => {
    // Use the Shift interface for the shifts array
    const shifts: Shift[] = [
        { date: '2024-10-18', time: '08:00 AM', location: 'City A' },
        { date: '2024-10-19', time: '11:00 AM', location: 'City B' },
    ];

    const handleBook = (shift: Shift) => {
        // Logic to book the shift
        console.log(`Book shift: ${JSON.stringify(shift)}`);
    };

    return (
        <div>
            <h3>Available Shifts - Tab 1</h3>
            <ul>
                {shifts.map((shift, index) => (
                    <li key={index}>
                        {shift.date} - {shift.time} - {shift.location}
                        <button onClick={() => handleBook(shift)}>Book</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AvailableShiftsTab1;
