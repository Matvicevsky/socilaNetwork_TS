import {findUsersReducer, InitialStateType, setIsFollowingProgress} from "./findUsersReducer";


let startState: InitialStateType

beforeEach(() => {
    startState = {
        users: [],
        pageSize: 10,
        totalUserCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: false
    }
})

test('property is followingInProgress should be changed', ()=>{
    const endState = findUsersReducer(startState, setIsFollowingProgress(true))

    expect(endState.followingInProgress).toBe(true)
    expect(startState.followingInProgress).toBe(false)
})