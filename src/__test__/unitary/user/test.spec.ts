import { PrismaClient, User } from '@prisma/client'
import moment from 'moment'

describe('nada º~º', () => {
  it('test 0_0', async () => {
    const prisma = new PrismaClient()

    let users: User[]

    users = await prisma.user.findMany()

    const today = new Date('03/20/2022')

    var sunday, saturday

    if (today.getDay() === 0) {
      sunday = moment(today).format('DD-MM')

      saturday = moment(today).add(6, 'days').format('DD-MM')
    } else {
      const days = 7 - today.getDay()

      sunday = moment(today).add(days, 'days').toDate()

      saturday = moment(sunday).add(6, 'days').format('DD-MM')

      sunday = moment(sunday).format('DD-MM')
    }

    let listUsers = []

    for (let user of users) {
      const birthday = user.birthday.substring(0, 5)

      const start: string = sunday

      const end: string = saturday

      if (
        birthday.substring(3, 5) == start.substring(3, 5) ||
        birthday.substring(3, 5) == end.substring(3, 5)
      ) {
        if (
          birthday.substring(0, 2) >= start.substring(0, 2) &&
          birthday.substring(0, 2) <= end.substring(0, 2)
        ) {
          // console.log(birthday.substring(0, 2))
          listUsers.push({ ...user })
        }
      }
    }
    console.log(listUsers)
  })
})
