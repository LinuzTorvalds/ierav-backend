import { PrismaClient } from '@prisma/client'

type wedding = {
  Year: string
  Description: string
}

export default class CreateWeddingsService {
  async execute({ Year, Description }: wedding) {
    const prisma = new PrismaClient()

    const wedding = await prisma.wedding
      .create({
        data: {
          year: Year,
          description: Description,
        },
      })
      .finally(() => prisma.$disconnect())

    return wedding
  }
}
