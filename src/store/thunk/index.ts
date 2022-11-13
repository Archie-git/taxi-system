import { createAsyncThunk } from '@reduxjs/toolkit'
import http from '@src/http'

export const fetchCities = createAsyncThunk('data/getCities', async () => {
  const response = await http.get('/car-rental/cities')
  return response.data
})

export const fetchStores = createAsyncThunk('data/fetchStores', async (params: {
  city: string
  startTime: string
  endTime: string
}) => {
  const { city, startTime, endTime } = params
  const response = await http.get(`/car-rental/cities/${city}/stores/-/cars`, { startTime, endTime })
  return response.data
})

export const fetchOrders = createAsyncThunk('data/fetchOrders', async () => {
  const response = await http.get('/customers/1000000001/order/history')
  return response.data
})
