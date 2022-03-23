import {AppStateType} from "../store";

export const getIsAuth = (state: AppStateType) => state.auth.isAuth
export const getUser = (state:AppStateType) => state.auth.user
