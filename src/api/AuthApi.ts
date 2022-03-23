import instance from "./index";
import {AxiosResponse} from 'axios'
import {AuthResponse} from "../@types/AuthResponse";

export default class AuthApi {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return instance.post('/auth/login', { email, password })
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return instance.post('/registration', { email, password })
    }

    static async logout(): Promise<AxiosResponse> {
        return instance.post('/logout')
    }
}
