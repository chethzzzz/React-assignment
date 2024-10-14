'use client';
import React from 'react';
import styles from '../styles/shifts.module.css';

// Define the Shift interface
interface Shift {
    date: string;
    time: string;
    location: string;
}

const AvailableShiftsTab3: React.FC = () => {
    // Use the Shift interface for the shifts array
    const shifts: Shift[] = [
        { date: '2024-10-22', time: '10:00 AM', location: 'City E' },
        { date: '2024-10-23', time: '01:00 PM', location: 'City F' },
    ];

    const handleBook = (shift: Shift) => {
        console.log(`Book shift: ${JSON.stringify(shift)}`);
    };

    return (
        <div>
            <h3>Available Shifts - Tab 3</h3>
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

export default AvailableShiftsTab3;
