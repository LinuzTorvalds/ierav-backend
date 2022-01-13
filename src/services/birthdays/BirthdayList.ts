import { birthdays, PrismaClient, wedding_aniversary } from '@prisma/client'
import moment from 'moment'

export default class BirthdayListService {
  async execute() {
    const prisma = new PrismaClient()

    //Brithdays
    let birthdays: birthdays[]

    birthdays = await prisma.birthdays.findMany()

    const today = new Date()

    var sunday, saturday

    if (today.getDay() === 0) {
      sunday = moment(today).format('DD-MM')

      saturday = moment(today).add(6, 'days').format('DD-MM')
    } else {
      const days = 7 - today.getDay()

      sunday = moment(today).add(days, 'days').toDate()

      saturday = moment(sunday).add(6, 'days').format('DD-MM')

      sunday = moment(sunday).format('DD-MM')
    }

    let listBirthdays = []

    for (let user of birthdays) {
      const birthday = user.birthday.substring(0, 5)

      const start: string = sunday

      const end: string = saturday

      if (
        birthday.substring(3, 5) == start.substring(3, 5) ||
        birthday.substring(3, 5) == end.substring(3, 5)
      ) {
        if (
          birthday.substring(0, 2) >= start.substring(0, 2) &&
          birthday.substring(0, 2) <= end.substring(0, 2)
        ) {
          listBirthdays.push({ ...user })
        }
      }
    }

    //Wedding
    let weddings_Aninversary: wedding_aniversary[]

    weddings_Aninversary = await prisma.wedding_aniversary.findMany()

    var sunday, saturday

    if (today.getDay() === 0) {
      sunday = moment(today).format('DD-MM')

      saturday = moment(today).add(6, 'days').format('DD-MM')
    } else {
      const days = 7 - today.getDay()

      sunday = moment(today).add(days, 'days').toDate()

      saturday = moment(sunday).add(6, 'days').format('DD-MM')

      sunday = moment(sunday).format('DD-MM')
    }

    let listWeddingAnniversary = []

    for (let user of weddings_Aninversary) {
      const weddingAnniversary = user.birthday.substring(0, 5)

      const start: string = sunday

      const end: string = saturday

      if (
        weddingAnniversary.substring(3, 5) == start.substring(3, 5) ||
        weddingAnniversary.substring(3, 5) == end.substring(3, 5)
      ) {
        if (
          weddingAnniversary.substring(0, 2) >= start.substring(0, 2) &&
          weddingAnniversary.substring(0, 2) <= end.substring(0, 2)
        ) {
          listBirthdays.map((a) => {
            user
          })
          listWeddingAnniversary.push({ ...user })
        }
      }
    }

    let result = { listBirthdays: [], listWeddingAnniversary: [] }

    result.listBirthdays = listBirthdays

    result.listWeddingAnniversary = listWeddingAnniversary

    prisma.$disconnect()

    if (
      result.listBirthdays.length == 0 &&
      result.listWeddingAnniversary.length == 0
    )
      return null
    else return result
  }
}
