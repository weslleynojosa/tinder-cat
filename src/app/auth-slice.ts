import { user } from "@/common/users";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IAuth {
    isLoggedIn: boolean,
    userData?: user
}

const initialState: IAuth = { isLoggedIn: false }

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state: IAuth, action: PayloadAction<user>) {
            state.isLoggedIn = true
            state.userData = action.payload
        },
        logout(state) {
            state.isLoggedIn = false
        }
    }
})

export const authActions = authSlice.actions

export default authSlice