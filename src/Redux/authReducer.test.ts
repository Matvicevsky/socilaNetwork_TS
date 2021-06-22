import {authReducer, initialStateType, setUserData} from "./authReducer";

let startState: initialStateType

beforeEach( () => {
    startState = {
        userId:  16115,
        email: null as string | null,
        login: null as string | null,
        isAuth: false,
        captcha: false,
        url: undefined as string | undefined,
        messages: null as string | null,
    }
})

test("property isFetching should be correct changed", () => {
    const endState = authReducer(startState, setUserData(2, 'asda', 'asfasf', true))

    expect(endState.isAuth).toBe(true)
})