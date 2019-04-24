import React, { Component } from 'react';
import styles from './AppContainer.module.css';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DummyTextContainer from '../DummyTextContainer';
import TodoAppContainer from '../TodoAppContainer';

const customizedStyles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #efefef',
  },
  tabsIndicator: {
    backgroundColor: 'green',
  },
  tabRoot: {
   '&:hover': {
     color: 'green',
     opacity: 1,
   },
  }
})

class AppContainer extends Component {

  state = {
    tabValue: 0,
  }

  handleChange = (e, tabValue) => {
    this.setState({ tabValue })
  }

  render() {
    const { classes } = this.props;
    const { tabValue } = this.state;

    return (
      <div className={styles['app-container']}>
        <h2 className={styles['title']}>
          <i className={`material-icons ${styles.icon}`}>check_circle_outline</i>
          Simple Todo Application
        </h2>
        <div className={classes.root}>
          <Tabs value={tabValue} variant="fullWidth" onChange={this.handleChange}
                classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}>
            <Tab 
              label="Dummy Text" 
              className={classes.tabRoot}
            />
            <Tab 
              label="Todo App" 
              className={classes.tabRoot}
            />
          </Tabs>
        </div>
        {tabValue === 0 && <DummyTextContainer text={TEXT} />}
        {tabValue === 1 && <TodoAppContainer />}
      </div>
    );
  }
}

export default withStyles(customizedStyles)(AppContainer);

const TEXT = 
`
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type 
specimen book. It has survived not only five centuries, but also the leap into 
electronic typesetting, remaining essentially unchanged. It was popularised in 
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker 
including versions of Lorem Ipsum.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type 
specimen book. It has survived not only five centuries, but also the leap into 
electronic typesetting, remaining essentially unchanged. It was popularised in 
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker 
including versions of Lorem Ipsum.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type 
specimen book. It has survived not only five centuries, but also the leap into 
electronic typesetting, remaining essentially unchanged. It was popularised in 
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker 
including versions of Lorem Ipsum.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type 
specimen book. It has survived not only five centuries, but also the leap into 
electronic typesetting, remaining essentially unchanged. It was popularised in 
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker 
including versions of Lorem Ipsum.
`;
  