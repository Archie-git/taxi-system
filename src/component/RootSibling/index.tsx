import React from 'react'
import { Snackbar, Alert } from '@mui/material'
import { useSelector, useDispatch, mainActions } from '@src/store'

const RootSibling: () => JSX.Element = () => {
  const dispatch = useDispatch()
  const prompt = useSelector((state) => state.main.prompt)
  const handleClose: () => void = () => {
    dispatch(mainActions.closePrompt())
  }
  return (
    <React.Fragment>
      <Snackbar autoHideDuration={5000} open={prompt.visible} onClose={handleClose}>
        <Alert
          elevation={6}
          variant="filled"
          severity={prompt.status}
          onClose={handleClose}
        >
          { prompt.message }
        </Alert>
      </Snackbar>
    </React.Fragment>
  )
}

export default RootSibling
