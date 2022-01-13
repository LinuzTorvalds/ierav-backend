import { PrismaClient } from '@prisma/client'
import xl from 'excel4node'
const wb = new xl.Workbook()
const ws = wb.addWorksheet('teste')

describe('nada º~º', () => {
  it('test 0_0', async () => {
    const prisma = new PrismaClient()

    const data = await prisma.birthdays.findMany()

    const headingColumnNames = ['code', 'name', 'birthday', 'year']

    let headingColumnIndex = 1
    headingColumnNames.forEach((heading) => {
      ws.cell(1, headingColumnIndex++).string(heading)
    })

    let rowIndex = 2
    data.forEach((record) => {
      let columnIndex = 1
      Object.keys(record).forEach((columnName) => {
        ws.cell(rowIndex, columnIndex++).string(record[columnName])
      })
      rowIndex++
    })

    // wb.write('file.xlsx')
  })
})
