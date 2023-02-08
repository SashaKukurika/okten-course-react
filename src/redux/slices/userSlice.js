import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";

import {usersService} from "../../services";


const initialState = {
    users: [],
    errors: null,
    loading: null,
    selectedUser: null,
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await usersService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id}, {rejectWithValue, dispatch, getState}) => {
        try {
            const {data} = await usersService.getById(id);
            const state = getState();
            console.log(state);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }


    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        // getAll: (state, action) => {
        //     state.users = action.payload
        // },
        setSelectedUser: (state, action) => {
            console.log(current(state.users))
            state.selectedUser = action.payload
        }
    },
    // extraReducers: {
    //     [getAll.fulfilled]: (state, action) => {
    //         state.loading = false
    //         state.users = action.payload
    //     },
    //     [getAll.rejected]: (state, action) => {
    //         state.errors = action.payload
    //         state.loading = false
    //     },
    //     [getAll.pending]: (state) => {
    //         state.loading = true
    //     }
    // }

    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.selectedUser = action.payload;
            })
});

const {reducer: userReducer, actions: {setSelectedUser}} = userSlice;

const userAction = {
    // getAll,
    setSelectedUser,
    getAll,
    getById
};

export {
    userReducer,
    userAction
}