import { PrismaClient } from '@prisma/client'
import { v4 as uuid } from 'uuid'

type userRequest = {
  Name: string
  Birthday: string
  Year: string
}

export default class CreateBirthdayService {
  async execute({ Name, Birthday, Year }: userRequest) {
    const prisma = new PrismaClient()

    const user = await prisma.birthdays.create({
      data: {
        code: uuid(),
        name: Name,
        birthday: Birthday,
        year: Year,
      },
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
