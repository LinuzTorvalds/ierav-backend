import SheetFactory from '../../utils/SheetFactory'
import BirthdayList from '../birthdays/BirthdayList'

export default class BirthdayListService {
  async execute() {
    const generateBirthdayList = new BirthdayList()

    const list = await generateBirthdayList.execute()

    const sheet = new SheetFactory()

    sheet.setColumnSizes([50, 30, 20, 60])

    sheet.addTitleRow(['Relatório de aniversariantes natalicios'])

    sheet.addSubtitleRow(['Name', 'Date'])

    sheet.addRows(list.listBirthdays)

    sheet.addTitleRow(['Relatório de aniversariantes de casamento'])

    sheet.addSubtitleRow(['Name', 'Date', 'Years', 'Wedding'])

    sheet.addRows(list.listWeddingAnniversary)

    const buffer = await sheet.finishSheet()

    return buffer
  }
}
