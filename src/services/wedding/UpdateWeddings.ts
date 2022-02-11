import { PrismaClient } from '@prisma/client'

type wedding = {
  Description: string
}

export default class UpdateWeddingsService {
  async execute(Year: string, { Description }: wedding) {
    const prisma = new PrismaClient()

    const wedding = await prisma.wedding
      .update({
        data: {
          description: Description,
        },
        where: { year: Year },
      })
      .finally(() => prisma.$disconnect())

    return wedding
  }
}
