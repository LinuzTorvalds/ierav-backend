import { PrismaClient } from '@prisma/client'

type userRequest = {
  Email: string
}
export default class DeleteTokenService {
  async execute({ Email }: userRequest) {
    const prisma = new PrismaClient()

    const user = await prisma.users.update({
      data: {
        token: '',
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
