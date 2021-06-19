import { createSelector } from "reselect";

// Returns entire directory state obj 
const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);
