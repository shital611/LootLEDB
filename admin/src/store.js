import { loginAdminReducer } from './reducers/adminReducer'

const currentAdmin = localStorage.getItem('currentItem') ? JSON.parse(localStorage.getItem('currentAdmin')) : null

const rootReducer = combineReducers({
    loginAdminReducer: loginAdminReducer
})

const initialState = {
    loginAdminReducer : {
        currentAdmin: currentAdmin
    }
}

const middleware = [thunk]

const store = creatStore(
    rootReducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store