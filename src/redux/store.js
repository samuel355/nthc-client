import {configureStore} from '@reduxjs/toolkit'
import PlotReducer from './features/PlotSlice'

export default configureStore({
    reducer: {
        plot: PlotReducer,
        // user: UserReducer,
        // visitor: VisitorReducer,
        // contactUs: ContactUsSlice
    }
})