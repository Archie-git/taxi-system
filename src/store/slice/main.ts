import { createSlice } from '@reduxjs/toolkit'
import { AlertColor } from '@mui/material'
import { MainPayloadOpenPrompt } from '@src/store/payload'

interface MainState {
  prompt: {
    visible: boolean
    status: AlertColor
    message: string
  }
}

const initialState: MainState = {
  prompt: {
    visible: false,
    status: 'success',
    message: ''
  }
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    openPrompt: (state: MainState, action: MainPayloadOpenPrompt) => {
      const { status, message } = action.payload
      state.prompt = { visible: true, status, message }
    },
    closePrompt: (state: MainState) => {
      state.prompt.visible = false
    }
  }
})

export default mainSlice
