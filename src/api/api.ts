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
    getUsersApi(userId: string = '16115') {
        return instance.get(`profile/ ` + userId)
    },

    followApi (id: string) {
        return instance.post(`follow/${id}`, {})
    },

    unFollowApi(id: string) {
        return instance.delete(`follow/${id}`, {})
    }

}
