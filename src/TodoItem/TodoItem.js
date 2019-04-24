import React, { Component } from 'react';
import styles from './TodoItem.module.css';
import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/Clear';

class TodoItem extends Component {

  handleOnClick = () => {
    const { todos, todo, deleteTodoItem } = this.props;
    deleteTodoItem(todos.indexOf(todo));
  }

  render() {
    return (
      <div className={styles['wrapper']}>
        <p className={styles['todo-name']}>{this.props.todo}</p>
        <IconButton style={{height: '50px'}} onClick={this.handleOnClick}>
          <Clear style={{color: 'crimson'}} />
        </IconButton>
      </div>
    );
  }
}


export default TodoItem;