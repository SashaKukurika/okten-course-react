import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postsService} from "../../services";

const initialState = {
    posts: [],
    selected: null,
    errors: null,
    loading: null,
    apiSelected: null
}

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await postsService.getAll();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'postSlice/getById',
    async (arg, thunkAPI) => {
        try {
            const {data} = await postsService.getById(arg.id);
            console.log(data);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setSelectedPost: (state, action) => {
            state.selected = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.apiSelected = false;
                state.loading = false;
                state.apiSelected = action.payload
            })
            .addCase(getById.rejected, (state, action) => {
                state.apiSelected = false;
                state.loading = false;
                state.errors = action.payload
            })
            .addCase(getById.pending, (state) => {
                state.loading = true;
            })
});

const {reducer: postReducer, actions: {setSelectedPost}} = postSlice;

const postAction = {
    getAll,
    setSelectedPost,
    getById
};

export {
    postReducer,
    postAction
}