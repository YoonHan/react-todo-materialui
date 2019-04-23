import React, { Component } from 'react';
import styles from './TodoItem.module.css';
import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/Clear';

class TodoItem extends Component {
  render() {
    return (
      <div className={styles['wrapper']}>
        <p className={styles['todo-name']}>{this.props.todo}</p>
        <IconButton style={{height: '50px'}}>
          <Clear style={{color: 'crimson'}} />
        </IconButton>
      </div>
    );
  }
}


export default TodoItem;