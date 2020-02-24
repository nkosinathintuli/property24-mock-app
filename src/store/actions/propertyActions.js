export const createProperty = (property) =>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        
        firestore.collection('properties').add({
            ...property, 
            authorFullName:profile.fullName,
            authorId:authorId,
            createdAt: new Date()

        }).then(()=>{
            dispatch({ type:'CREATE_PROPERTY', property})
        }).catch((err)=>{
            dispatch({type: 'CREATE_PROPERTY_ERROR', err});
        })
        
    }
}

