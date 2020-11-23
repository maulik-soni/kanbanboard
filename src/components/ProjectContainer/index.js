import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Boards from "../Boards";
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import CreateBoard from '../Boards/CreateBoard';
import {createBoard} from '../../action/projectAction';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "12px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  boardContainer:{
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",

    "& .boardTitle":{
      flex:"1 auto"
    }
  }
}));

function ProjectContainer(props){
  const classes = useStyles();
  const {projectName} = props;

  const _createBoard=(boardName)=>{
    props.dispatch(createBoard(props.projectName, boardName))
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.boardContainer}>
            <Typography variant="subtitle1" gutterBottom className="boardTitle">
              Project Name : {projectName}
            </Typography>
            <div>
              <CreateBoard onCreate={_createBoard}/>
            </div>
          </div>

          <Boards/>
        </Grid>
      </Grid>
    </div>
  );
}

export default connect(state=>{
  return {
    projectName : state.projectManager.get("projectName"),
    project:state.projectManager.toJS()
  };
})(ProjectContainer);