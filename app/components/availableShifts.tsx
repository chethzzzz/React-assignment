'use client';
import React, { useState } from 'react';
import AvailableShiftsTab1 from './shiftOne';
import AvailableShiftsTab2 from './shiftTwo';
import AvailableShiftsTab3 from './shiftThree';
import styles from '../styles/shifts.module.css'

const AvailableShifts: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(1); // Type for activeTab

    const handleTabChange = (tab: number) => { // Explicitly typing tab as number
        setActiveTab(tab);
    };

    return (
        <div className={styles.container}>
            <h2>Available Shifts</h2>
            <div className={styles.tabs}>
                <button onClick={() => handleTabChange(1)}>Tab 1</button>
                <button onClick={() => handleTabChange(2)}>Tab 2</button>
                <button onClick={() => handleTabChange(3)}>Tab 3</button>
            </div>
            {activeTab === 1 && <AvailableShiftsTab1 />}
            {activeTab === 2 && <AvailableShiftsTab2 />}
            {activeTab === 3 && <AvailableShiftsTab3 />}
        </div>
    );
};

export default AvailableShifts;

