import { PrismaClient } from '@prisma/client'

export default class ReadUserService {
  async execute(Email: string) {
    const prisma = new PrismaClient()

    const user = await prisma.user.findUnique({ where: { email: Email } })

    if (!user) throw new Error('No user found')

    prisma.$disconnect()

    return user
  }
}
