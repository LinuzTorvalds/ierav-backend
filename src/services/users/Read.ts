import { PrismaClient } from '@prisma/client'

export default class ReadUserService {
  async execute(Email: string) {
    const prisma = new PrismaClient()

    const user = await prisma.users
      .findUnique({ where: { email: Email } })
      .finally(() => prisma.$disconnect())

    if (!user) throw new Error('No user found')

    return user
  }
}
