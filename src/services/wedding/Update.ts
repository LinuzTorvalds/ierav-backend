import { PrismaClient } from '@prisma/client'

type userRequest = {
  Name: string
  Birthday: string
  Year: string
}

export default class UpdateBirthdayService {
  async execute(Code: string, { Name, Birthday, Year }: userRequest) {
    const prisma = new PrismaClient()

    if (!Code) throw new Error('Code incorrect')

    const user = await prisma.wedding_aniversary.update({
      data: {
        name: Name,
        birthday: Birthday,
        year: Year,
      },
      where: { code: Code },
    })

    const userFind = {
      code: user.code,
      name: user.name,
      birthday: user.birthday,
      year: user.year,
    }

    prisma.$disconnect()

    return userFind
  }
}
