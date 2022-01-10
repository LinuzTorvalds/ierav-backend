import { PrismaClient, User } from '@prisma/client'
import moment from 'moment'
export default class BirthdayList {
  async execute() {
    const prisma = new PrismaClient()

    let users: User[]

    let user: User

    users = await prisma.user.findMany()

    for (user of users) {
    }

    const date = new Date()

    var today, thisMonth

    if (parseInt(date.getDate().toString()) <= 9)
      today = '0' + date.getDate().toString()
    else today = date.getDate().toString()

    if (parseInt((date.getMonth() + 1).toString()) <= 9)
      thisMonth = '0' + date.getMonth().toString()
    else thisMonth = date.getMonth().toString()

    const startsDateCompare = today + '-' + thisMonth

    const endsDateCompare = today + '-' + thisMonth

    var startofweek = moment().startOf('week').date()

    prisma.$disconnect()

    const list = 'lista certinha 0_0'

    return list
  }
}
