import {
  birthdays,
  PrismaClient,
  wedding,
  wedding_aniversary,
} from '@prisma/client'
import moment from 'moment'
// import xl from 'excel4node'
// const wb = new xl.Workbook({
//   dateFormat: 'dd-mm-yyyy',
// })
// const ws = wb.addWorksheet('teste')

export default class BirthdayListService {
  async execute() {
    const prisma = new PrismaClient()

    //Brithdays
    let birthdays: birthdays[]

    birthdays = await prisma.birthdays
      .findMany()
      .finally(() => prisma.$disconnect())

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
      const birthday = moment(user.birthday).add(1, 'days').format('DD-MM-YYYY')

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

    let listWeddingAnniversary = []

    for (let user of weddings_Aninversary) {
      const weddingAnniversary = moment(user.birthday)
        .add(1, 'days')
        .format('DD-MM-YYYY')

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
          listWeddingAnniversary.push({ ...user, wedding, year })
        }
      }
    }

    let result = { listBirthdays: [], listWeddingAnniversary: [] }

    result.listBirthdays = listBirthdays

    result.listWeddingAnniversary = listWeddingAnniversary

    // export data for archive .xlsx

    // ws.cell(1, 1).string('Aniversários natalicios')

    // const headingColumnNames0 = ['nome', 'data']

    // let headingColumnIndex = 1
    // headingColumnNames0.forEach((heading) => {
    //   ws.cell(3, headingColumnIndex++).string(heading)
    // })

    // let rowIndex = 4
    // result.listBirthdays.forEach((record) => {
    //   let columnIndex = 1
    //   ws.cell(rowIndex, columnIndex++).string(record.name)
    //   ws.cell(rowIndex, columnIndex++).date(record.birthday)
    //   rowIndex++
    // })
    // rowIndex++

    // ws.cell(rowIndex++, 1).string('Aniversários de casamento')

    // const headingColumnNames1 = ['nome', 'data', 'anos', 'bodas']

    // rowIndex++
    // headingColumnIndex = 1
    // headingColumnNames1.forEach((heading) => {
    //   ws.cell(rowIndex, headingColumnIndex++).string(heading)
    // })

    // rowIndex++
    // result.listWeddingAnniversary.forEach((record) => {
    //   let columnIndex = 1
    //   ws.cell(rowIndex, columnIndex++).string(record.name)
    //   ws.cell(rowIndex, columnIndex++).date(record.birthday)
    //   ws.cell(rowIndex, columnIndex++).string(record.year)
    //   ws.cell(rowIndex, columnIndex++).string(record.wedding)
    //   rowIndex++
    // })

    // wb.write('file.xlsx')

    if (
      result.listBirthdays.length === 0 &&
      result.listWeddingAnniversary.length === 0
    )
      return null
    else return result
  }
}
