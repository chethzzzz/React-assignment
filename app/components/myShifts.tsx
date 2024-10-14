'use client';
import React from 'react';
import styles from '../styles/shifts.module.css'

// Define the Shift interface
interface Shift {
    date: string;
    time: string;
    location: string;
}

const MyShifts: React.FC = () => {
    // Use the Shift interface for the shifts array
    const shifts: Shift[] = [
        { date: '2024-10-15', time: '09:00 AM', location: 'City A' },
        { date: '2024-10-16', time: '10:00 AM', location: 'City B' },
    ];

    const handleCancel = (shift: Shift) => {
        // Logic to cancel the shift
        console.log(`Cancel shift: ${JSON.stringify(shift)}`);
    };

    // Correctly type the groupedShifts object
    const groupedShifts: { [key: string]: Shift[] } = shifts.reduce((acc, shift) => {
        (acc[shift.date] = acc[shift.date] || []).push(shift);
        return acc;
    }, {} as { [key: string]: Shift[] });

    return (
        <div className={styles.container}>
            <h2>My Shifts</h2>
            {Object.entries(groupedShifts).map(([date, shifts]) => (
                <div key={date} className={styles.group}>
                    <h3>{date}</h3>
                    <ul>
                        {shifts.map((shift, index) => (
                            <li key={index}>
                                {shift.time} - {shift.location}
                                <button onClick={() => handleCancel(shift)}>Cancel</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default MyShifts;
