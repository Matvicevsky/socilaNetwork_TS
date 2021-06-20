import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : '039f23ab-7747-49fb-85d5-08f315224e87'
    },
});


export const usersAPI = {

    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    getLogin () {
        return  instance.get('auth/me')
    },

    followApi (id: string) {
        return instance.post(`follow/${id}`, {})
    },

    unFollowApi(id: string) {
        return instance.delete(`follow/${id}`, {})
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha?: string ){
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    getCaptcha(){
        return instance.get('security/get-captcha-url')
    },

    logOut(){
        return instance.delete('auth/login')
    }

}

export const profileAPI = {

    getProfileApi(userId: string = '16115') {
        return instance.get(`profile/ ` + userId)
    },

    getStatus(userId: string= '16115') {
        return instance.get(`profile/status/ ` + userId)
    },

    updateStatus(status: string){
        return instance.put(`profile/status/ `, {status: status})
    },


}
