import React from 'react';
import styles from './DummyTextContainer.module.css';

const DummyTextContainer = (props) => {
  return (
    <div className={styles['text-container']}>
      { props.text }
    </div>
  )
}

export default DummyTextContainer;