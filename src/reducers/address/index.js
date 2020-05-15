import ACTIONS from "../../actions/todo";
import lodash from "lodash";

const defaultState = [];

const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.GET_ADDRESS: {
            console.log(action);
        }
        default:
            return state;
    }
};

export default todoReducer;