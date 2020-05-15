const Types = {
    GET_ADDRESS: "GET_ADDRESS",
    CREATE_ADDRESS: "CREATE_ADDRESS",
    UPDATE_ADDRESS: "UPDATE_ADDRESS"
};

const createItem = task => ({
    type: Types.GET_ADDRESS,
    payload: task
});

const deleteItem = id => ({
    type: Types.CREATE_ADDRESS,
    payload: id
});

const updateAddress = data => {
    return dispatch => {
        console.log(dispatch);
    }
}

export default {
    createItem,
    deleteItem,
    Types
};