import { Request, Response } from 'express'
import BirthdayList from '../../services/reports/BirthdayList'

export default class BirthdayListControl {
  async handle(request: Request, response: Response) {
    const generateBirthdayList = new BirthdayList()

    const data = await generateBirthdayList.execute()

    const fileType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'

    return response.json({ data, fileType })
  }
}
