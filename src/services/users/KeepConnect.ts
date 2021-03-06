import { PrismaClient } from '@prisma/client'

type userRequest = {
  Token: string
}
export default class KeepConnectService {
  async execute({ Token }: userRequest) {
    const prisma = new PrismaClient()

    const user = await prisma.users
      .findFirst({ where: { token: Token } })
      .finally(() => prisma.$disconnect())

    const userFind = {
      code: user.code,
      name: user.name,
      email: user.email,
      token: user.token,
    }

    return userFind
  }
}
