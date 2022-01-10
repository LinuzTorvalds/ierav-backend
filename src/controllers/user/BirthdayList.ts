import { Request, Response } from 'express'
import BirthdayListService from '../../services/user/BirthdayList'

export default class BirthdayListControl {
  async handle(request: Request, response: Response) {
    const birthdayList = new BirthdayListService()

    const list = await birthdayList.execute().finally()

    if (list != null) return response.json(list)
    else return response.json('Sem aniversariantes essa semana :´(')
  }
}
