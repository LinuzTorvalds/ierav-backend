import { Request, Response } from 'express'
import WeddingBirthdayUserService from '../../services/user/WeddingBirthday'

export default class WeddingBirthdayUserControl {
  async handle(request: Request, response: Response) {
    const { weddingBirthday } = request.params

    const WeddingBirthday = new WeddingBirthdayUserService()

    const user = await WeddingBirthday.execute(weddingBirthday).finally()

    if (user == true) return response.json('0k')
    else return response.json('no')
  }
}
