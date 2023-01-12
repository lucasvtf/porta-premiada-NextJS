import React from 'react';
import styles from '../../styles/Presentes.module.css';

export default function Presente() {
  return (
    <div className={styles.presente}>
      <div className={styles.tampa} />
      <div className={styles.corpo} />
      <div className={styles.laco1} />
      <div className={styles.laco2} />
    </div>
  );
}
