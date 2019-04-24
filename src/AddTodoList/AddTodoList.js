import React, { Component } from 'react';
import styles from './AddTodoList.module.css';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';

const customizedStyles = {
  input: {
    paddingLeft: 15,
    flex: 1,
  },
};

class AddTodoList extends Component {

  state = {
    todoText: ''
  }

  handleOnChange = (e) => {
    this.setState({ todoText: e.target.value })
  }

  handleOnClick = () => {
    this.props.addTodoList(this.state.todoText);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="container">
        <div className={styles['wrapper']}>
          <InputBase id="todo-text" className={classes.input} placeholder="Add Todo List..." 
                     onChange={this.handleOnChange} />
          <IconButton onClick={this.handleOnClick}>
            <Add style={{color: 'green'}} />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default withStyles(customizedStyles)(AddTodoList);