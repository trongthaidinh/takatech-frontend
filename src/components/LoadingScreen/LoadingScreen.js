import React from 'react';
import styles from './LoadingScreen.module.scss';
import logo from '~/assets/images/takatech-logo.png';

const LoadingScreen = ({ isLoading }) => {
    return (
        <div className={`${styles.loading} ${!isLoading ? styles.slideUp : ''}`}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <div className={styles.loadingWrapper}>
                <div className={styles.spinnerContainer}>
                    <div className={styles.dot1}></div>
                    <div className={styles.dot2}></div>
                    <div className={styles.dot3}></div>
                </div>
                <div className={styles.loadingText}>Đang tải</div>
            </div>
        </div>
    );
};

export default LoadingScreen;
