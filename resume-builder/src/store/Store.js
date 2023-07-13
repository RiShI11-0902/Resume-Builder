import { configureStore } from "@reduxjs/toolkit";

import dataStore from "./resumeReducer"

const store = configureStore({
    reducer:{dataStore: dataStore}
})

export default store