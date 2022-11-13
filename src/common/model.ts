export interface CarStore {
  storeId: string
  storeName: string
  cars: Array<{
    type: string
    carId: string
    storeId: string
    pricePerDay: number
    currency: string
  }>
}

export interface OrderItem {
  orderId: string
  carId: string
  bookStartTime: string
  bookEndTime: string
  actualStartTime: string
  actualEndTime: string
  status: 'ON' | 'OFF'
  canCancel: boolean
}

export interface OrderDetail {
  orderId: string
  customerId: string
  carId: string
  bookStartTime: string
  bookEndTime: string
  actualStartTime: string
  actualEndTime: string
  status: 'ON' | 'OFF'
  createdBy: string
  createdAt: string
  updatedBy: string
  updatedAt: string
}
