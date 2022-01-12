import { Request, Response } from 'express'
import WeddingBirthdayListService from '../../services/birthdays/WeddingBirthdayList'

export default class WeddingBirthdayListControl {
  async handle(request: Request, response: Response) {
    const weddingBirthdayList = new WeddingBirthdayListService()

    const list = await weddingBirthdayList.execute().finally()

    if (list != null) return response.json(list)
    else return response.json('Sem aniversariantes essa semana :´(')
  }
}
