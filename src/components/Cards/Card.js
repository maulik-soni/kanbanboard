import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';
import { removeCard } from '../../action/projectAction';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px"
  },
  cardsTitleContainer:{
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",

    "& .cardTitle":{
      flex:"1 auto"
    }
  },
}));

function Card(props){
  const classes = useStyles();
  const {cardDetails, boardName, projectName} = props;

  const onDragStart = (e, id)=>{
    e.dataTransfer.setData("id", id);
  }

  return (
    <Paper className={classes.root} onDragStart={(e)=>onDragStart(e, JSON.stringify({cardDetails, boardName}))} draggable>
      <div className={classes.cardsTitleContainer}>
        <Typography variant="subtitle1" gutterBottom className="cardTitle">
          {cardDetails.title}
        </Typography>
        <div>
          <Tooltip title="Delete">
            <IconButton aria-label="more" size="small" onClick={()=>{props.dispatch(removeCard(projectName, boardName, cardDetails))}}>
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </div>
      </div>

      <Typography variant="subtitle2" gutterBottom>
        {cardDetails.description}
      </Typography>
    </Paper>
  );
}

export default connect()(Card);