import React, { ChangeEventHandler, useEffect, useState } from 'react'
import {
  Stack,
  Button,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton
} from '@mui/material'
import {
  Download as IconDownload,
  Delete as IconDelete,
  FileCopy as IconFile,
  Close as IconClose,
  Upload as IconUpload,
  Check as IconCheck,
  SmsFailed as IconFail
} from '@mui/icons-material'
import NavMenu from '@src/component/NavMenu'
import Header from '@src/component/Header'
import { mainActions, useDispatch } from '@src/store'
import http from '@src/http'
import UtilKey from '@src/util/key'

type RecordStatus = 'INVALID' | 'READY' | 'UPLOADING' | 'SUCCESS' | 'FAIL'

interface Record {
  key: string
  status: RecordStatus
  file: File
  message: string
  batchNO?: string
}

const HomePage: () => JSX.Element = () => {
  const dispatch = useDispatch()
  const [ready, setReady] = useState(false)
  const [records, setRecords] = useState<Record[]>([])

  useEffect(() => {
    const empty = records.length === 0
    // 是否可以开始上传
    setReady(!empty && records.every((item) => {
      return item.status === 'READY'
    }))
    // 是否全部上传成功
    const perfect = !empty && records.every((item) => {
      return item.status === 'SUCCESS'
    })
    perfect && dispatch(mainActions.openPrompt({
      status: 'success',
      message: `${records.length === 1 ? 'Upload' : 'All files were uploaded'} successfully!`
    }))
  }, [records])

  const getListItemAvatar: (status: RecordStatus) => (JSX.Element | null) = (status) => {
    switch (status) {
      case 'INVALID': return <IconClose />
      case 'READY': return <IconFile />
      case 'UPLOADING': return <IconUpload />
      case 'SUCCESS': return <IconCheck />
      case 'FAIL': return <IconFail />
      default: return null
    }
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.target
    if (files != null) {
      const arr: Record[] = [...records]
      for (let i = 0; i < files.length; i++) {
        // todo.archie 当文件重名时，另起一个名字，弹出snackbar提示，然后setReady（false）
        const duplicate = records.some((item) => item.file.name === files[i].name)
        if (duplicate) {
          arr.push({
            key: UtilKey.getRandomKey(),
            status: 'INVALID',
            file: files[i],
            message: 'Invalid(Duplicate filenames)'
          })
          dispatch(mainActions.openPrompt({
            status: 'error',
            message: 'Duplicate filenames!'
          }))
          continue
        }
        arr.push({
          key: UtilKey.getRandomKey(),
          status: 'READY',
          file: files[i],
          message: 'Ready.'
        })
      }
      setRecords(arr)
      e.target.value = ''
    }
  }

  const handleUpload: () => void = () => {
    records.forEach((item1) => {
      const formData = new FormData()
      formData.append('resource', item1.file)
      http.post('/v1/payroll/upload', formData).then((ret) => {
        setRecords(records.map((item2) => {
          return item1.file.name === item2.file.name ? {
            key: item2.key,
            status: 'SUCCESS',
            file: item2.file,
            message: 'Upload successfully'
          } : item2
        }))
      }).catch((err) => {
        if (err.response != null) {
          // todo.archie 确定batchNO和data的关系
          const { message = '', batchNO = '' } = err?.response?.data
          setRecords(records.map((item3) => {
            return item1.file.name === item3.file.name ? {
              key: item3.key,
              status: 'FAIL',
              file: item3.file,
              message,
              batchNO
            } : item3
          }))
        }
      })
    })
  }

  const handleDelete: (filename: string) => void = (filename) => {
    setRecords(records.filter((item) => {
      return item.file.name !== filename
    }))
  }

  const handleDownload: (batchNO: string) => void = (batchNO) => {
    window.open(ENV.HOST_URL + '/v1/payroll/download/error?batchNo=' + batchNO)
  }

  return (
    <>
      <Header />
      <Stack direction="row">
        <NavMenu />
        <Box sx={{ flex: 1, backgroundColor: '#edf1f7', paddingTop: '2rem' }}>
          <Box>
            <Button variant="contained" component="label" sx={{ margin: '0 2rem' }}>
              ADD FILES
              <input
                hidden
                multiple
                accept=".csv"
                type="file"
                onChange={handleChange}
              />
            </Button>
            <Button variant="contained" onClick={handleUpload} disabled={!ready}>Upload</Button>
          </Box>
          <Box>
            <List sx={{ width: '100%' }}>
              {records.map((item) => {
                return (
                  <ListItem key={`${item.file.name}${item.file.lastModified}`}>
                    <ListItemAvatar>
                      {getListItemAvatar(item.status)}
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.file.name}
                      secondary={item.message}
                    />
                    {(item.batchNO != null) && (
                      <IconButton onClick={() => handleDownload(item.batchNO as string)}>
                        <IconDownload />
                      </IconButton>
                    )}
                    {(item.status === 'INVALID') && (
                      <IconButton onClick={() => handleDelete(item.file.name)}>
                        <IconDelete />
                      </IconButton>
                    )}
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Box>
      </Stack>
    </>
  )
}

export default HomePage
