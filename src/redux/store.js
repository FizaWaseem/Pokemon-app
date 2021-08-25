import { createStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

const store=createStore( rootReducer);



// export type RootState = ReturnType<typeof store.getState>
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
export default store;
