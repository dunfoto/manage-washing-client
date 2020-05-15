import ACTIONS from "../../actions/todo";
import lodash from "lodash";

const defaultState = {
    items: []
};

const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.CREATE_ITEM: {
            console.log(action);

            let item = action.payload;
            let newItem = { id: state.items.length + 1, description: item };
            let newState = lodash.cloneDeep(state);
            newState.items.push(newItem);
            return newState;
        }

        case ACTIONS.Types.DELETE_ITEM: {
            let newState = lodash.cloneDeep(state);
            let index = lodash.findIndex(newState.items, { id: action.payload });
            newState.items.splice(index, 1);
            return newState;
        }

        default:
            return state;
    }
};

export default todoReducer;