import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carsService} from "../../services";

const initialState = {
    cars: [],
    carUpdate: null,
    errors: null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carsService.getAll();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.errors.data);
        }
    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async (arg, thunkAPI) => {
        try {
            await carsService.create(arg);
            thunkAPI.dispatch(getAll());
        } catch (e) {
            return thunkAPI.rejectWithValue(e.errors.data);
        }
    }
);

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, thunkAPI) => {
        try {
            await carsService.updateById(id, car);
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.errors.data);
        }
    }
);

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async (arg, thunkAPI) => {
        try {
            await carsService.deleteById(arg.id);
            thunkAPI.dispatch(getAll());
        } catch (e) {
            return thunkAPI.rejectWithValue(e.errors.data);
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(updateById.fulfilled, (state) => {
                state.carUpdate = null;
            })
});

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice;

const carAction = {
    getAll,
    create,
    updateById,
    deleteById,
    setCarForUpdate
}

export {
    carReducer,
    carAction,
}