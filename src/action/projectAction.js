import { CREATE_PROJECT, CREATE_BOARD, REMOVE_BOARD, CREATE_CARD, REMOVE_CARD } from '../constants/actionsTypes';

export function createProject(projectName){
  return dispatch=>{
    dispatch({
      type: CREATE_PROJECT,
      projectName
    })
  }
}

export function createBoard(projectName, boardName){
  return dispatch=>{
    dispatch({
      type: CREATE_BOARD,
      projectName, 
      boardName
    })
  }
}

export function removeBoard(projectName, boardName){
  return dispatch=>{
    dispatch({
      type: REMOVE_BOARD,
      projectName, 
      boardName
    })
  }
}


export function createCard(projectName, boardName, cardDetails){
  return dispatch=>{
    dispatch({
      type: CREATE_CARD,
      projectName, 
      boardName,
      cardDetails
    })
  }
}

export function removeCard(projectName, boardName, cardDetails){
  return dispatch=>{
    dispatch({
      type: REMOVE_CARD,
      projectName, 
      boardName,
      cardDetails
    })
  }
}