import { configureStore } from '@reduxjs/toolkit'
import userReducer, {login} from "../reducer/userSlice"


export default configureStore({

    reducer:{login: userReducer}
})
