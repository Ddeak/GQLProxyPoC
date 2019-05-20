export const USERS = [{ name: 'Daniel Deak' }, { name: 'Jane Doe' }]

export const TRANSACTIONS = [
  {
    created: '2019-05-09',
    user: USERS[0],
    products: [
      {
        name: 'Product 1',
        cost: '300'
      },
      {
        name: 'Product 2',
        cost: '500'
      }
    ]
  },
  {
    created: '2019-05-09',
    user: USERS[0],
    products: [
      {
        name: 'Product 3',
        cost: '1000'
      }
    ]
  },
  {
    created: '2019-05-09',
    user: USERS[1],
    products: [
      {
        name: 'Product 4',
        cost: '1500'
      },
      {
        name: 'Product 5',
        cost: '50'
      }
    ]
  }
]
