import { PrismaClient, User } from '@prisma/client'

let prisma: PrismaClient

describe('nada º~º', () => {
  beforeAll(() => {
    prisma = new PrismaClient()
  })
  it('test 0_0', async () => {
    const prisma = new PrismaClient()

    let users: User[]

    let user: User

    users = await prisma.user.findMany().finally()

    for (user of users) console.log(user.birthday)

    console.log(user)
  })
})
