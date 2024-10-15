'use client';
import React from 'react';
import styles from '../styles/shifts.module.css';

interface Shift {
    date: string;
    time: string;
}

const AvailableShiftsTab1 = () => {
    const shifts: Shift[] = [
        { date: '2024-10-18', time: '08:00 AM', },
        { date: '2024-10-19', time: '11:00 AM' },
    ];

    const handleBook = (shift: Shift) => {
        console.log(`Book shift: ${JSON.stringify(shift)}`);
    };

    return (
        <div className={styles.group}>
            <h3>Available Shifts</h3>
            <ul className={styles.shiftList}>
                {shifts.map((shift, index) => (
                    <li key={index} className={styles.shiftItem}>
                        <span>
                            {shift.date} - {shift.time} 
                        </span>
                        <button 
                            className={styles.bookButton} 
                            onClick={() => handleBook(shift)}
                        >
                            Book
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AvailableShiftsTab1;
