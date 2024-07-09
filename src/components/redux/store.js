import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

// This import are important for saga ...
import createSagaMiddleware from 'redux-saga'
import SagaData from './saga';

//  creating saga ...
const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer: rootReducer,
    middleware:()=>[sagaMiddleware],
})

// running saga file ..
sagaMiddleware.run(SagaData)

export default store