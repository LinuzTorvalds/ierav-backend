import {
  birthdays,
  PrismaClient,
  wedding,
  wedding_aniversary,
} from '@prisma/client'
import moment from 'moment'

export default class BirthdayListService {
  async execute() {
    const prisma = new PrismaClient()

    //Brithdays
    let birthdays: birthdays[]

    birthdays = await prisma.birthdays
      .findMany()
      .finally(() => prisma.$disconnect())

    const today = new Date()

    var sunday: moment.Moment, saturday: moment.Moment

    if (today.getDay() === 0) {
      sunday = moment(today)

      saturday = moment(today).add(6, 'days')
    } else {
      const days = 7 - today.getDay()

      sunday = moment(today).add(days, 'days')

      saturday = moment(sunday).add(6, 'days')

      sunday = moment(sunday)
    }

    let listBirthdays = []

    for (let user of birthdays) {
      const birthday = moment(user.birthday).add(1, 'days').format('DD-MM-YYYY')

      const start: string = sunday.format('DD-MM')

      const end: string = saturday.format('DD-MM')

      if (
        birthday.substring(3, 5) == start.substring(3, 5) ||
        birthday.substring(3, 5) == end.substring(3, 5)
      ) {
        if (
          birthday.substring(0, 2) >= start.substring(0, 2) ||
          birthday.substring(0, 2) <= end.substring(0, 2)
        ) {
          listBirthdays.push({ ...user })
        }
      }
    }

    //Wedding
    let weddings_Aninversary: wedding_aniversary[]

    weddings_Aninversary = await prisma.wedding_aniversary.findMany()

    let listWeddingAnniversary = []

    for (let user of weddings_Aninversary) {
      const weddingAnniversary = moment(user.birthday)
        .add(1, 'days')
        .format('DD-MM-YYYY')

      const start: string = sunday.format('DD-MM')

      const end: string = saturday.format('DD-MM')
      if (
        weddingAnniversary.substring(3, 5) == start.substring(3, 5) ||
        weddingAnniversary.substring(3, 5) == end.substring(3, 5)
      ) {
        if (
          weddingAnniversary.substring(0, 2) >= start.substring(0, 2) ||
          weddingAnniversary.substring(0, 2) <= end.substring(0, 2)
        ) {
          let year = moment(today)
            .subtract(weddingAnniversary.substring(6, 10), 'year')
            .format('YYYY')
          let data: wedding
          if (year.substring(0, 2) === '00')
            data = await prisma.wedding
              .findFirst({
                where: { year: year.substring(2, 4) },
              })
              .finally(() => prisma.$disconnect())
          else
            data = await prisma.wedding
              .findFirst({
                where: { year: year.substring(1, 4) },
              })
              .finally(() => prisma.$disconnect())
          const wedding = data.description
          year = data.year
          listWeddingAnniversary.push({ ...user, year, wedding })
        }
      }
    }

    let result = { listBirthdays: [], listWeddingAnniversary: [] }

    result.listBirthdays = listBirthdays

    result.listWeddingAnniversary = listWeddingAnniversary

    if (
      result.listBirthdays.length === 0 &&
      result.listWeddingAnniversary.length === 0
    )
      return null
    else return result
  }
}
