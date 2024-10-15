'use client';
import React, { useState } from 'react';
import AvailableShiftsTab1 from './shiftOne';
import AvailableShiftsTab2 from './shiftTwo';
import AvailableShiftsTab3 from './shiftThree';
import styles from '../styles/shifts.module.css';

const AvailableShifts = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (tab: number) => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.container}>
            <h2>Available Shifts</h2>
            <div className={styles.tabs}>
                <button
                    className={`${styles.tabButton} ${activeTab === 1 ? styles.active : ''}`}
                    onClick={() => handleTabChange(1)}
                >
                    Helsinki
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 2 ? styles.active : ''}`}
                    onClick={() => handleTabChange(2)}
                >
                    Nairobi
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 3 ? styles.active : ''}`}
                    onClick={() => handleTabChange(3)}
                >
                    Tokyo
                </button>
            </div>
            {activeTab === 1 && <AvailableShiftsTab1 />}
            {activeTab === 2 && <AvailableShiftsTab2 />}
            {activeTab === 3 && <AvailableShiftsTab3 />}
        </div>
    );
};

export default AvailableShifts;
