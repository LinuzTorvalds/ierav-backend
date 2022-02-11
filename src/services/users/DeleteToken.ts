import { PrismaClient } from '@prisma/client'

type userRequest = {
  Email: string
}
export default class DeleteTokenService {
  async execute({ Email }: userRequest) {
    const prisma = new PrismaClient()

    await prisma.users
      .update({
        data: {
          token: '',
        },
        where: { email: Email },
      })
      .finally(() => prisma.$disconnect())

    return true
  }
}
