import React, { Component } from 'react';
import styles from './TodoListsContainer.module.css';
import TodoItem from '../TodoItem';

class TodoListsContainer extends Component {
  render() {
    let todoLists = this.props.todos.map((todo, index) => {
      return <TodoItem todo={todo} key={index} />
    });

    return (
      <div>
        <div className={styles['bar']}>Todos</div>
        { todoLists }
      </div>
    );
  }
}

export default TodoListsContainer;