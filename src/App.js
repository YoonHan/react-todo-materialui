import React, { Component } from 'react';
import styles from './App.module.css';
import AppContainer from './AppContainer';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <AppContainer />
      </div>
    );
  }
}

export default App;
