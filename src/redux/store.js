import { configureStore, createReducer, createAction, createSlice } from '@reduxjs/toolkit';

/*export const increment = createAction('clics/increment')

const clicksReducer = createReducer({value: 0}, {
    [increment]: (state, action) => {
        state.value += action.payload;
    }
});
*/
const clicksSlice = createSlice({
    name: 'clicks',
    initialState : {value: 0},
    reducers:{
        increment (state, action) {
       state.value += action.payload;
        }
    }
})

export const {increment} = clicksSlice.actions;

export const store = configureStore({
  reducer: {
      clics: clicksSlice.reducer,
  },
});
