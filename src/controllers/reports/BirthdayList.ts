import { Request, Response } from 'express'
import BirthdayList from '../../services/reports/BirthdayList'

export default class BirthdayListControl {
  async handle(request: Request, response: Response) {
    const generateBirthdayList = new BirthdayList()

    const data = await generateBirthdayList.execute()

    return response.json(data)
  }
}
