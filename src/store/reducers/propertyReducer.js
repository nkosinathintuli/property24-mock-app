
const initState = {
}

const propertyReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROPERTY':
            console.log('property created!', action.property)
            return state;
        case 'CREATE_PROPERTY_ERROR':
            console.log('property create error!', action.err)
            return state;
        default:
            return state;
    }    
};

export default propertyReducer;