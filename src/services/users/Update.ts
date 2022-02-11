import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

type userRequest = {
  Name: string
  Sex: string
  MaritalStatus: string
  Email: string
  Password: string
  Birthday: Date
  WeddingAnniversary?: Date
}

export default class UpdateUserService {
  async execute(
    Code: string,
    {
      Name,
      Sex,
      MaritalStatus,
      Email,
      Password,
      Birthday,
      WeddingAnniversary,
    }: userRequest
  ) {
    const prisma = new PrismaClient()

    if (!Code) throw new Error('Code incorrect')

    const passwordHash = await hash(Password, 8)

    const user = await prisma.users
      .update({
        data: {
          name: Name,
          sex: Sex,
          maritalStatus: MaritalStatus,
          email: Email,
          password: passwordHash,
          birthday: new Date(Birthday),
          weddingAnniversary: new Date(WeddingAnniversary),
        },
        where: { code: Code },
      })
      .finally(() => prisma.$disconnect())

    const userFind = {
      code: user.code,
      name: user.name,
      sex: user.sex,
      maritalStatus: user.maritalStatus,
      email: Email,
      charge: user.charge,
      birthday: user.birthday,
      weddingAnniversary: user.weddingAnniversary,
    }

    return userFind
  }
}
