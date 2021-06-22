import {AppReduxStateType} from "./ReduxStore";

export const getUsersSelector = (state: AppReduxStateType) => {
    return state.usersPage.users
}
export const getPageSizeSelector = (state: AppReduxStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUserCountSelector = (state: AppReduxStateType) => {
    return state.usersPage.totalUserCount
}
export const getCurrentPageSelector = (state: AppReduxStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetchingSelector = (state: AppReduxStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgressSelector = (state: AppReduxStateType) => {
    return state.usersPage.followingInProgress
}