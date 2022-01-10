import { PrismaClient, User } from '@prisma/client'
import moment from 'moment'

export default class WeddingBirthdayList {
  async execute() {
    const prisma = new PrismaClient()

    let users: User[]

    users = await prisma.user.findMany()

    const today = new Date()

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

    let listUsersMarriage = []

    for (let user of users) {
      const weddingAnniversary = user.weddingAnniversary.substring(0, 5)

      const start: string = sunday

      const end: string = saturday

      if (
        weddingAnniversary.substring(3, 5) == start.substring(3, 5) ||
        weddingAnniversary.substring(3, 5) == end.substring(3, 5)
      ) {
        if (
          weddingAnniversary.substring(0, 2) >= start.substring(0, 2) &&
          weddingAnniversary.substring(0, 2) <= end.substring(0, 2)
        ) {
          listUsersMarriage.push({ ...user })
        }
      }
    }

    prisma.$disconnect()

    if (listUsersMarriage.length == 0) return null
    else return listUsersMarriage
  }
}
