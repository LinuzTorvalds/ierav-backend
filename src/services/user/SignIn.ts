import { PrismaClient } from '@prisma/client'
import { compare } from 'bcryptjs'

type userRequest = {
  Email: string
  Password: string
}

export default class SignInUserService {
  async execute({ Email, Password }: userRequest) {
    const prisma = new PrismaClient()

    const user = await prisma.users.findFirst({ where: { email: Email } })

    if (!user) throw new Error('Login/Password incorrect')

    const passwordMatch = await compare(Password, user.password)

    if (!passwordMatch) throw new Error('Login/Password incorrect')

    const userFind = {
      code: user.code,
      name: user.name,
      email: user.email,
    }

    prisma.$disconnect()

    return userFind
  }
}
