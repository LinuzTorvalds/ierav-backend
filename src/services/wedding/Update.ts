import { PrismaClient } from '@prisma/client'

type userRequest = {
  Name: string
  Birthday: Date
}

export default class UpdateBirthdayService {
  async execute(Code: string, { Name, Birthday }: userRequest) {
    const prisma = new PrismaClient()

    if (!Code) throw new Error('Code incorrect')

    const user = await prisma.wedding_aniversary
      .update({
        data: {
          name: Name,
          birthday: new Date(Birthday),
        },
        where: { code: Code },
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
