import {authReducer, initialStateType, setUserData} from "./authReducer";

let startState: initialStateType

beforeEach( () => {
    startState = {
        userId: null,
        email: null,
        email: null,
        isFetching: false
    }
})

test("property isFetching should be correct changed", () => {
    const endState = authReducer(startState, setUserData(2, 'asda', 'asfasf'))

    expect(endState.isAuth).toBe(true)
})