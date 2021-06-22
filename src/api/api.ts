import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '039f23ab-7747-49fb-85d5-08f315224e87'
    },
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    },
    resultCode: ResultCodesEnum
    messages: Array<string>
}
type LoginResponseType = {
    data: {
        id: number
    },
    resultCode: ResultCodeForCaptcha
    messages: Array<string>
}
export type UsersType = {
    name: string
    id: number,
    photos: {
        "small": string | null,
        "large": string | null
    },
    status: string | null,
    followed: boolean
}
type GetUsersResponseType = {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}
type FollowUnFollowAPIType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: {}
}
type GetCaptcha = {
    url: string
}
type LogOutType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: {}
}


export const usersAPI = {

    getLogin() {
        return instance.get<MeResponseType>('auth/me')
    },

    login(email: string, password: string, rememberMe: boolean = false, captcha?: string) {
        return instance.post<LoginResponseType>('auth/login', {email, password, rememberMe, captcha})
    },

    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },

    followApi(id: number) {
        return instance.post<FollowUnFollowAPIType>(`follow/${id}`, {})
    },

    unFollowApi(id: number) {
        return instance.delete<FollowUnFollowAPIType>(`follow/${id}`, {})
    },

    getCaptcha() {
        return instance.get<GetCaptcha>('security/get-captcha-url')
    },

    logOut() {
        return instance.delete<LogOutType>('auth/login')
    }

}

type GetProfileAPIType = {
    contacts: ContactsType,
    fullName: string | null,
    lookingForAJob: boolean | null,
    lookingForAJobDescription: string | null,
    photos: PhotosType,
    userId: number
}
type ContactsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    mainLink: string | null
}
type PhotosType = {
    small: string | undefined,
    large: string | undefined,
}


type UpdateStatusType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: {}
}

export const profileAPI = {

    getProfileApi(userId: number = 16115) {
        return instance.get<GetProfileAPIType>(`profile/ ` + userId)
    },

    getStatus(userId: string = '16115') {
        return instance.get(`profile/status/ ` + userId)
    },

    updateStatus(status: string) {
        return instance.put<UpdateStatusType>(`profile/status/ `, {status: status})
    },


}
