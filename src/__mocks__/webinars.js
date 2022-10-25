import { te } from 'date-fns/locale';
import { v4 as uuid } from 'uuid';
import { config } from '../config'
let tempWebinars = [];
const status = [
  'upcoming',
  'live',
  'processing',
  'expired'
]
for (let i = 0; i < 300; i++) {
  let prices = [
    (Math.floor(Math.random() * i * 100) + 1) + 100,
    (Math.floor(Math.random() * i * 100) + 1) + 50,
    (Math.floor(Math.random() * i * 50) + 1) + 1
  ]
  tempWebinars.push({
    id: 'test-webinar-' + i,
    title: "test-webinar-" + i,
    description: 'This is a test webinar descriptoin - ' + i,
    media: `${config.serverDomain}/img/img(${Math.floor(Math.random() * 214) + 1}).png`,
    category: Math.floor(Math.random() * 5) + 1,
    price: (Math.floor(Math.random() * i * 100) + 1) * 10 % 1000,
    manufacture: "Test Manufacture",
    stock: 20,
    status: status[Math.floor(Math.random() * 4)],
    votedTheme: Math.floor(Math.random() * 3),
    themes: [
      {
        price: prices[0],
        total: Math.floor(10000 % prices[0]),
        voted: Math.floor(Math.random() * Math.floor(10000 % prices[0]) + 1),
        remaining: Math.floor(Math.random() * Math.floor(10000 % prices[0]) + 1)
      },
      {
        price: prices[1],
        total: Math.floor(10000 % prices[1]),
        voted: Math.floor(Math.random() * Math.floor(10000 % prices[1]) + 1),
        remaining: Math.floor(Math.random() * Math.floor(10000 % prices[1]) + 1)
      },
      {
        price: prices[2],
        total: Math.floor(10000 % prices[2]),
        voted: Math.floor(Math.random() * Math.floor(10000 % prices[2]) + 1),
        remaining: Math.floor(Math.random() * Math.floor(10000 % prices[2]) + 1)
      }
    ]
  })
}
export const webinars = tempWebinars;