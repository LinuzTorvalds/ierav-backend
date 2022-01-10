import { PrismaClient } from '@prisma/client'
import { v4 as uuid } from 'uuid'
import { hash } from 'bcryptjs'

type userRequest = {
  Name: string
  Sex: string
  MaritalStatus: string
  Email: string
  Password: string
  Charge: string
  Birthday: string
  WeddingAnniversary: string
}

export default class SignUpUserService {
  async execute({
    Name,
    Sex,
    MaritalStatus,
    Email,
    Password,
    Charge,
    Birthday,
    WeddingAnniversary,
  }: userRequest) {
    const prisma = new PrismaClient()

    if (!Email) throw new Error('Email incorrect')

    const userAlreadyExists = await prisma.user.findUnique({
      where: { email: Email },
    })

    if (userAlreadyExists) throw new Error('User already exists')

    const passwordHash = await hash(Password, 8)

    const user = await prisma.user.create({
      data: {
        code: uuid(),
        name: Name,
        sex: Sex,
        maritalStatus: MaritalStatus,
        email: Email,
        password: passwordHash,
        charge: Charge,
        birthday: Birthday,
        weddingAnniversary: WeddingAnniversary,
      },
    })

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

    prisma.$disconnect()

    return userFind
  }
}
