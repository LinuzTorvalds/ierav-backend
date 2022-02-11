import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

type userRequest = {
  Name: string
  Email: string
  Password: string
  Departament: string
}

export default class UpdateScaleUserService {
  async execute(
    Code: string,
    { Name, Email, Password, Departament }: userRequest
  ) {
    const prisma = new PrismaClient()

    if (!Email) throw new Error('Email incorrect')

    const passwordHash = await hash(Password, 8)

    const user = await prisma.scale_users
      .update({
        data: {
          name: Name,
          email: Email,
          password: passwordHash,
          departament: Departament,
        },
        where: { code: Code },
      })
      .finally(() => prisma.$disconnect())

    const userFind = {
      name: user.name,
      email: Email,
      depaetament: Departament,
    }

    return userFind
  }
}
