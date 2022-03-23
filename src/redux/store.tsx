import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {authReducer} from "./reducers/auth";

const allReducers = combineReducers({
    auth: authReducer
})

type ReducersType = typeof allReducers;

export type AppStateType = ReturnType<ReducersType>;

export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

const store = createStore(allReducers, applyMiddleware(thunkMiddleware));

export default store;
