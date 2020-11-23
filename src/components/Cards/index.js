import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function Cards(props){
  const classes = useStyles();
  const {boards, boardName, projectName} = props;
  const cards = (boards[boardName] && boards[boardName].cards) || {};

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {
          (Object.keys(cards)||[]).map(card=>{
            return (
              <Grid item xs={12} key={card}>
                <Card cardDetails={cards[card]} boardName={boardName} projectName={projectName}/>
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  );
}

export default connect(state=>{
  const projectName = state.projectManager.get("projectName");
  const project = (state.projectManager && state.projectManager.get(projectName) && state.projectManager.get(projectName).toJS()) || {};
  const boards = project.boards || {};

  return {
    projectName,
    boards
  };
})(Cards);