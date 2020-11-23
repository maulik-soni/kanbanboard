import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Cards from '../Cards';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import {createCard, removeCard, removeBoard} from '../../action/projectAction';
import CreateCard from '../Cards/CreateCards';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: "12px",
    margin:"0 5px",
    width: "320px",
    backgroundColor: theme.palette.grey[200]
  },
  boardTitleContainer:{
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",

    "& .boardTitle":{
      flex:"1 auto"
    }
  },
  createCard:{
    textAlign: "center",
    marginTop: "20px"
  }
}));

function Board(props){
  const classes = useStyles();
  const {board, projectName} = props;

  const _createCard=(cardDetails)=>{
    const {dispatch, projectName, board} = props;
    dispatch(createCard(projectName, board.boardName, cardDetails))
  }

  const onDragOver = (e)=>{
    e.preventDefault()
  }

  const onDrop = (ev, cat) => {
    const {cardDetails, boardName} = JSON.parse(ev.dataTransfer.getData("id"));
    const {dispatch, projectName, board} = props;
    dispatch(createCard(projectName, board.boardName, cardDetails));
    dispatch(removeCard(projectName, boardName, cardDetails))
  }

  return (
    <Paper className={classes.root} onDragOver={(e)=>onDragOver(e)} onDrop={(e)=>onDrop(e)}>
      <div className={classes.boardTitleContainer}>
        <Typography variant="subtitle1" gutterBottom className="boardTitle">
          {board.boardName}
        </Typography>
        <div>
          <Tooltip title="Delete">
            <IconButton aria-label="more" size="small" onClick={()=>{props.dispatch(removeBoard(projectName, board.boardName))}}>
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </div>
      </div>

      <Cards boardName={board.boardName} />
      <div className={classes.createCard}>
        <CreateCard onCreate={_createCard}/>
      </div>
    </Paper>
  );
}

export default connect(state=>{
  return {
    projectName : state.projectManager.get("projectName")
  };
})(Board);