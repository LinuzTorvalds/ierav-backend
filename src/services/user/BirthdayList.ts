import { PrismaClient } from '@prisma/client'
import moment from 'moment'

export default class BirthdayList {
  async execute() {
    const prisma = new PrismaClient()
    
    var today, thisMonth

    if (parseInt(date.getDate().toString()) <= 9)
      today = '0' + date.getDate().toString()
    else today = date.getDate().toString()

    if (parseInt((date.getMonth() + 1).toString()) <= 9)
      thisMonth = '0' + date.getMonth().toString()
    else thisMonth = date.getMonth().toString()

    const dateCompare = today + '-' + thisMonth

    var startofweek = moment().startOf('week').date()

    const list = await prisma.user.findMany({select : {birthday: }})

    prisma.$disconnect()

    return list
  }
}
