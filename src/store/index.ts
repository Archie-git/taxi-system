import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector as useProtoSelector, useDispatch as useProtoDispatch } from 'react-redux'
import mainSlice from '@src/store/slice/main'

const AppStore = configureStore({
  reducer: {
    main: mainSlice.reducer
  }
})

export default AppStore

// useSelector、useDispatch

export type RootState = ReturnType<typeof AppStore.getState>

export const useSelector: TypedUseSelectorHook<RootState> = useProtoSelector

export const useDispatch: () => typeof AppStore.dispatch = useProtoDispatch

// actions

export const mainActions = mainSlice.actions
