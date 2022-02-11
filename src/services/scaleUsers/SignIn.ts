import { PrismaClient } from '@prisma/client'
import { compare } from 'bcryptjs'

type userRequest = {
  Email: string
  Password: string
}

export default class SignInScaleUserService {
  async execute({ Email, Password }: userRequest) {
    const prisma = new PrismaClient()

    const user = await prisma.scale_users
      .findFirst({ where: { email: Email } })
      .finally(() => prisma.$disconnect())

    if (!user) throw new Error('Login/Password incorrect')

    const passwordMatch = await compare(Password, user.password)

    if (!passwordMatch) throw new Error('Login/Password incorrect')

    const userFind = {
      name: user.name,
      email: user.email,
      departament: user.departament,
    }

    return userFind
  }
}
