import * as actionTypes from '../constants/actionsTypes';
import Immutable from "immutable";

export default function projectManager(state = Immutable.Map({}), action) {
    let newState = {}, projectName='', boardName='', boards={}, cardDetails={}, cards={};
    switch(action.type){
        case actionTypes.CREATE_PROJECT:
            newState = state;
            projectName = action.projectName;
            newState = state.set("projectName", projectName);
            return newState;

        case actionTypes.CREATE_BOARD:
            newState = state;
            projectName = action.projectName;
            boardName = action.boardName;
            
            boards = state.getIn([projectName, "boards"]) || {};
            boards[boardName] = {...boards[boardName], ...{boardName}};
            newState = state.setIn([projectName, "boards"], {...boards});

            return newState;
            
        case actionTypes.REMOVE_BOARD:
            newState = state;
            projectName = action.projectName;
            boardName = action.boardName;
            
            boards = state.getIn([projectName, "boards"]) || {};
            delete boards[boardName];
            
            newState = state.setIn([projectName, "boards"], {...boards});

            return newState;

        case actionTypes.CREATE_CARD:
            newState = state;
            projectName = action.projectName;
            boardName = action.boardName;
            cardDetails = action.cardDetails;

            boards = state.getIn([projectName, "boards"]) || {};
            cards = (boards[boardName] && boards[boardName].cards)||{};
            cards[cardDetails.title] = cardDetails;

            boards[boardName] = {...boards[boardName], ...{cards}};

            newState = newState.setIn([projectName, "boards"], {...boards});
            return newState;
        
        case actionTypes.REMOVE_CARD:
            newState = state;
            projectName = action.projectName;
            boardName = action.boardName;
            cardDetails = action.cardDetails;

            boards = state.getIn([projectName, "boards"]) || {};
            cards = (boards[boardName] && boards[boardName].cards)||{};
            
            delete cards[cardDetails.title];

            boards[boardName] = {...boards[boardName], ...{cards}};

            newState = newState.setIn([projectName, "boards"], {...boards});
            return newState;
    
        default:
            return state;
    }
}