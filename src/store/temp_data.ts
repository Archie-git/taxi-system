import { CarStore, OrderItem } from '@src/common/model'

export const TEMP_cities: string[] = [
  'Shenzhen'
]

export const TEMP_stores: CarStore[] = [
  {
    storeId: 'store001',
    storeName: 'Nanshancanrentalcompany',
    cars: [
      {
        type: 'ToyotaCamry',
        carId: 'car001',
        storeId: 'store001',
        pricePerDay: 180.00,
        currency: 'CNY'
      },
      {
        type: 'ToyotaCamry',
        carId: 'car002',
        storeId: 'store001',
        pricePerDay: 180.00,
        currency: 'CNY'
      },
      {
        type: 'BMW650',
        carId: 'car003',
        storeId: 'store001',
        pricePerDay: 1080.00,
        currency: 'CNY'
      },
      {
        type: 'BMW650',
        carId: 'car004',
        storeId: 'store001',
        pricePerDay: 1080.00,
        currency: 'CNY'
      }
    ]
  }
]

export const TEMP_orders: OrderItem[] = [
  {
    orderId: 'b41d981b4126414287d6760adec6cd21',
    carId: 'car001',
    bookStartTime: '2022-11-10T00:00:00',
    bookEndTime: '2022-11-11T00:00:00',
    actualStartTime: '',
    actualEndTime: '',
    status: 'ON',
    canCancel: false
  }
]
