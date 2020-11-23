import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Board from './../Boards/Board';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  boardContainer: {
    display: "flex",
  }
}));

function Boards(props){
  const classes = useStyles();
  const {boards} = props;

  return (
    <div className={classes.root}>
      <div className={classes.boardContainer}>
        {
          (Object.keys(boards)||[]).map((board)=>{
            return(
              <Board board={boards[board]} key={board}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default connect(state=>{
  const projectName = state.projectManager.get("projectName");
  const project = (state.projectManager && state.projectManager.get(projectName) && state.projectManager.get(projectName).toJS()) || {};
  const boards = project.boards || {};

  return {
    boards
  };
})(Boards);