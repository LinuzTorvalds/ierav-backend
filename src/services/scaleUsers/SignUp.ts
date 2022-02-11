import { PrismaClient } from '@prisma/client'
import { v4 as uuid } from 'uuid'
import { hash } from 'bcryptjs'

type userRequest = {
  Name: string
  Email: string
  Password: string
  Departament: string
}

export default class SignUpScaleUserService {
  async execute({ Name, Email, Password, Departament }: userRequest) {
    const prisma = new PrismaClient()

    if (!Email) throw new Error('Email incorrect')

    const userAlreadyExists = await prisma.scale_users
      .findUnique({
        where: { email: Email },
      })
      .finally(() => prisma.$disconnect())

    if (userAlreadyExists) throw new Error('User already exists')

    const passwordHash = await hash(Password, 8)

    const user = await prisma.scale_users
      .create({
        data: {
          code: uuid(),
          name: Name,
          email: Email,
          password: passwordHash,
          departament: Departament,
        },
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
