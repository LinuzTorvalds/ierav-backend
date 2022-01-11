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

    const userAlreadyExists = await prisma.scale_users.findUnique({
      where: { email: Email },
    })

    if (userAlreadyExists) throw new Error('User already exists')

    const passwordHash = await hash(Password, 8)

    const user = await prisma.scale_users.update({
      data: {
        name: Name,
        email: Email,
        password: passwordHash,
        departament: Departament,
      },
      where: { code: Code },
    })

    const userFind = {
      code: user.code,
      name: user.name,
      email: Email,
      depaetament: Departament,
    }

    prisma.$disconnect()

    return userFind
  }
}
