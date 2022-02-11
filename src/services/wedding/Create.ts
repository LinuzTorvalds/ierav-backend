import { PrismaClient } from '@prisma/client'
import { v4 as uuid } from 'uuid'

type userRequest = {
  Name: string
  Birthday: Date
}

export default class CreateWeddingService {
  async execute({ Name, Birthday }: userRequest) {
    const prisma = new PrismaClient()

    const user = await prisma.wedding_aniversary
      .create({
        data: {
          code: uuid(),
          name: Name,
          birthday: new Date(Birthday),
        },
      })
      .finally(() => prisma.$disconnect())

    const userFind = {
      code: user.code,
      name: user.name,
      birthday: user.birthday,
    }

    return userFind
  }
}
