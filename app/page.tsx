'use client';
import React, { useState } from 'react';
import MyShifts from './components/myShifts';
import AvailableShifts from './components/availableShifts';
import styles from './styles/shifts.module.css';

const ShiftsPage = () => {
    const [activeTab, setActiveTab] = useState<'myShifts' | 'availableShifts'>('myShifts');

    const handleTabChange = (tab: 'myShifts' | 'availableShifts') => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                <button
                    className={`${styles.tabButton} ${activeTab === 'myShifts' ? styles.active : ''}`}
                    onClick={() => handleTabChange('myShifts')}
                >
                    My Shifts
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'availableShifts' ? styles.active : ''}`}
                    onClick={() => handleTabChange('availableShifts')}
                >
                    Available Shifts
                </button>
            </div>
            <div className={styles.tabContent}>
                {activeTab === 'myShifts' && <MyShifts />}
                {activeTab === 'availableShifts' && <AvailableShifts />}
            </div>
        </div>
    );
};

export default ShiftsPage;
