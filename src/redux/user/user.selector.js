import { createSelector } from "reselect";

// Captures the entire user slice of state object 
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);