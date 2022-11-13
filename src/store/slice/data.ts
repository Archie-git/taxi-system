import { createSlice } from '@reduxjs/toolkit'
import { CarStore, OrderItem } from '@src/common/model'
import { fetchCities, fetchOrders, fetchStores } from '@src/store/thunk'
import { TEMP_cities, TEMP_stores, TEMP_orders } from '@src/store/temp_data'

interface DataState {
  cities: string[]
  stores: CarStore[]
  orders: OrderItem[]
}

const initialState: DataState = {
  cities: [],
  stores: [],
  orders: []
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addOrder: (state, action: { payload: OrderItem }) => {
      state.orders.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state.cities = action.payload
    })
    builder.addCase(fetchStores.fulfilled, (state, action) => {
      state.stores = action.payload
    })
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.orders = action.payload
    })
  }
})

export default dataSlice
