import React, { Component } from 'react';
import styles from './TodoAppContainer.module.css';
import AddTodoList from '../AddTodoList';
import TodoListContainer from '../TodoListsContainer';

const TODOS = [
  'Make Todo Application 1',
  'Make Todo Application 2',
]

class TodoAppContainer extends Component {
  
  state = {
    todos: TODOS
  }

  addTodoList = (todoText) => {
    this.setState({ todos: this.state.todos.concat(todoText)})
  }

  deleteTodoItem = (itemIdx) => {
    let updatedArr = [...this.state.todos];

    if (itemIdx !== -1) {
      updatedArr.splice(itemIdx, 1);
      this.setState({ todos: updatedArr});
    }
  }

  render() {
    return (
      <div className={styles['container']}>
        <AddTodoList addTodoList={this.addTodoList} />
        <TodoListContainer todos={this.state.todos} deleteTodoItem={this.deleteTodoItem} />
      </div>
    );
  }
}

export default TodoAppContainer;
