import AuthApi from "../../api/AuthApi";
import axios from "axios";
import {API_URL} from "../../api";
import {IUser} from "../../@types/IUser";
import {InferActionsTypes} from "../store";

const INITIAL_STATE = {
    user: {} as IUser,
    isAuth: false as Boolean,
}

export const authReducer = (state=INITIAL_STATE, action:ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTRATION':
        case 'CHECK_AUTH':
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
        case 'LOGOUT':
            return {
                ...state,
                user: {
                    role: null,
                    id: null,
                    email: null,
                },
                isAuth: false
            }
        default:
            return state
    }
}

export const actions = {
    login: (payload: IUser) => ({
        type: 'LOGIN', payload
    }) as const,
    registration: (payload: IUser) => ({
        type: 'REGISTRATION', payload
    }) as const,
    logout: () => ({
        type: 'LOGOUT'
    }) as const,
    checkAuth: (payload: IUser) => ({
        type: 'CHECK_AUTH', payload
    }) as const,
}

export const login = (email:string, password:string) => async (dispatch:any) => {
    try {
        let loginData = await AuthApi.login(email, password)
        localStorage.setItem('access_token', loginData.data.token )
        localStorage.setItem('refresh_token', loginData.data.refresh_token )
        dispatch(actions.login(loginData.data.user));
    } catch (e) {
        console.log(e)
    }
};

export const registration = (email:string, password:string) => async (dispatch:any) => {
    try {
        let registrationData = await AuthApi.registration(email, password)
        localStorage.setItem('access_token', registrationData.data.token )
        localStorage.setItem('refresh_token', registrationData.data.refresh_token )
        dispatch(actions.registration(registrationData.data.user));
    } catch (e) {
        console.log(e)
    }
};

export const logout = () => async (dispatch:any) => {
    try {
        await AuthApi.logout()
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        dispatch(actions.logout());
    } catch (e) {
        console.log(e)
    }
};

export const checkAuth = () => async (dispatch:any) => {
    try {
        const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true })
        localStorage.setItem('access_token', response.data.token )
        localStorage.setItem('refresh_token', response.data.refresh_token )
        dispatch(actions.checkAuth(response.data.user));
    } catch (e) {
        console.log(e)
    }
};

export type InitialStateType = typeof INITIAL_STATE;

type ActionsTypes = InferActionsTypes<typeof actions>
