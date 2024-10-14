'use client';
import React, { useState } from 'react';
import MyShifts from './components/myShifts';
import AvailableShifts from './components/availableShifts';
import styles from './styles/shifts.module.css';

const Shifts: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'myShifts' | 'availableShifts'>('myShifts');

    const handleTabChange = (tab: 'myShifts' | 'availableShifts') => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.container}>
            <h2>Shifts</h2>
            <div className={styles.tabs}>
                <button 
                    className={activeTab === 'myShifts' ? styles.active : ''} 
                    onClick={() => handleTabChange('myShifts')}
                >
                    My Shifts
                </button>
                <button 
                    className={activeTab === 'availableShifts' ? styles.active : ''} 
                    onClick={() => handleTabChange('availableShifts')}
                >
                    Available Shifts
                </button>
            </div>
            {activeTab === 'myShifts' && <MyShifts />}
            {activeTab === 'availableShifts' && <AvailableShifts />}
        </div>
    );
};

export default Shifts;
