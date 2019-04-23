import React, { Component } from 'react';
import styles from './TodoListsContainer.module.css';
import TodoItem from '../TodoItem';

class TodoListsContainer extends Component {
  render() {
    let todoLists = this.props.todos.map((todo) => {
      return <TodoItem todo={todo} />
    });

    return (
      <div>
        { todoLists }
      </div>
    );
  }
}

export default TodoListsContainer;