import {
  PrismaClient,
  birthdays,
  wedding_aniversary,
  wedding,
} from '@prisma/client'
import moment from 'moment'

describe('nada º~º', () => {
  it('test 0_0', async () => {
    const prisma = new PrismaClient()

    //Brithdays
    let birthdays: birthdays[]

    birthdays = await prisma.birthdays.findMany()

    const today = new Date()

    var sunday, saturday

    if (today.getDay() === 0) {
      sunday = moment(today)

      saturday = moment(today).add(6, 'days')
    } else {
      const days = 7 - today.getDay()

      sunday = moment(today).add(days, 'days')

      saturday = moment(sunday).add(6, 'days')
    }

    let listBirthdays = []

    for (let user of birthdays) {
      const birthday = moment(user.birthday).add(1, 'days')

      if (birthday >= sunday || birthday <= saturday) {
        listBirthdays.push({ ...user })
      }
    }

    //Wedding
    let weddings_Aninversary: wedding_aniversary[]

    weddings_Aninversary = await prisma.wedding_aniversary.findMany()

    let listWeddingAnniversary = []

    for (let user of weddings_Aninversary) {
      const weddingAnniversary = moment(user.birthday).add(1, 'days')

      if (weddingAnniversary >= sunday || weddingAnniversary <= saturday) {
        let year = moment(today)
          .subtract(moment(weddingAnniversary).format('YYYY'), 'year')
          .format('YYYY')
        let data: wedding
        if (year.substring(0, 2) === '00')
          data = await prisma.wedding.findFirst({
            where: { year: year.substring(2, 4) },
          })
        else
          data = await prisma.wedding.findFirst({
            where: { year: year.substring(1, 4) },
          })
        const wedding = data.description
        year = data.year
        listWeddingAnniversary.push({ ...user, wedding, year })
      }
    }

    let result = { listBirthdays: [], listWeddingAnniversary: [] }

    result.listBirthdays = listBirthdays

    result.listWeddingAnniversary = listWeddingAnniversary

    console.log(result.listBirthdays)
    console.log(result.listWeddingAnniversary)
  })
})
