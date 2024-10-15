'use client';
import React from 'react';
import styles from '../styles/shifts.module.css';

interface Shift {
    date: string;
    time: string;

}

const AvailableShiftsTab3 = () => {
    const shifts: Shift[] = [
        { date: '2024-10-22', time: '10:00 AM', },
        { date: '2024-10-23', time: '01:00 PM',  },
    ];

    const handleBook = (shift: Shift) => {
        console.log(`Book shift: ${JSON.stringify(shift)}`);
    };

    return (
        <div className={styles.group}>
            <h3>Available Shifts - Tab 3</h3>
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

export default AvailableShiftsTab3;
