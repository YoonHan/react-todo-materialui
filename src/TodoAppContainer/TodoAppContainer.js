import React, { Component } from 'react';
import styles from './TodoAppContainer.module.css';
import AddTodoList from '../AddTodoList';
import TodoListContainer from '../TodoListsContainer';

class TodoAppContainer extends Component {

  state = {
    todos: TODOS
  }

  handleAddTodoList = () => {

  }

  render() {
    return (
      <div className={styles['container']}>
        <AddTodoList />
        <TodoListContainer todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoAppContainer;

const TODOS = [
  'Make Todo Application 1',
  'Make Todo Application 2',
]