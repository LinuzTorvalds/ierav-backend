import { PrismaClient } from '@prisma/client'
import { v4 as uuid } from 'uuid'

type userRequest = {
  Email: string
}
export default class CreateTokenService {
  async execute({ Email }: userRequest) {
    const prisma = new PrismaClient()

    const user = await prisma.users.update({
      data: {
        token: uuid(),
      },
      where: { email: Email },
    })

    const userFind = {
      code: user.code,
      name: user.name,
      email: user.email,
      token: user.token,
    }

    prisma.$disconnect()

    return userFind
  }
}
