import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import {createProject} from '../../action/projectAction';
import { connect } from 'react-redux';
import CreateProject from '../ProjectContainer/CreateProject';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    main:{
      marginTop: "48px"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const AppHeader = (props)=>{
  const classes = useStyles();

  const _createProject=(projectName)=>{
    props.dispatch(createProject(projectName))
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            Kanban Project Management board
          </Typography>
          <div>
            <CreateProject onCreate={_createProject}/>
          </div>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        {props.children}
      </main>
    </div>
  );
}

export default withRouter(connect()(AppHeader));