import authReducer from './authReducer'
import propertyReducer from './propertyReducer'
import {combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth:authReducer,
    property: propertyReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer