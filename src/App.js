import React, { Component } from 'react';
import styles from './App.module.css';
import AppContainer from './AppContainer';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: 'jss-insertion-point',
});


class App extends Component {
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <div className={styles['app']}>
          <AppContainer />
        </div>
      </JssProvider>
    );
  }
}

export default App;
