'use client';
import React from 'react';
import styles from '../styles/shifts.module.css';

interface Shift {
    date: string;
    time: string;
}

const AvailableShiftsTab2 = () => {
    const shifts: Shift[] = [
        { date: '2024-10-20', time: '09:00 AM',  },
        { date: '2024-10-21', time: '02:00 PM',  },
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

export default AvailableShiftsTab2;
