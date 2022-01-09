import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

type userRequest = {
  Name: string
  Sex: string
  MaritalStatus: string
  Email: string
  Password: string
  Birthday: string
}

export default class UpdateUserService {
  async execute(
    Code: string,
    { Name, Sex, MaritalStatus, Email, Password, Birthday }: userRequest
  ) {
    const prisma = new PrismaClient()

    if (!Code) throw new Error('Code incorrect')

    const passwordHash = await hash(Password, 8)

    const user = await prisma.user.update({
      data: {
        name: Name,
        sex: Sex,
        maritalStatus: MaritalStatus,
        email: Email,
        password: passwordHash,
        birthday: Birthday,
      },
      where: { code: Code },
    })

    const userFind = {
      code: user.code,
      name: user.name,
      sex: user.sex,
      maritalStatus: user.maritalStatus,
      email: Email,
      charge: user.charge,
      birthday: user.birthday,
    }

    prisma.$disconnect()

    return userFind
  }
}
