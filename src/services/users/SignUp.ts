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
  Birthday: Date
  WeddingAnniversary?: Date
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

    const userAlreadyExists = await prisma.users.findUnique({
      where: { email: Email },
    })

    if (userAlreadyExists) throw new Error('User already exists')

    const passwordHash = await hash(Password, 8)

    const user = await prisma.users
      .create({
        data: {
          code: uuid(),
          name: Name,
          sex: Sex,
          maritalStatus: MaritalStatus,
          email: Email,
          password: passwordHash,
          charge: Charge,
          birthday: new Date(Birthday),
          weddingAnniversary: new Date(WeddingAnniversary),
        },
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
