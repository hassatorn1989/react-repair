import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface FakeDataState {
    value: Array<{
        id: number,
        name: string,
        email: string,
        phone: string
    }>
}

// Define the initial state using that type

const initialState: FakeDataState = {
    value: [
        {
            id: 1,
            name: 'Leanne Graham',
            email: 'hassss@aa.aa',
            phone: '1-770-736-8031 x56442'
        },
        {
            id: 2,
            name: 'Ervin Howell',
            email: 'asda@aa.aa',
            phone: '010-692-6593 x09125'
        },
    ],
}

export const fakeDataSlice = createSlice({
    name: 'fakeData',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        data : (state, action: PayloadAction<Array<{
            id: number,
            name: string,
            email: string,
            phone: string
        }>>) => {
            state.value = action.payload
        },
    },
})

export const { data } = fakeDataSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFakeData = (state: RootState) => state.fakeData.value

export default fakeDataSlice.reducer