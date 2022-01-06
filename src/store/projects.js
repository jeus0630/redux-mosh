import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'project',
    initialState :[],
    reducers : {
        projectAdded : (state, action) => {
            state.push({
                id : 1,
                name : action.payload.name
            });
        }
    }
});

export default slice.reducer;
export const {projectAdded} = slice.actions;