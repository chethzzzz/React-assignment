'use client';

import React from 'react';
import styles from '../styles/shifts.module.css';

// Define the Shift interface
interface Shift {
    date: string;
    time: string;
    location: string;
}

const AvailableShiftsTab2: React.FC = () => {
    // Use the Shift interface for the shifts array
    const shifts: Shift[] = [
        { date: '2024-10-20', time: '09:00 AM', location: 'City C' },
        { date: '2024-10-21', time: '02:00 PM', location: 'City D' },
    ];

    const handleBook = (shift: Shift) => {
        console.log(`Book shift: ${JSON.stringify(shift)}`);
    };

    return (
        <div>
            <h3>Available Shifts - Tab 2</h3>
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

export default AvailableShiftsTab2;
