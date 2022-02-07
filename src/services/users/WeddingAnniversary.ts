import { PrismaClient } from '@prisma/client'
import moment from 'moment'

export default class WeddingBirthdayUserService {
  async execute(Code: string) {
    const prisma = new PrismaClient()

    const user = await prisma.users.findFirst({ where: { code: Code } })

    const today = new Date()

    const dateCompare = moment(today).format('DD-MM')

    if (
      dateCompare !=
      moment(user.weddingAnniversary).add(1, 'days').format('DD-MM')
    )
      return false

    const info = prisma.wedding_aniversary.findFirst({
      where: { name: user.name },
    })

    return info
  }
}
