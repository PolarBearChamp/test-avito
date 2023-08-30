import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SortState, SortStateItem } from '../../types'
import { sortOptions } from '../../constants/mock.ts'

const initialState: SortState = {
    sort: sortOptions.get('none')!,
}

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSort: (state, action: PayloadAction<SortStateItem>) => {
            state.sort = action.payload
        },
        resetSort: (state) => {
            state.sort = sortOptions.get('none')!
        },
    },
})

export const { setSort, resetSort } = sortSlice.actions

export default sortSlice.reducer
