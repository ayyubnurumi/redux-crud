import { configureStore } from "@reduxjs/toolkit";
import tutorialReducer from "./slice/tutorials";

const reducer = {
    tutorials: tutorialReducer
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;