import moment from 'moment'
import { PrismaClient } from '@prisma/client'

export default class BirthdayUserService {
  async execute(Code: string) {
    const today = new Date()

    const prisma = new PrismaClient()

    const user = await prisma.users.findFirst({ where: { code: Code } })

    const dateCompare = moment(today).format('DD-MM')

    if (dateCompare != user.birthday.substring(0, 5)) return false

    return true
  }
}
