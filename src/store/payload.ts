import { AlertColor } from '@mui/material'

export interface MainPayloadOpenPrompt {
  type: string
  payload: {
    status: AlertColor
    message: string
  }
}
