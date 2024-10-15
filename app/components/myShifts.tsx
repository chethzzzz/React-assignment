'use client';
import React from 'react';
import styles from '../styles/shifts.module.css';

interface Shift {
    date: string;
    time: string;
    location: string;
}

const MyShifts = () => {
    const shifts: Shift[] = [
        { date: '2024-10-15', time: '09:00 AM', location: 'City A' },
        { date: '2024-10-16', time: '10:00 AM', location: 'City B' },
    ];

    const handleCancel = (shift: Shift) => {
        console.log(`Cancel shift: ${JSON.stringify(shift)}`);
    };

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
                    <ul className={styles.shiftList}>
                        {shifts.map((shift, index) => (
                            <li key={index} className={styles.shiftItem}>
                                <span>
                                    {shift.time} - {shift.location}
                                </span>
                                <button 
                                    className={styles.cancelButton} 
                                    onClick={() => handleCancel(shift)}
                                >
                                    Cancel
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default MyShifts;
